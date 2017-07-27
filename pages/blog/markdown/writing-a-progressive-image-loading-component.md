# Writing a progressive image loading component in Vue.js

So what are components in vue.js you may ask. Lets make clear what vue.js is first: Vue.js is a frontend framework which helps you to build up user interfaces by developing it progressively. It is focused on the view layer only and it is easily extensible by other libraries written for Vue.js.

One of the main features in Vue.js are components. They help you to abstract HTML, CSS and JavaScript logic into multiple pieces so you have one component for one topic or part of your user interface. With tooling you can extend this behaviour to a new level, where you can have single files for components and extend those components by different features.
So here is the initial state of a vue template:

```html
<template>
</template>

<style>
</style>

<script>
</script>
```

You can have multiple of those in a single page but what makes vue great is that you can give parameters to those components to change the behaviour or look of those components.

Lets start with our progressive image loading component:
We want fast loading for images, but when we are on mobile there is not always a good connection so we could use a placeholder or an image reduced in size.

The [full image](https://i.imgur.com/ZB1qapd.jpg) is an island shown by the view of a bird. The [small image](https://i.imgur.com/h6sDord.jpg) is the same image but reduced in size by ten.

| Image Version | Link                                    | Pixel  | Size in KB |
| ------------- | --------------------------------------- | ------- | -- |
| large         | [large](https://i.imgur.com/ZB1qapd.jpg) | 932*605 | 329 |
| small         | [small](https://i.imgur.com/h6sDord.jpg) | 93*60   | 2.5 |

We would load barely a second for the full image on an average 3G connection. The small one is a matter of milliseconds.

So lets start with a simple component:

```html
<template>
  <img src="https://i.imgur.com/ZB1qapd.jpg" alt="this is a island shown by a birds perspective" />
</template>
```

This template would just show the image in full size which we do not want. So we need to provide two different image links to the component. This is done easily if we use vue-loader.

```html
<template>
    <img :src="largeImageLink" alt="this is a island shown by a birds perspective" />
</template>
<script>
export default {
  name: 'progressive-image-loading',
  props: {
    largeImageLink: String,
    smallImageLink: String,
  },
}
</script>
```

What we are doing here is writing a template and exposing it outside of the component to make it usable to other components. Also we take two properties which are used for the component structure. The first property is used as a source for the image. But now its rendering just the large image. Still slow on a 3G connection.

The question is how could we load an image dynamically. The answer is: JavaScript. So now we need to provide the large image link first to the component's html otherwise we could not access both links easily. We change our template to:

```html
<template>
  <div class="pil-placeholder" :data-large="largeImageLink" ref="lazyLoadingImage">
    <img class="pil-img-small" :src="smallImageLink" :alt="altTag" />
  </div>
</template>
<style>
.pil-img-small {
  width: 932px;
  height: 605px;
  filter: blur(50px);
  transform: scale(1);
}
</style>
<script>
export default {
  name: 'progressive-image-loading',
  props: {
    largeImageLink: String,
    smallImageLink: String,
    altTag: String,
  },
}
</script>
```

This will create a wrapper a layer above the image tag which is taking the large image link as source. Also we give it a tag called 'ref' which is used internally in vue.js to refer the HTML-tag to vue's internal JavaScript system. Inside this wrapper is the small image, how we used to know. We set the width of the small image to the original size of the image and blur it out. The transform style tag is just a polyfill for older browsers.

So our result would look like:

![first blurred version of the image](https://i.imgur.com/FUM7YtZ.png "first blurred version of the image")


Lets see how we can change the small image after loading. We are using the internal [vue.js lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) to get an event where the small image is loaded. The event is called mounted.

```html
<!-- [...] -->
<script>
export default {
  name: 'progressive-image-loading',
  props: {
    largeImageLink: String,
    smallImageLink: String,
    altTag: String,
  },
  mounted: function() {
    var lazyLoadingImageContainer = this.$refs.lazyLoadingImage;
    var smallImage = lazyLoadingImageContainer.querySelector('.pil-img-small');
    var altTag = smallImage.alt;
    var img = new Image();
    img.src = smallImage.src;
    img.onload = function () {
      smallImage.classList.add('loaded');
    };
  },
}
</script>
```

So what we are doing here is getting the image tag after it is mounted and create an event listener on the image loading part. When it is done we are adding a class to the image container saying that it is loaded.
Now we have the hook and can go on with loading the large image on top of the small one and then delete the small one.

So we need to load another image but this time we are loading it by the data attribute we set in the outer wrapper:

```html
<!-- [...] -->
<script>
export default {
  name: 'progressive-image-loading',
  props: {
    largeImageLink: String,
    smallImageLink: String,
    altTag: String,
  },
  mounted: function() {
    var lazyLoadingImageContainer = this.$refs.lazyLoadingImage;
    var smallImage = lazyLoadingImageContainer.querySelector('.pil-img-small');
    var altTag = smallImage.alt;
    var img = new Image();
    img.src = smallImage.src;
    img.onload = function () {
      smallImage.classList.add('loaded');
      var imgLarge = new Image();
      imgLarge.src = lazyLoadingImageContainer.dataset.large;
      imgLarge.onload = function () {
        lazyLoadingImageContainer.removeChild(smallImage);
        imgLarge.classList.add('loaded');
        imgLarge.alt = altTag;
        lazyLoadingImageContainer.appendChild(imgLarge);
      }
    };
  },
}
</script>
```

What is happening here is that after we load the small image we are loading the large one and when it is loaded we delete the small one and add the large one to the container.

So this is what it looks like now on my computer:
![](https://i.imgur.com/5d8RGtq.gif)

[gifv source](https://i.imgur.com/5d8RGtq.gifv)

Change the speed of the internet via the chrome dev tools (F12 -> Network -> Toggle Box in the upper bar on the right -> Regular 3G)

![](https://i.imgur.com/24QyVyH.gif)
[gifv source](https://i.imgur.com/24QyVyH.gifv)

You see we still have some time to load but the user is getting an initial image which probably holds him to the site.

Conclusion:

- Great user experience for getting images even on a bad connection
- Component style so you can use the component everywhere you want
- extensible, for example add some transitions

Some negative arguments:

- small overhead because you are roughly loading ~2kb of data
- performance: you are using JavaScript to achieve the task which costs CPU power

Both negative arguments are small in my opinion and are rare edge cases, so make your images load progressively so the user is seeing his content as fast as it can get.
