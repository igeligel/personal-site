---
title: "Large-scale Vuex application structures"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "10/25/2017"
tags:
  - programming
  - python
  - clean code
---

# Large-scale Vuex application structures

Also read up other stories by me like:

- Learn how to refactor Vue.js Single File Components with a real-world example
- What makes a nice development project?
- Composing computed properties in Vue.js

![Me trying to handle state and structure in large applications](https://cdn-images-1.medium.com/max/2000/1*8bJABwdvIMwAdwO3YDAfkw.gif)_Me trying to handle state and structure in large applications_

When writing large-scale applications, managing the state of the frontend can be quite hard. For _Vue.js_ applications, for example, there is a plugin called _Vuex_ that offers state management in a really simple way , and suggests using the following application structure:

<p style="display: flex; flex-direction: column;">
  <img style="width: 200px !important; align-self: center" src="https://cdn-images-1.medium.com/max/2000/1*was7qVRCgimsQY9kJw3Ytg.png" />
  <em>
    <a href="https://vuex.vuejs.org/en/structure.html">
      Vuex recommended application structure
    </a>
  </em>
</p>

If you are curious about an example, lookup the shopping-cart example in the official _Vuex_ repository ([vuejs/vuex — shopping-cart](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)) or the example I created ([igeligel/vuex-simple-structure](https://github.com/igeligel/vuex-simple-structure/tree/master/src/store)).

This really works great because we have simple _Vuex_ modules containing the actions, getters and mutations in the scope of this module. Shared actions, getters or mutations are saved inside the store directory directly. Then all those modules, global actions, getters and mutations are imported into the index.js file and exported again within the constructor of the _Vuex_ module. Nevertheless a problem might appear when you get more and more modules, which is really common for big applications. Just imagine an application like [GitLab](https://gitlab.com). It is big enough to contain a lot of modules. For example, the sidebar of GitLab’s repository view looks something like this:

<p style="display: flex; flex-direction: column;">
  <img style="width: 200px !important; align-self: center" src="https://cdn-images-1.medium.com/max/2000/1*_V8FKT0XNxHYtvg38qXhTw.png" />
  <em>
    Sidebar in the repository view of a GitLab repository
  </em>
</p>

Every menu entry would basically be a module containing several actions, getters and mutations. All those parts are just listed inside a single module file. This will not really scale well, since even modules can get quite large given how much functionality a module needs and result in modules having more than 1000 lines of code.

But there is a solution to this problem. We could just extract the actions, getters and mutations inside the module directories. Global actions, getters or mutations could live directly in the store directory. The application structure would look like this:

<p style="display: flex; flex-direction: column;">
  <img style="width: 200px !important; align-self: center" src="https://cdn-images-1.medium.com/max/2000/1*68tnxkEFg4Td0s4gzrAFvg.png" />
  <em>
    Module based store
  </em>
</p>

Basically, you would still have the possibility of using global actions, getters and mutations, but I would not recommend it since it is not really necessary. With this approach, we will have multiple and separated files. All actions, getters and mutations of the chat module will be imported by the index inside the chat directory. This module will then be imported into the global store. Important to note is that you should set the [namespace option](https://vuex.vuejs.org/en/modules.html) inside the modules so you have proper namespacing. This is done in the store/index.js file:

```js
import Vue from "vue";
import Vuex from "vuex";
import chatModule from "./modules/chat/index";
import productsModule from "./modules/products/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chat: chatModule,
    products: productsModule
  }
});
```

Inside this store, we have the two modules: chat and products. Both modules hold actions, getters and mutations and are imported into the main module file index.js of the module and then exported again. Finally the exported data can get used by the store module.

![Structuring of modules](https://cdn-images-1.medium.com/max/2124/1*rWbfpFXSBnKVmDjdOXxYRw.png)_Structuring of modules_

This would register the modules and the code would be separated in such a way that it is still readable, navigable and maintainable. A good example of this implementation can be found inside [bstavroulakis/vue-wordpress-pwa](https://github.com/bstavroulakis/vue-wordpress-pwa) or in my implementation [igeligel/vuex-namespaced-module-structure](https://github.com/igeligel/vuex-namespaced-module-structure). This application structure will handle small to medium applications really well. A new developer to the codebase will not struggle to find places where the business logic lives since every module should have a proper name and reference inside the components. It is really interesting to work with modules, and this is explained in the [official documentation](https://vuex.vuejs.org/en/modules.html).

At some point though, there is a problem. Your backend team is creating many more APIs and the application is getting more and more complex. You reach 20, 30 or 50 modules. Still maintainable but the new intern you got is struggling with the architecture since he is not sure where the business logic is called. Then you ask yourself how you could structure this better. You could probably do the API calls directly in the components, but this would be a huge mess since components would then be holding business logic. Components should just be there to render data. Not handling data.

In [React](https://reactjs.org/) there is the concept of containers and components. It is not strongly enforced by _Vue.js_. Containers are just components, but they can also fetch data from the store and speak to a store. Components are just there to hold the data and render it. They communicate via props to those upper containers. Let us imagine a chat widget inside our application which needs to get some kind of data from the store or even better from the API. We will just create a simple example by getting all messages from the chat and no real-time support. Let us assume we have some kind of container which holds the whole chat. This container will communicate with the store to update data, or to populate data to the presentation components. The whole architecture is shown in this little graphic:

<p style="display: flex; flex-direction: column;">
  <img style="width: 500px !important; align-self: center" src="https://cdn-images-1.medium.com/max/2000/1*H9d9UQ4sVG9mQ3JIFzJW3A.png" />
  <em>
    Architecture of the chat widget
  </em>
</p>

In this system we have a container called Chat.vue which communicates to our store module chat. This chat module also handles the logic by calling the API and updating the store. When the state has finally updated the container, Chat.vue will also be updated by using a computed property which will be updated by the reactive nature of _Vue.js_ and _Vuex_. After this, the property will be handed down to ChatList.vue as props. Since the props are an Array in this component, an iteration will take place which will render a list of ChatListElement.vue components which are responsible for rendering the chat messages and meta information.

With this pattern, we have split the application into three parts. One part is the business logic which exists inside the module of the store or more generally just in the store, the container elements which are responsible for getting the data and populating it to the presentation components, which are just there for rendering the data. This offers us great modularity and supports the single responsibility principle. It provides also good testability since you can test each part of this structure by itself. Together they will form some kind of integration test. But this can be discussed in another article.

Now imagine the application grows a lot. By a lot, I mean you have several modules and it is not clear where those modules are used anymore, which components depend on them and which do not. In huge applications, this can be a real problem. Imagine someone new to the codebase overlooking 50 modules and somewhere around 50 components. He would have a big problem to navigate around.

_Vuex_’s recommendation is to have directories of features of business logic inside the store directory. Sometimes the connection to the containers which are using those modules can be broken up and it gets unclear where those _Vuex_ modules are used. Some modules might just be there because of one container so it would be good to have this business logic somewhere near the container which will handle the data. Let us restructure the application a bit. This template is based on [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack).

<p style="display: flex; flex-direction: column;">
  <img style="width: 200px !important; align-self: center" src="https://cdn-images-1.medium.com/max/2000/1*UtcKuaTf36yJspMKvttd5g.png" />
  <em>
    Improved application structure
  </em>
</p>

The only difference is that I installed _Vuex_ to this template, set it up and added the modules directory below the src directory. You can find this application later in this blog post. The difference with this directory is that it contains modules. Do not mix up these modules with _Vuex_ modules. There is probably a better name, so if you know one please comment it under this article. So, inside the modules directory, we have the modules of this _Vue.js_ application. It looks something like this:

<p style="display: flex; flex-direction: column;">
  <img style="width: 200px !important; align-self: center" src="https://cdn-images-1.medium.com/max/2000/1*BVlO1MibV0wJgrdcA7Wd1w.png" />
  <em>
    Inside the modules directory
  </em>
</p>

Inside the modules directory, there are several directories describing the different features. For example, we have the chat and products feature. The interesting thing, though, is inside those module directories. We have a store directory, a index.vue file and components. To clear things up we will just look at the _Single File Component_ files. The index.vue is used as a container component. This container will fetch all data out of the store and pass this data as props to the components. The components ChatList.vue and ChatListElement.vue are just there to get the data out of the component and trigger actions to the store, which is globally attached to the _Vue.js_ instance. The big question is why those components are not in the components directory. The reason is that those components are specially made for this feature. If they would have been reused for another feature then I would consider moving it into components directory. Basically the question here, is if the component is reused in some way. Then we should refactor the component into the shared component directory. Now comes the store. It is basically the same store as in the other pattern but moved into the local directory store. To register it we use the registerModule function from _Vuex_. This function will register the _Vuex_ module dynamically. Normally it is used for plugins, but we will use it here for better separation of concerns. Inside the index.vue file we can access the lifecycle functions by _Vue.js,_ and inside the created function we can safely create our module.

```js
import { mapGetters } from "vuex";
import store from "./_store";
import ChatList from "./_components/ChatList";

export default {
  name: "ChatModule",
  components: {
    ChatList
  },
  computed: {
    ...mapGetters({
      messages: "$_chat/messages"
    })
  },
  created() {
    this.$store.registerModule("$_chat", store);
  },
  mounted() {
    this.$store.dispatch("$_chat/getMessages");
  }
};
```

We prefix it with \$\_ to show that this module is private, since it is just available within the module. After registering, the store will be populated to our global _Vuex_ store. From there on we can use those _Vuex_ functionalities inside our components. To register the store we need to somehow bind the _Vuex_ functionality to the _Vue.js_ instance. This can be done easily done by creating an empty _Vuex_ store, exporting it and appending it to the _Vue.js_ constructor. Lookup these files to get the idea ([store/index.js](https://github.com/igeligel/vuex-feature-scoped-structure/blob/master/src/store/index.js), [main.js](https://github.com/igeligel/vuex-feature-scoped-structure/blob/master/src/main.js)).

If we find ourselves needing some kind of global store, I would create a _Vuex_ module under the store directory with the recommended structure. If, for example, we need to authenticate at different places inside the application, it would be better to have it shared in a way which is not coupled to containers. This would be a nice use case for having the shared _Vuex_ module.

<p style="display: flex; flex-direction: column;">
  <img style="width: 200px !important; align-self: center" src="https://cdn-images-1.medium.com/max/2000/1*Qfpylm_u-erFXyVSc5Jw8g.png" />
  <em>
    Global Vuex modules
  </em>
</p>

Some of the pitfalls: It is probably not clear which modules to make global or just locally available and it is really hard to decide. It is also really hard to find components which should be global, but basically, all generic components should be inside this directory which is used by different modules. It is really hard to maintain this structure but in the end, I think it is worth it in order to scale the application. Another pitfall is the naming. You have components directories all over the place now. It’s probably better to name the directory inside the modules \_components to show they are private components but this is something of personal preference.

A good argument for this structure is that modules are somehow extractable. If a feature gets too big you can just extract it by creating a module out of its directory inside the src/modules directory and make a npm package out of it. The only thing you would need to export is the container component. This npm package can then be hosted on your company’s registry or publically on npm. Just be sure to somehow make the behaviors of the _Vuex_ module configurable. Another good argument is that tests can be written in a feature scoped way.

The most positive argument is that the scope of the _Vuex_ module, the containers and the components is clear to every developer who is reading through the code. You can find the business logic of every feature really fast and features are easily testable since the principle of separation of concerns is used throughout the whole application.

Examples of the different structures:

- [igeligel/vuex-simple-structure](https://github.com/igeligel/vuex-simple-structure)

- [igeligel/vuex-namespaced-module-structure](https://github.com/igeligel/vuex-namespaced-module-structure)

- [igeligel/vuex-feature-scoped-structure](https://github.com/igeligel/vuex-feature-scoped-structure)

## Still here?

> You might enjoy reading:

- [Learn how to refactor Vue.js Single File Components with a real-world example](https://medium.com/@kevin_peters/learn-how-to-refactor-vue-js-single-file-components-on-a-real-world-example-501b3952ae49)
- [What makes a nice development project?](https://medium.com/@kevin_peters/what-makes-a-nice-development-project-49ac358250be)
- [Composing computed properties in Vue.js](https://medium.com/@kevin_peters/composing-computed-properties-in-vue-js-87b4507af079)

Thanks for reading this article. I appreciate it 🙂 You can follow me on [twitter](https://twitter.com/kevinpeters_) or come to [my personal site](https://www.kevinpeters.net/) where you can find more blog articles and a little bit more about me and my projects.

This blog post was written in cooperation with the company [3YOURMIND](https://www.3yourmind.com/). We are looking for developers in Berlin. You can find openings [here](https://www.3yourmind.com/career). We are a 3D Printing startup with a lot of cool engineers using _Vue.js_, _Django REST_, _Java_, _Docker_ and many more frameworks to change the enterprise 3D printing world.
