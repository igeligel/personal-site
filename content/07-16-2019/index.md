---
title: "Adding object properties conditionally with EcmaScript 6 (ES6)"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "07/16/2019"
tags:
  - javascript
  - programming
  - python
  - clean code
---

# Adding object properties conditionally with EcmaScript 6 (ES6)

_Source: [https://twitter.com/bmeurer/status/1137025197557669888](https://twitter.com/bmeurer/status/1137025197557669888)_

This was a tweet recently by an engineer from Google who is working on the V8 engine powering the Google Chrome web browser and Node.js. It got me to think what use-cases are extremely helpful for me and that I should share them with the world here.

### Adding a property to an object

Adding a property to an object is quite easy in JavaScript. You can basically do it like in the following code.

```js
const person = {
  firstName: "Max"
};
person.lastName = "";
```

But imagine the lastName should just be added if there is a specific conditional.

```js
const person = {
  firstName: "Max"
};

const condition = getCondition();

if (condition) {
  person.lastName = "";
}
```

This still looks fine but what if we combine conditions and add them into multiple if blocks?

```js{8-10,12-14}
const person = {
  firstName: "Max"
};

const condition = getCondition();
const additionalCondition = getAdditionalCondition();

if (condition) {
  person.lastName = "";
}

if (additionalCondition) {
  person.addition = "";
}
```

It looks a lot harder to read overall and a function with this code would grow a lot even though it is just doing simple things.

EcmaScript 6 (ES6) is a new standard which enables a lot of new features in the language JavaScript. With those features, we could write the following code.

```js
const condition = getCondition();
const additionalCondition = getAdditionalCondition();

const person = {
  firstName: "Max",
  ...(condition && { lastName: "" }),
  ...(additionalCondition && { addition: "" })
};
```

The result of the value of person would be the same as in the script mentioned above. But how does this work?

### The && operator

`&&` is a logical operator in JavaScript and is combining boolean values by using AND . It can be used with two parameters. Let us assume those parameters are a and b . When we apply the `&&` parameter it would look like `a && b` . This will result in a boolean as a result which can be either `true` or `false`. It will be true if both of the parameters are also true . If one, or both, are false the result will be false too.

```js
const a = true;
const b = true;
const result = a && b;
console.log(result);
// Will log true
```

```js
const a = false;
const b = true;
const result = a && b;
console.log(result);
// Will log false

const c = false;
const d = false;
const result = c && d;
console.log(result);
// Will log false
```

A specialty is also that when not using booleans for a or b it can happen that no boolean is getting returned. We can simply check this by using the browser console.

```js
const a = true;
const b = "Magic String";
const result = a && b;
console.log(result);
// Will log "Magic String"
```

We can extend this feature and also return an object which is super nice.

```js
const condition = true;
const result = condition && { lastName: "" };
console.log(result);
// Will log { lastName: "" }
```

But somehow we need to merge this object into the person object above 🤯

### Merging Objects

Merging objects is possible for a long time already in JavaScript with the `Object.assign` functionality.

```js
const basePerson = {
  firstName: "Max"
};
const person = Object.assign({}, basePerson, { lastName: "" });
```

What happens here is that the last parameter `{ lastName: ""}` gets merged into the object `basePerson`. If properties would be the same the last object would win and overwrite the property of the preceding object. Also Object.assign is mutable function. This means it will apply all changes to the first parameter in all parameters of the function. To avoid changes to the basePerson object we pass an empty object as the first parameter, so a new object is being created rather than an old one which is reused.

EcmaScript 6 (ES6) offers a nicer way to do these merges.

```js
const basePerson = {
  firstName: "Max"
};

const person = {
  ...basePerson,
  lastName: ""
};
```

This would result in the same person object as before with the properties `firstName` and `lastName`. Also, here the last properties are overwriting the first properties, but we still have a problem of applying the object returned in the `&&` expression into the object because the current version assumes that `lastName` is just a key and has a static value.

We can pass an object to be destructured though into the person object to actually pass an object rather than key and a value.

```js
const basePerson = {
  firstName: "Max"
};

const person = {
  ...basePerson,
  ...{ lastName: "" }
};
```

This might be enough now to refactor and put in a variable but we have one problem as `const result = condition && { lastName: "" };` could result in either `false` or `{ lastName: "" }`. If we pass the object `...{ lastName: "" }` to the destructuring function everything is fine but what is happening if we pass something like ...false in?

![JavaScript being clever](https://cdn-images-1.medium.com/max/2000/1*iTnk_ASzXCFzdBvPmO2z5A.gif)_JavaScript being clever_

Actually, this would result in nothing when being used in an object. This also means we can use it in the big destructuring functionality.

```js
const basePerson = {
  firstName: "Max"
};

const condition = getCondition()
const result = condition && { lastName: "" };
// Can be either false or { lastName: "" }

const person = {
  ...basePerson,
  ...result
};
// Can be { firstName: "Max" } or { firstName: "Max", lastName: "" }
```

This is super nice but can be still improved by inlining the result somehow.

```js
const basePerson = {
  firstName: "Max"
};

const condition = getCondition();

const person = {
  ...basePerson,
  ...(condition && { lastName: "" })
};
```

This is a super slick example on how to extend objects conditionally in JavaScript and really shows that when using modern language we can use a more crisp syntax to express ourself.

These functions become especially important when you create the same type of object, sometimes with some properties and sometimes not. Think of factory functions for unit or integration tests.

![](https://cdn-images-1.medium.com/max/2800/1*_AIONgegEOSemuP85tCt9A.png)

> Thanks for reading this. You rock 🤘
>
> Also check my other blog articles like [Function parameters in JavaScript](https://medium.com/@kevin_peters/function-parameters-in-javascript-clean-code-4caac109159b), [Learn how to refactor Vue.js Single File Components with a real-world example](https://medium.com/@kevin_peters/learn-how-to-refactor-vue-js-single-file-components-on-a-real-world-example-501b3952ae49) or [How to debug JavaScript applications and tests](https://itnext.io/how-to-debug-javascript-applications-and-tests-9718fe610f7d).
>
>  If you have any feedback or want to add something to this article just comment here. You can also follow me on [twitter](https://twitter.com/kevinpeters_) or visit my [personal site](https://www.kevinpeters.net/) to stay up-to-date with my blog articles and many more things.
