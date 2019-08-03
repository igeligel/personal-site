---
title: "2017 at 3YOURMIND — Front-end Review"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "12/29/2017"
tags:
  - software-engineering
  - programming
  - python
  - clean code
---

# 2017 at 3YOURMIND — Front-end Review

The year 2017 was awesome for 3YOURMIND in terms of front-end. We started this year with our old application structure which was based on Django Templates, the mighty jQuery, and Knockout. We never added any transpilers to work with modern code standards, had linters or other code quality tools or had any unit tests. In the end, this resulted in a lot of bugs and during the first quarter of the year we were mostly fixing bugs in front-end and back-end about a specific feature. We also used pre-ES5 syntax since the developers were not used to, for example, Array.prototype methods.

We were writing something like:

```js{3-10}
self.attachmentRequiredCheck = function() {
  var nbLines = self.projectLines().length;
  for (var i = 0; i < nbLines; i++) {
    if (
      self.projectLines()[i].is_manual_pricing_required() &&
      !self.projectLines()[i].lineAttachment().length
    )
      return false;
  }
  return true;
};
```

This was just ugly and could be natively solved in a faster and more efficient way by calling the `Array.prototype.some()` function.

```js{3-8}
self.attachmentRequiredCheck = function() {
  var projectLines = self.projectLines();
  return projectLines.some(function(projectLine) {
    return (
      projectLine.is_manual_pricing_required &&
      projectLine.lineAttachment().length === 0
    );
  });
};
```

This is still not perfect since the anonymous function should be refactored into an external function, but it was a lot better than before. But to make sure those changes work, we would need to ensure that the refactoring would not change the actual behavior of the code. The problem here was the mix of technologies we are using. We couldn’t really unit test them in a sensible way. Sometimes the JavaScript was inline inside the HTML or references to globally declared functions or variables were made which were also included inline in the HTML Django templates. This resulted in a huge mess for testing and only code which was extracted into its own JavaScript file got tested. Another problem was how Knockout was included. The initial design included it by an inline script via a local version. This resulted in global namespace disruption and that made tests even harder to create. In the end, we tried to validate the idea of writing unit tests for those Knockout view models, but the pain was not worth it at all since we had other plans in mind already. jQuery as global dependency was not helping either.

The long-term plan was to introduce a new front-end framework at the end of the first quarter of the year and just write REST APIs to communicate between the front-end and the Back-end. We also thought about introducing [GraphQL](http://graphql.org/) but the technology was too immature for us at that point. With regards to the front-end framework, we decided on [Vue.js](https://vuejs.org/). Several team members knew it already and we thought it was easy to integrate into our current system.

The first feature we implemented with Vue.js was the commenting system which is now open source ([3YOURMIND/vue-comments](https://github.com/3YOURMIND/vue-comments)). This component was written in a way so we can reuse it in different applications of our product stack. The hard part of this task was the webpack integration into the ancient Django build workflow. The gist of what we did is shown in this diagram:

![Simplified build process of Vue-Django-integration](https://cdn-images-1.medium.com/max/2000/1*J3_E8Hk3MP-d8_tXE-DhhA.png)_Simplified build process of Vue-Django-integration_

What is shown is that webpack is bundling the entry point and then inject those with the html-webpack-plugin into a file which is a Django file. This file is then a Django template component and can be used like any other Django template. Obviously, we could not really introduce features such as [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/), but this experience with [webpack](https://webpack.js.org/) gave us many insights on how we should build and bundle our application in the future.

In the mean time, we also created another product which is called AMPI (**A**dditive **M**anufacturing **P**art **I**dentifier). This product is based on the popular [Vue.js webpack template](https://github.com/vuejs-templates/webpack) and at the Back-end the [Django REST Framework](http://www.django-rest-framework.org/) is serving the APIs. The experience with this product was really great for everyone involved and we decided then to base every new client application on Vue.js if it would be viable.

Since we are a B2B software business for 3D printing companies or big manufacturing companies, our main users are on desktop machines. This means that we need to support a lot of old browsers since customers are using, for example, Internet Explorer 11. I can tell you, however, that Internet Explorer 11 is much nicer than 9. For CSS support we have not got a lot of problems since we are just using small CSS-frameworks like [purecss](https://purecss.io/) or [spectre.css](https://picturepan2.github.io/spectre/) which provide minimal styles. We care about the grid being good and design a lot of components internally since this gives us much more security and we can work with classes however we want (CSS namespacing is hard). For non-supported JavaScript features, we are using a service called [polyfill.io](https://polyfill.io). This service creates polyfills via the server based on the user-agent and other detection methods and works for almost every browser. What is actually really good about it, is that you can host it yourself. This was a key requirement for the customers that bought the enterprise version of our software, which is hosted on their network without access to the outer internet. We implemented this service in all of our products to make sure the application works consistently throughout different platforms.

After writing AMPI and the commenting system, the team decided to go all in with Vue.js. The next feature in our pipeline was the partner service configuration panel which needed a refactor. It was mainly built on Django and the templating engine there with some jQuery and Knockout hacks. Those hacks made it really hard to change a lot in a nice way. Unit testing those components was also really hard since we needed to mockup a lot of different dependencies. We started to build a new project based on the Vue.js webpack template and introduced it into our codebase. We also split up the new front-end environment into a different repository which we call yoda internally. All of the front-end code now live in this repository. This made the separation of front-end and back-end more clear and it is easier to navigate around if you find a bug or need to improve a specific code block. The code base is now around 10.000 lines of code long, but we plan on decreasing this amount in the future by splitting out different modules and make them open-source. Even though our partner configuration panel is not finished yet the internal and external feedback is great and overall everyone loves the redesign and the simpler usability. The loading times are also really fast now since we are communicating with an API and Django just handles data and doesn’t render templates anymore. We could probably decrease the load time again with server-side rendering but since we get no real profit out of server-side rendering we are not planning on introducing this. For us, client-side rendering is enough.

Like I mentioned the front-end team is also working on making a lot of components open-source since they do not provide business value on their own. You can visit [3YOURMIND’s organization panel at GitHub](https://github.com/3YOURMIND). As of the state right now we got a commenting system and a notification library for Vue.js open-source and many more things are planned to get to the open-source world.

![Design system of 3YOURMIND](https://cdn-images-1.medium.com/max/6796/1*DLKIlRPjKVjFA2aYolg0fg.png)_Design system of 3YOURMIND_

Another notable thing is that we finally got unit and integration tests on the front-end. Thanks to vue-test-utils ([GitHub](https://github.com/vuejs/vue-test-utils), [Documentation](https://vue-test-utils.vuejs.org/)) and Jest ([GitHub](https://github.com/facebook/jest), [Documentation](https://facebook.github.io/jest/)) we are able to easily test our Vue.js application. Following the documentation of those two frameworks is really easy and the setup is working seamlessly. vue-test-utils, in particular, has allowed us to thoroughly test our application by providing features such as vuex and vue-router mocking, enabling us to write more meaningful unit tests. The only problem we still have is measuring test coverage but we are working on fixing that in the coming weeks. Another thing which changed is the design of the platform.

Thanks to our UX team we got a new design approach to get away from a custom bootstrap style. Those styles are now laid out in a design system which you can also find on our [GitHub page](https://github.com/3YOURMIND/kotti). This system defines our styles now and we plan to introduce this style to our whole platform at some point, but this might still take a while.

We also have greater possibilities for translation in our code, using [Crowdin](https://crowdin.com/). This enables translators to get direct access to translations and see them live in our application. This is called in-context translations and is helping to reduce communication overhead between translators and front-end engineers (an introduction to this, and how we integrated it, will be its own blog article).

Overall the year was really successful in terms of front-end. We are now using new technologies like ES6+, Vue.js, ESLint, webpack, Jest, Crowdin and many more. These technologies make it easy for us to write future ready code and will let us create faster iterations of our products.

**Thanks for your time reading this article. You rock** **🤘**
