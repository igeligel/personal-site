---
title: "Unit testing Vue.js components with Jest"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "vue.js"
date: "07/15/2017"
tags:
  - programming
  - vue.js
  - javascript
  - jest
---

# Unit testing Vue.js components with Jest

Foreword: I integrated all the new JavaScript stuff into a legacy application. Because of this reason and that the old JavaScript was horrible and not tested, I decided to set things up right this time. So that this JavaScript hell I worked with will never exist anymore (or at least will not exist in future iterations).

You probably heard about the article [Jest for all: Episode 1 — Vue.js](https://hackernoon.com/jest-for-all-episode-1-vue-js-d616bccbe186) by [Cristian Carlesso](https://hackernoon.com/@kentaromiura_the_js_guy), but in my opinion some stuff is unnecessary for unit testing. So let’s start with the basics. Also, he is focusing a lot on snapshot testing.

We will create a new Vue.js project with the [webpack template](https://github.com/vuejs-templates/webpack) on GitHub. We need to set up the project. But this time we will add nothing to the tests. So let’s do this with a new project:

```bash
$ npm install -g vue-cli
$ vue init webpack vue-jest
```

We also need to setup some stuff in this template. See my option table to see what I have set to the prompts. You definitely should not install Karma + Mocha and Nightwatch.

<iframe src="https://medium.com/media/bfc753481b10d8d8a950150cffd62182" frameborder=0></iframe>

Now we can switch to our freshly created project and see if everything is working. But after switching to the project we need to install the dependencies first.

<iframe src="https://medium.com/media/f27594c2b6ebcc82e7ce1ab0a144990b" frameborder=0></iframe>

Now we have a fresh project without any testing utility. Let’s start adding the dependencies. We need several dependencies to test with Jest since it is normally just testing JavaScript files. So we need to tell it how to handle Vue.js Single File Components. But first lets install all dependencies. You can install those libraries via yarn or npm with this command:

<iframe src="https://medium.com/media/925ae58213ee459529a6400f95271fac" frameborder=0></iframe>

After we have installed all dependencies we can start with the real stuff. First of all we should change the Hello.vue component. We define three new styles of the component. Those three classes will be used for the heading element based on what the data item is set to. Instead of just having a ‘msg’ inside the data of the component we also will have a boolean ‘isCrazy’. Besides that, we will also have a method to toggle this boolean to test more of our component. We also strip down our template inside the component since we do not need that much information on it.

<iframe src="https://medium.com/media/77b6bd234233ce6e3a7124f929d8b7e6" frameborder=0></iframe>

Next we need to adjust our ‘package.json’. First of all we should add a new npm task. These npm tasks become really helpful and can be defined really easily. After you have installed Jest it will generate a binary locally in your project which you can access under ‘./node_modules/.bin/jest’. Your scripts key in the package.json should look like:

<iframe src="https://medium.com/media/2962916b8385358e9d75c0309d9e4c4e" frameborder=0></iframe>

Now we can really start writing tests. Yay 👌

Create a new directory in the project called test. In this project our tests will stay. Add a new file and call it Hello.test.js. This will test our Hello.vue Single File Component. In the test we need to import different Modules. After trying to import Vue.js you will probably get some ESLint errors. We can adjust this by overriding the default configuration. Under the test directory, create a file called .eslintrc.js. In this file we will try to add unknown keywords which are provided by Jest and override some settings.

<iframe src="https://medium.com/media/52771ebd634e047e6246c1a9d2c6cdcc" frameborder=0></iframe>

This will override the eslint rules for this directory and add some globals needed for Jest testing.

<iframe src="https://medium.com/media/8a1ce0900761b5a7122a02eba7ac450b" frameborder=0></iframe>

To start, we need to import the modules _vue_, _jsdom_ and our _Hello.vue_ component. After importing these we also need to require the vue-server-renderer and use it as constructor function for a simple renderer. After this setup we can actually start writing our test. We will start by defining a ‘describe’ function which is there for the unit test context. Just put a string as first parameter like ‘Test suite for HelloComponent’. The second parameter is a function in which different test cases will be executed. Test cases are created by calling the function ‘it’ with two parameters: the first one is the name of the test, the second one is again a function. Inside the function we will extend the HelloComponent with the [Vue.js utilities](https://vuejs.org/v2/api/#Vue-extend). This will basically create a new component constructor which we can use to mock data. After creating it and mocking data we need to mount the component.

Now comes the interesting part. We could probably test the component here in a simple way, but I do not like this approach. Let’s use the vue-server-renderer to render the component to a HTML string and check different properties with jsdom inside it. Inside the render function callback we will get the string of the HTML representation we can use in jsdom to get a real DOM element inside a Node.js environment and can test it like a real DOM element. Inside the example I will mock the msg data string to ‘I am a cool message’ and will check if the textContent of the <h1> element inside the template contains this text since it should render it right. Now if you try to run the tests via

<iframe src="https://medium.com/media/fe387d6a0c785491f01a7f74292b1413" frameborder=0></iframe>

You will get some errors.

![Errors after executing tests for first time](https://cdn-images-1.medium.com/max/2000/1*EGkRpaRwx-PmxW8AFqx7zA.png)_Errors after executing tests for first time_

This is because Jest cannot compile Vue.js files to JavaScript by default. Inside the ‘package.json we need to add some Jest options. This can be done by adding a new key ‘jest’ to the configuration file. Inside this object we will add the transform key which also takes an object as value. Inside this value we will have regex patterns and pre processors for the different file types. For example , our pre processors would look like:

<iframe src="https://medium.com/media/83911425df30645032ac5d2ae7f2b0be" frameborder=0></iframe>

After adding this our test should run very smoothly. We can also test the coverage of our tested files by using the coverage option by Jest.

<iframe src="https://medium.com/media/dc0c7bfacdab1b1d50df2d32968b8869" frameborder=0></iframe>

![](https://cdn-images-1.medium.com/max/2000/1*fHuj7rLoA_nwPj-vBl76yg.png)

This will result in something like this. Probably really useful for some old enterprise companies which require >90% test coverage 👔.

I should probably also mention the watch mode by Jest. Instead of ‘coverage’ use ‘watch’ to run tests every time your code changed. Jest is so clever it will just run the tests affected by the changes. Probably really cool for running in a development environment.

Anyway, we can do a lot more inside the tests by doing several things. For example, we could check the classes which are toggled by using the method.

<iframe src="https://medium.com/media/cdae0041de736c41cfc48b86a6057a93" frameborder=0></iframe>

In the default state the HelloComponent will has one class called ‘blue’. After we toggled the class via the method ‘toggleClass()’ the component should have the two classes ‘red’ and ‘shadow’. Probably not a good idea to test the amount of classes since this could change in the future for different visual reasons. But for now its fine.

I hope I could give you a nice start into testing Vue.js with Jest. Definitely look into the [Options/Data section of the Vue.js documentation](https://vuejs.org/v2/api/#Options-Data) to find more about mocking up data. And probably instead of the custom build with vue-server-renderer and jsdom you should look into [eddyerburgh/avoriaz](https://github.com/eddyerburgh/avoriaz) or the upcoming [vue-test-utils](https://github.com/vuejs/vue-test-utils).

You also can find this blog post at my [personal blog](https://www.kevinpeters.net/blog/unit-testing-vue-js-components-with-jest).

You can find the full code in the repository:

## [igeligel/vue-jest-example](https://github.com/igeligel/vue-jest-example)
