---
title: "Vue.js review of 2017"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "12/31/2017"
tags:
  - vue.js
  - programming
  - python
  - clean code
---

# Vue.js review of 2017

Throughout this year, Vue.js has grown so much and many changes were introduced which resulted in a lot of hype in Vue.js. In this article, we will summarize what happened to Vue.js and the ecosystem this year.

![](https://cdn-images-1.medium.com/max/4080/1*o_DF98Kq2orpNNHIpPcqmQ.png)

After the article [Vue in 2016](https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3#) by [Evan You](https://medium.com/@youyuxi), the author of Vue.js, the goals for Vue.js were set for 2017. It had 37,664 stars on GitHub and was rising in popularity dramatically. This trend is still ongoing and Vue.js has now more than [78,000 stargazers on GitHub](https://github.com/vuejs/vue/stargazers) ⭐ The Vue.js community contributed 965 commits to the core of Vue.js in the year 2017 (overall there are 2475 commits) and four minor versions of this library were released (v2.2.0, v2.3.0, v2.4.0, v2.5.0; more on this later). Rapid growth in stars and popularity are seen in this year. Let’s see if this continues in 2018 🚀

![Number of releases per month](https://cdn-images-1.medium.com/max/8880/1*UuxCc2n_qNGfYj8b11ktcQ.png)*Number of releases per month*

Another minor mention should be given to the [awesome-vue](https://github.com/vuejs/awesome-vue) repository where a lot of useful libraries, videos, and other information are shared with the community. In this repository, there were 941 commits this year. Overall, there have been 1786 commits.

In the last year’s article, Evan You addressed different pain points which he wanted to tackle this year. Those have been:

* Improving the test story

* Polishing the development experience, this included better Server-Side Rendering (SSR) feedback, performance profiling in the development tools and improved command line templates

* Better discoverability of the ecosystem

* Native rendering improvements in comparison to [React Native](https://facebook.github.io/react-native/)

* Emerging web platform features, to support newer ECMAScript standards

A lot of those things have been fulfilled but let’s start with analyzing the changelog of Vue.js this year. Firstly we will spotlight the core and then strive into the ecosystem. The first minor version released this year was version 2.2.0. It included several features and improvements like:

* key in v-for for components is now required. In general, this change improves performance of list renderings in Vue.js

* Vue.js Single File Components (SFC) now require having tags being closed

* Error handling is done now via Vue.config.errorHandler . This enables better error handling for the Vue.js system, [documentation](https://vuejs.org/v2/api/#errorHandler)

* Introducing more Server-Side Rendering options for error handling and v-model customizations

* Performance profiling was introduced with Vue.config.performance, [documentation](https://vuejs.org/v2/api/#performance)

Generally this minor version of Vue.js improved performance and error handling via the public Vue.js APIs. The release happened in late February 2017 and next minor version 2.3.0 was already on its way and released at the end of April with the following changes:

* Massive Server-Side Rendering improvements: Better differentiation between SSR output and Non-SSR output via custom data attributes, better error handling and better loading options for asynchronous components

* The biggest change of Server-Side Rendering was the release of the SSR Guide though. You can find it [here](https://vuejs.org/v2/guide/ssr.html)

* Also, the API brought .sync back, [documentation](https://vuejs.org/v2/guide/components.html#sync-Modifier)

Overall this was probably the biggest release for Server-Side Rendering. It improved the documentation about this topic and is helping new developers to get up to speed really fast ⚡

Next version, to be released, was version 2.4.0 and it got published at the end of June with the following changes:

* Full asynchronous component support, this means you are not bound anymore to [code splitting](https://webpack.js.org/guides/code-splitting/) on route level but can use it on component level, this makes it possible to reduce chunks created by webpack

* Easier creation of wrapper components via $attrs and $listeners

* Server-Side Rendering performance was improved by factor 2 to 8 depending on how much your components can be optimized

Also, this release was heavily focused on Server-Side Rendering, though some other improvements like better code splitting make it easier to write smaller applications which load faster for the user.

The final release of this year was version 2.5.0. It was released in October and there have been patches going on constantly til Christmas. This release introduced the following changes:

* Improved errorCaptured hook in the public API, [documentation](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#error-handling-with-errorcaptured-hook)

* TypeScript declaration improvements. You can find a [blog article](https://medium.com/the-vue-point/upcoming-typescript-changes-in-vue-2-5-e9bd7e2ecf08) about the changes here but in general, more types and more explicit types are available, also the types for the ecosystem libraries were updated

* Functional components are now supported in templates, so you can basically use Vue Single-File Components (SFC) to render functional components, [docs](https://vue-loader.vuejs.org/en/features/functional.html)

Summarized this release have also been major improvements in error handling, functional components, and TypeScript.

After all the changes happening in the releases this year were quite nice. What is really nice to see is that APIs stayed consistent over this year and just some APIs were added to the framework itself. A lot more attention was paid to Error Handling, Server-Side Rendering and TypeScript support which makes sense for me personally and also shows that Vue.js is really stable right now.

To see if the goals of the last year are achieved we have to dig a little bit deeper into the Vue.js ecosystem. First of all, we start with the internal publications of packages and libraries. Probably the biggest in-house publication is [vue-test-utils](https://github.com/vuejs/vue-test-utils). It is still in beta, but usable and the Vue.js team is still working hard on this and the documentation is top-notch 👌 Otherwise, another template was released which is called [pwa](https://github.com/vuejs-templates/pwa). It supports PWAs out of the box and is really similar to the [webpack template](https://github.com/vuejs-templates/webpack). Both of them are kind of up-to-date and support modern tools around it out of the box. Another big change was included in the [development tools](https://github.com/vuejs/vue-devtools) extension. It is working now in Firefox. Otherwise there were no big changes for the dev tools but they were awesome already. Another library which is currently being upgraded is [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue). This plugin will be basically a linter for Vue.js Single File Components (SFC) and will support the newly created [style guide](https://vuejs.org/v2/style-guide/). With version 4.0.0 these changes will be implemented. Currently, the package is in *beta.4*. The team is also working on a cookbook on what are the best patterns to create Vue.js applications. You can find the first version at this [link](https://vuejs.org/v2/cookbook/index.html) (it is far away from version 1). Also, the Vue.js CLI is planned to be changed with version 3.0.0, but it is still in the planning/thinking phase on how to do proper changes with the basic architecture implemented.

Outside the internal changes and releases, there was also a lot happening at external parties. A lot of UI frameworks had major releases or other exciting news like that the vuetify author is working full-time now on the library nowadays. You can find a lot of resources at the [awesome-vue](https://github.com/vuejs/awesome-vue) repository like [Element](https://github.com/ElemeFE/element), [Framework7](https://github.com/framework7io/framework7), [Onsen UI](https://github.com/OnsenUI/OnsenUI), [vuetify](https://github.com/vuetifyjs/vuetify), [vue-material](https://github.com/vuematerial/vue-material) or [quasar](https://github.com/quasarframework/quasar). Also, another library or framework to keep eyes on is Nuxt.js. This is a full framework to build applications built on top of Vue.js with awesome features out of the box like SSR and many more. Check out their [website](https://nuxtjs.org/). They plan to release version 1.0.0 really soon which will also improve a lot of pain points the authors have discovered in the last year. The current beta version of Nuxt.js is version v1.0.0-rc11. The 1.0.0 version will most probably get released in 2018. For more information about Nuxt.js check out their [awesome repository](https://github.com/nuxt-community/awesome-nuxt) with a lot of resources and examples. I also think that Vue.js introduced a lot of changes to Server-Side Rendering because of this project which utilizes SSR a lot.

Another big newcomer in 2016 already was [Vetur](https://github.com/vuejs/vetur). Vetur is a [Visual Studio Code](https://code.visualstudio.com/) extension which enables a nice environment for Vue.js development. Main features are obviously code highlighting, autocompletion, and internal documentation lookups. But recently also a lot of other features were included like automatic code formatting via third-party tools like prettier, jsbeautify and similar, custom code blocks, integration of component libraries and scaffolding options. In contrast to the autoformatter in Vetur, prettier will also have Vue.js support soon for <script> and <style> tags. You can find the related pull request [here](https://github.com/prettier/prettier/pull/3563) but we need to wait for the next version of prettier. From twitter, I also heard that this will be integrated into the webpack template. With this autoformatting is not IDE/Editor-dependent anymore. Only feature which is missing about Vue.js integration for prettier is the autoformatting of the <template> tag.

On native integrations, there was also progress to show. [Weex](https://github.com/apache/incubator-weex/) is incubated now by apache and is being developed constantly. But what really popped up this year was [nativescript-vue](https://github.com/rigor789/nativescript-vue). This is an integration of Vue.js into nativescript to write native mobile applications with Vue.js components. It is not stable yet, but progress is begin made.

Another cool third-party tool which was introduced is [codesandbox](https://codesandbox.io/). It is an online editor like codepen but focused on React, Vue.js and many more front-end frameworks. It has support for Vue Single File Components and is working really great to demonstrate applications and small code snippets. If you want to check out the Vue.js template follow this [URL](https://codesandbox.io/s/vue). It is super simple to edit those files and working impressively easy and smooth.

Other than those coding-related changes there was also a lot happening in the community. The first ever Vue.js conference was hosted in Wrocław, Poland. You can find more information about the conference at [their site](http://conf.vuejs.org/) or [watch the talks](https://www.youtube.com/channel/UC9dJjbYeXjirDYYVfUD3bSw/videos). A small after-video of the conference can be viewed here:

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/TsgdiXGWlIY" frameborder="0" allowfullscreen></iframe></center>

Besides the conference, a lot of meetups were founded or got a bigger attraction. Those meetups were hosted in different cities around the world like [Paris](https://www.meetup.com/Vuejs-Paris/), [New York](https://www.meetup.com/vueJsNYC/), [London](https://www.meetup.com/London-Vue-js-Meetup/), [Berlin](https://www.meetup.com/Vue-js-Berlin/), [Chicago](https://www.meetup.com/Chicago-Vue-js/), [Amsterdam](https://www.meetup.com/VueJSMeetupAmsterdam/), [Buenos Aires](https://www.meetup.com/vuenos-aires/), [Singapore](https://www.meetup.com/Vue-JS-Singapore/), [Medellín](https://www.meetup.com/Vue-JS-Medellin/), [Tel Aviv](https://www.meetup.com/VueIsrael), [Sydney](https://www.meetup.com/vue-sydney/), [Budapest](https://www.meetup.com/Vue-js-Budapest) and many more. If your city is not on this list go to [meetup.com](https://www.meetup.com) and look for a Vue.js meetup near your city or create one. You can also find help in different communication channels of Vue.js. One of those new communication channels is the new discord server. The chat of Vue.js officially moved away from gitter to discord since it is more community focused now. You can join the discord chat via [this link](https://chat.vuejs.org/). In other news, the core team also did an [AMA on hashnode](https://hashnode.com/ama/with-vuejs-team-cj7itlrki03ae62wuv2r2005s) this year. A lot of opinions and cool side notes are dropped there.

Moreover, Monterail did a survey about Vue.js this year. You can check it out [here](https://www.monterail.com/state-of-vuejs-report). Key points to get extracted are probably the problems Vue.js have in the opinion of the developers who are using the framework. Those pain points are for example that Vue.js is really unknown in the western world, that the future is not certain, no native mobile platform is supported well in comparison to something like React Native, that the scalability of large applications written with Vue.js is unclear or not explained great and the testing of Vue.js components is not enyojable.

Those pain points collide sometimes with the goals Evan set last year for Vue.js but they got resolved partly. Let’s review the goals:

***Improving the test story ***✔️

Now with [vue-test-utils](https://github.com/vuejs/vue-test-utils) and the [great documentation](https://vue-test-utils.vuejs.org/) around it, the integration into the Vue.js project templates and general more publicity, I think this goal is completely achieved. Ok, just the version 1.0.0 needs to be dropped and everyone will be happy.

***Polishing the development experience ***📈

With the improvements of the docs like the SSR Guide, the Style Guide or the upcoming Vue.js cookbook a lot of the documentation pain points are resolved. Nevertheless, I think it is important to also give guidance for large-scale applications and it is really hard to get through and having own ideas about how to structure this. Anyway, the performance profiler was included and gives more feedback to the developers. Also, a new project template was added and the Vue.js CLI rework is in progress right now.

***Better discoverability of the ecosystem ***⚙️

The goal was to get away from awesome-vue and create a rather central guide. This is happening with the cookbook and [Vue Curated](https://curated.vuejs.org/) but personally, I am a fan of awesome-vue and never really saw Vue Curated. Probably it is better to link to recommended resources more in the documentation but on the other hand, I like Vue.js about the freedom of the ecosystem.

***Native rendering improvements ***⚙️

With weex and nativescript-vue there are now two competitors in the native mobile market in terms of Vue.js. None of both reach React Native level though. Probably in the future, this will happen but with the recent rise of PWAs, the need for native mobile applications may decrease a bit (Apple is working on Service Workers now).

***Emerging web platform features ***📈

With the next major release of Vue.js, it will drop support for old browsers and just include evergreen browsers (including edge). You can read more about the plans of next version in the [AMA by the Vue.js core](https://hashnode.com/ama/with-vuejs-team-cj7itlrki03ae62wuv2r2005s) team. Basically, features would be developed for version 2 and 3 of the framework in parallel but version 3 has a different internal implementation and will be much faster. It was announced that most of the public APIs will stay the same and not many breaking changes will appear.

### Review

The year 2017 was really successful for Vue.js. Even though the goals are partly fulfilled, I think that most of the goals are somehow achieved or getting more traction. Vue.js is spreading and a lot more companies are using it now, including:

* Behance

* Adobe

* Chess.com

* GitLab

* HERE Technologies

* Car2Go

* IBM

* and many chinese companies like alibaba, ele.me

With more adoption, the need for a good ecosystem is also increasing and I think with the developments of the last year the community showed how much they love Vue.js and what pain points need to be tackled.

The documentation is also getting better. For example, providing first-hand documentation about Server-Side Rendering is improving developer satisfaction a lot. Other documentation and guides like the Vue.js Style Guide are supporting this idea too.

### What I look forward to in 2018

The main point missing for Vue.js right now is the native solution for mobile applications. Probably the solutions we have right now will improve and somehow catch up to React native. This will be really hard since React Native has a high adoption rate now and is backed by Facebook.

What I really look forward to are the Vue.js cookbook, the newly created CLI for Vue.js and the conferences and meetups happening the next year.

The Vue.js cookbook should provide examples of how to structure, setup projects and how to scale them which is one of the biggest disadvantages of the documentation right now. The newly Vue.js CLI will be awesome since the core should be more focused on other solutions like create-react-app, Next.js, Nuxt.js, and Poi. You can find the related issue at this [link](https://github.com/vuejs/vue-cli/issues/589). The architecture of the next version is already in place but functionality needs to be added here and there.

Another big thing is conferences. Last year Vue.js had one official conference. This year there are four which are announced. The first conference will be Vue.js Amsterdam in the Theater Amsterdam on the 16th of February. A lot of people of the core team will be there and give a talk. You can find more information about this event on the [website](https://www.frontenddeveloperlove.com/vuejsamsterdam/). The next conference will take place Sheraton New Orleans from 26th of March to the 28th of March. The 26th is a workshop day and the other two days are packed with talks. You can find out more on [their website](http://us.vuejs.org/). Also, there are conferences planned for [London in mid 2018](http://vuejs.london/) and again in Wrocław in late 2018.

It was an awesome Vue.js year and I hope Vue.js will continue to evolve like it has in this year.
> Thanks for reading this. You rock* 🤘*
> If you have any feedback or want to add something to this article just comment here. You can also follow me on [twitter](https://twitter.com/kevinpeters_) or visit my [personal site](https://www.kevinpeters.net/) to stay up-to-date about my blog articles and many more things.
