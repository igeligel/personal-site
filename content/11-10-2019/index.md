---
title: "Add or delete a property of an object in JavaScript"
description: "Ever struggled with adding or deleting a property in JavaScript? Check this article out to learn how omitting or adding properties works in ES5 and in ES6."
seoTitle: "Add or omit a property of an object in JavaScript"
openGraphDescription: "Learn how to manipulate your JavaScript objects with this guide on how to add or omit properties in JavaScript objects."
twitterDescription: "Learn how to manipulate your JavaScript objects with this guide on how to add or omit properties in JavaScript objects."
cover: "/thumbnails/add-or-delete-a-property-of-an-object-in-javascript.png"
category: "javascript"
date: "11/10/2019"
tags:
  - javascript
  - tutorials
  - software-engineering
---

# Add or delete a property of an object in JavaScript

The ES6/ES7 way is the most common one these days because of purity. The `baseObject` can be reused later.

<ins class="adsbygoogle"
  style="display:block; text-align:center;"
  data-ad-layout="in-article"
  data-ad-format="fluid"
  data-ad-client="ca-pub-6098077505348522"
  data-ad-slot="5115296353">
</ins>

```js
const baseObject = {
  firstName: "Joe",
  lastName: "Doe",
  age: 23,
};

// Adding a property called company to an object
const addedPropertyObject = {
  ...baseObject,
  company: "Microsoft",
};
console.log(addedPropertyObject); // Will log the property company and the rest.

// Deleting the property age of the object
const { age, ...deletedPropertyObject } = baseObject;
console.log(deletedPropertyObject); // Will log the first name and last name.
```

Adding and deleting properties in ES5. A problem could be that `baseObject` is adjusted and could lead to side effects.

```js
const baseObject = {
  firstName: "Joe",
  lastName: "Doe",
  age: 23,
};

// Adding a property called company to an object
baseObject.company = "Microsoft";

// Deleting the property age of the object
delete baseObject.age;
```

There is also a way to have new instances in ES5 like JavaScript, but this will be explained later in this article. This blog will follow up now with a detailed description of how the adding and deleting is working.

1. [Adding a property to an object with ES6 JavaScript](#adding-a-property-to-an-object-with-es6-javascript)
1. [Deleting a property of an object with ES6 JavaScript](#deleting-a-property-of-an-object-with-es6-javascript)
1. [Adding a property to an object with ES5 JavaScript](#adding-a-property-to-an-object-with-es5-javascript)
1. [Deleting a property of an object with ES5 JavaScript](#deleting-a-property-of-an-object-with-es5-javascript)

## Adding a property to an object with ES6 JavaScript

To understand this procedure first, we need to understand how spread operations in JavaScript work. This functionality was introduced in ES7 (ECMAScript 7) and is widely used in every modern JavaScript application. It is mostly used for cloning objects.

Basically the spread operator is the three dots in a statement (`...`). They basically copy the own enumerable properties of an object to a new one. An enumerable property for objects is a public property that the user has set to an object.

```js
const person = {
  firstName: "Joe",
  lastName: "Doe",
};
```

In this object `person` the enumerable properties would be `firstName` and `lastName`. So if we use the spread operator on this object we could generate a new instance of this object.

```js
const newPerson = ...person;
```

This will however fail. We would need to generate a new object of the enumerable properties since enumerable properties are not a data type. Because we have a different instance then, we can also add properties easily without changing the original instance of the object.

```js
const newPerson = { ...person };
newPerson.age = 23;

console.log(person);
console.log(newPerson); // Will also log the age
```

But instead of assigning the value of the property a line later, we could actually create the object and also define the property inlined.

```js
const newPerson = { ...person, age: 23 };
console.log(person);
console.log(newPerson); // Will also log the age
```

<ins class="adsbygoogle"
  style="display:block; text-align:center;"
  data-ad-layout="in-article"
  data-ad-format="fluid"
  data-ad-client="ca-pub-6098077505348522"
  data-ad-slot="2169089889">
</ins>

## Deleting a property of an object with ES6 JavaScript

For deleting a property of an object in ES6 JavaScript, we need to understand the concept of object destructuring and object spread. Object spread is explained in the previous chapter already.

For destructuring, we will start with a simple problem. We have an object called `person` which has two properties called `firstName` and `lastName`. Both contain a simple string but could also hold any data type in JavaScript like Arrays, Sets, Numbers or even another object.

```js
const person = {
  firstName: "Joe",
  lastName: "Doe",
};
```

To access the properties right now we would need to access `person.firstName` or `person.lastName`, but for some functions which use the properties a lot of times, we would like to declutter the source code a bit and just use `firstName` or `lastName`. In traditional JavaScript, this would have been like the following code snippet shows.

```js
const firstName = person.firstName;
const lastName = person.lastName;
console.log(`Your name is ${firstName} ${lastName}`);
```

But the same can be achieved with object destructuring as the next code example shows.

```js
const { firstName, lastName } = person;
console.log(`Your name is ${firstName} ${lastName}`);
```

We can combine this behavior with the spread operator for objects. Let us imagine our base object `person` again. It has the two properties `firstName` and `lastName`. When we would destructure the `firstName` property out of the object, the object just has the `lastName` left. This object attribute is the one left of the object. It is the only left enumerable property. If the object would contain other properties like `age` the enumerable properties would consist of `lastName` and `age`. We can use this behavior to create a clone of an object "without" the destructured property.

```js
const person = {
  firstName: "Joe",
  lastName: "Doe",
  age: 23,
  company: "Stripe",
};

const { firstName, lastName, ...otherPersonDetails } = person;
console.log(otherPersonDetails); // Would log age and company
```

In this case, we omitted the properties `firstName` and `lastName` by just destructuring them. The rest of the enumerable properties are "cloned" into the new object instance `otherPersonDetails`. A big advantage of this method is that `person` can be still accessed after "deleting" the properties from the object, but we can also use the `otherPersonDetails` object as usually. This is called pure functionality since the application of the "deletion functionality" never changed the original objects.

<ins class="adsbygoogle"
  style="display:block; text-align:center;"
  data-ad-layout="in-article"
  data-ad-format="fluid"
  data-ad-client="ca-pub-6098077505348522"
  data-ad-slot="8542926548">
</ins>

## Adding a property to an object with ES5 JavaScript

The basic functionality is given in JavaScript itself. You can extend properties by calling `object.thingYouWantToCall` where `thingYouWantToCall` is the property. The special thing is that these properties can be also set and will change the original object which means the functionality here is not really pure.

```js
const baseObject = {
  firstName: "Joe",
  lastName: "Doe",
  age: 23,
};

baseObject.company = "Microsoft";
```

This would result in a state where we cannot access the basic `baseObject` with just the the `firstName`, `lastName` and `age` property. For this step, we would need to clone the object which is also possible in ES5.

```js
const baseObject = {
  firstName: "Joe",
  lastName: "Doe",
  age: 23,
};

const clonedObject = Object.assign({}, baseObject);

clonedObject.company = "Microsoft"; // Now also has company property.
// baseObject is not changed.
```

## Deleting a property of an object with ES5 JavaScript

The delete functionality of properties is also given in ES5 JavaScript. The keyword to use is `delete` and can be used similar to what the adding of a property looks like.

```js
const baseObject = {
  firstName: "Joe",
  lastName: "Doe",
  age: 23,
};

delete baseObject.age;
```

The problem with this approach again is that the original object is adjusted. This could result in side effects and that is why a software engineer should clone the object first and then delete the property from the cloned object.

```js
const baseObject = {
  firstName: "Joe",
  lastName: "Doe",
  age: 23,
};

const clonedObject = Object.assign({}, baseObject);
delete clonedObject.age; // Now does not has age property.
// baseObject still has all original properties.
```

## Conclusion and more

We can say that software engineers should always prefer to clone in the ES6 way because it has the least side effects and looks the least cluttered. In the ES5 world, a software engineer has to make sure to clone the object before actually doing an operation to stay fully compliant with pure functions. Of course, this process can be broken, but it could result in bugs. Another interesting method would be how to add properties conditionally to Objects in JavaScript. I wrote an article about that too, which you can follow here: [Adding object properties conditionally with EcmaScript 6 (ES6)](/adding-object-properties-conditionally-with-es-6/). If you are more interested in object destructuring you can also find the article [Function parameters in JavaScript](/function-parameters-in-java-script-clean-code/) on my blog.
