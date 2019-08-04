---
title: "Composing computed properties in Vue.js"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "vue.js"
date: "03/30/2018"
tags:
  - vue.js
  - programming
  - javascript
  - functional-programming
---

# Composing computed properties in Vue.js

If you have ever written a Vue.js application you surely used computed properties. Computed properties are existing to have some kind of opportunity to reduce the amount of logic in templates. A Vue.js component consists of three parts: The template, the script and the style. Those three parts can also be described as representation, logic, and style. If you fully live this standard you will not have any logic in your template. Just variables, methods calls, and other Vue.js bindings. Everything is in your `<script>` tag. Those can become really large but that is a sign for refactoring. But anyway let us concentrate on computed properties.

So basically the computed properties rely on your data and props of the component but can also react (what a good pun) on other elements like [Vuex](https://vuex.vuejs.org/en/intro.html) store properties. If you want to know more how the reactivity is working the Vue.js docs got you covered [here](https://vuejs.org/v2/guide/reactivity.html).

A problem which occurs for many Vue.js projects is that computed properties get large. This is a big problem for readability. [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), for example, states that functions should be small. This also applies to computed properties since those are just functions at the end which are called. Let us inspect this component:

```js
export default {
  name: "CommentContainer",
  computed: {
    commentsMapped(state) {
      const parentComments = [];
      const mappedComments = state.comments.comments.map(comment => {
        const copy = Object.assign({}, comment);
        copy.isOwner = comment.user.id === state.comments.userData.userId;
        return copy;
      });
      mappedComments.forEach(comment => {
        if (comment.parent === null) {
          const copy = Object.assign({}, comment);
          copy.textarea.showCommentButton = comment.textarea.text.length > 0;
          parentComments.push(copy);
        }
      });
      const result = [];
      parentComments.forEach(parentComment => {
        const copy = Object.assign({}, parentComment);
        copy.subComments = mappedComments.filter(
          x => x.parent === parentComment.id
        );
        result.push(copy);
      });
      return result;
    }
  }
};
```

I just reduced the component to include the computed property. To explain a bit. Normally this function is inside the mapState function provided by Vuex ([docs](https://vuex.vuejs.org/en/state.html)). To explain the business logic here a bit is relatively easy. In the store, there is a list of comments. Those comments have a property which is called parentId. If this parentId is not null this means the comment is a sub comment. Just imagine a reply in the Facebook comments section:

![The Facebook commenting system](https://cdn-images-1.medium.com/max/2000/1*1SJnn7EXyJW1eVCL9GN81A.png)_The Facebook commenting system_

In this component, we would have two types of comments. One main comment and one sub comment or reply.

The problem with our code above though is not the business logic. This is easy to understand if you know it. But by just looking at the code this is not clear. The first step would be to rename a lot of things. But about this, I will blog in the future since I have planned a blog series about Clean Code in Vue.js. In this blog, we will concentrate on what the code above is doing.

![](https://cdn-images-1.medium.com/max/3372/1*UBNpZSiTeLrT6jTcvQHJIA.png)

Even though this code, which was written by me (old code is always bad), was missing functional paradigms and many more cooll things, it worked. So now for the refactoring part. We decided already that we have three parts which are somehow influencing how the computed property is built. In the _User Check_, we iterate over every comment and see if the current user is the owner. If yes we assign the property to the object so we can see this later in the data structure which is important for editing or deleting a comment since this functionality should just be given by the user who created the comment. We could extract the first whole workflow into a different computed property named ownerAssignedComments . This computed property would look like the following snippet.

```js
export default {
  name: "CommentContainer",
  computed: {
    ownerAssignedComments(state) {
      const mappedComments = state.comments.comments.map(comment => {
        const copy = Object.assign({}, comment);
        copy.isOwner = comment.user.id === state.comments.userData.userId;
        return copy;
      });
    }
  }
};
```

This does not look better. At least the inside but where it gets powerful is the bigger computed property.

```js
export default {
  name: "CommentContainer",
  computed: {
    commentsMapped(state) {
      const mappedComments = this.ownerAssignedComments;

      const parentComments = [];
      mappedComments.forEach(comment => {
        if (comment.parent === null) {
          const copy = Object.assign({}, comment);
          copy.textarea.showCommentButton = comment.textarea.text.length > 0;
          parentComments.push(copy);
        }
      });
      const result = [];
      parentComments.forEach(parentComment => {
        const copy = Object.assign({}, parentComment);
        copy.subComments = mappedComments.filter(
          x => x.parent === parentComment.id
        );
        result.push(copy);
      });
      return result;
    },
    ownerAssignedComments(state) {
      const mappedComments = state.comments.comments.map(comment => {
        const copy = Object.assign({}, comment);
        copy.isOwner = comment.user.id === state.comments.userData.userId;
        return copy;
      });
    }
  }
};
```

You can see that the commentsMapped computed property shrunk down in size already. It is more clear what it is doing also. The next two parts of the computed property which are _Create Parent Comments_ and _Assign Parent-Child Comments_ both rely on mappedComments. This means we cannot put them into a computed property since both would trigger at the same time and would interfere when we want to use them both. A refactor into a method would be ideal in this case. Better to say in two methods. The first method should be called getParentComments and takes one argument which is the mappedComments or ownerAssignedComments. The second method would be named assignSubComments and would take two arguments which are the newly created parentComments and the mappedComments or ownerAssignedComments . The component would look like the following snippet.

```js
export default {
  name: "CommentContainer",
  computed: {
    commentsMapped(state) {
      const ownerAssignedComments = this.ownerAssignedComments;
      const parentComments = this.getParentComments(ownerAssignedComments);
      const childParentComments = this.assignSubComments(
        parentComments,
        ownerAssignedComments
      );
      return childParentComments;
    },
    ownerAssignedComments(state) {
      const mappedComments = state.comments.comments.map(comment => {
        const copy = Object.assign({}, comment);
        copy.isOwner = comment.user.id === state.comments.userData.userId;
        return copy;
      });
    }
  },
  methods: {
    getParentComments(ownerAssignedComments) {
      const parentComments = [];
      ownerAssignedComments.forEach(comment => {
        if (comment.parent === null) {
          const copy = Object.assign({}, comment);
          copy.textarea.showCommentButton = comment.textarea.text.length > 0;
          parentComments.push(copy);
        }
      });
      return parentComments;
    },
    assignSubComments(parentComments, ownerAssignedComments) {
      const childParentComments = [];
      parentComments.forEach(parentComment => {
        const copy = Object.assign({}, parentComment);
        copy.subComments = ownerAssignedComments.filter(
          x => x.parent === parentComment.id
        );
        childParentComments.push(copy);
      });
      return childParentComments;
    }
  }
};
```

Now the computed property is constructed out of another computed property and two method invocations which return another data structure. These functions are pure functions btw. which is recommended to use for those type of functions. They are easy to test and extend. I definitely know this code could use some functional sugar but for the example, it is not required. All in all the code of the commentsMapped computed property is a lot more readable now than before since it is shorter and more explicit.

Now we can have a look into the future: [The Pipeline Operator](https://github.com/tc39/proposal-pipeline-operator)

The Pipeline Operator is a proposal of the community to include in JavaScript. Who is familiar with functional paradigms or languages will know this kind of pattern. For all others I recommend you to read the proposal. It is awesome 🚀. Basically, it is an easier way to chain methods and the results. This would make our example even easier to read in the computed property commentsMapped.

```js
export default {
  name: 'CommentContainer',
  computed: {
    commentsMapped(state) {
      const ownerAssignedComments = this.ownerAssignedComments;
      return ownerAssignedComments
        |> this.getParentComments
        |> (_ => this.assignSubComments(_, ownerAssignedComments);
    }
  }
};
```

More functional, cleaner, still understandable and faster to read.

After all composing computed properties by chaining different properties, methods and so on makes the computed properties more readable a lot. Also, it is somehow better to refactor and test applications. One disadvantage is that more getters and setters in the Vue.js instances are created. But after all readability of code is more important than performance in most cases.

> Thanks for reading this. You rock* 🤘*
> If you have any feedback or want to add something to this article just comment here. You can also follow me on [twitter](https://twitter.com/kevinpeters_) or visit my [personal site](https://www.kevinpeters.net/) to stay up-to-date with my blog articles and many more things.
