# jQuery Selector Performance

## Motivation

In some code i am working with i often find code like this:

```javascript
$(document).ready(function() {
  $('.toggleButton').bootstrapToggle();
  /* ... */
  $('.button').clicked(function() {
    $('.toggleButton').bootstrapToggle('off');
  });
});
```

I do not like this code. Multiple [selectors](https://api.jquery.com/category/selectors/) of the same element is used more than once. First its not pretty but it is also not fast. What should the code look like you may ask. Here is my approach:

```javascript
$(document).ready(function() {
  var toggleButton = $('.toggleButton');
  toggleButton.bootstrapToggle();
  /* ... */
  $('.button').clicked(function() {
    toggleButton.bootstrapToggle('off');
  });
});
```

What is different here is that we eliminated the usage of a [selector](https://api.jquery.com/category/selectors/) for the same element. We saved the reference of the [jQuery](https://jquery.com/) instance in a variable and are using it later again.

So why this is a better approach?

- Its faster (see later)
- Its clearer which element is meant because the [selector](https://api.jquery.com/category/selectors/) could have changed already.
- State can also be handled better (what if the element got deleted already?)

The last two points are also really important to have a got modularized structure of your JavaScript application.

## Why is it faster

It is because of the nature of [jQuery](https://jquery.com/). [jQuery](https://jquery.com/) will always parse the DOM in the first example (two times). In the second example it will just be parsed once and then the instance will get used out of the memory instead of parsing the whole DOM.

To see a real difference i did an simple example:

### index.html

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>jQuery var test</title>
  <meta name="description" content="jQuery var test">
  <meta name="author" content="Kevin Peters">

  <link rel="stylesheet" type="text/css" href="index.css">
  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
</head>

<body>
  <div class="block"></div>
  <script
    src="https://code.jquery.com/jquery-3.1.1.min.js"
    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
    crossorigin="anonymous">
  </script>
  <!--<script src="variable.js"></script>-->
  <!--<script src="reselect.js"></script>-->
</body>
</html>
```

### index.css

```css
.block {
  height: 50px;
  background-color: black;
  width: 500px;
}
```

### variable.js

```javascript
$(document).ready(function() {
  var block = $('.block')
  for (var i = 0; i < 1000000; i++) {
    block.css('width', getRandomInt(100, 1500) + 'px');
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
```

### reselect.js

```javascript
$(document).ready(function() {
  for (var i = 0; i < 1000000; i++) {
    $('.block').css('width', getRandomInt(100, 1500) + 'px');
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
```

[Code as GIST](https://gist.github.com/igeligel/e78aa7fae225a19888ac667f34e13a25).

What the code basically does is that the block div will get assigned 1000000 times a new width. I checked the JS [Profile Timeline](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool) of the [Chrome Developer Tools](https://developer.chrome.com/devtools).

Here are the results:

### Result Variable

| Try | Load Time |
| --- | --------- |
| 1   | 1.78s     |
| 2   | 1.74s     |
| 3   | 1.79s     |

Average Time: __~1.77s__

### Result Selector

| Try | Load Time |
| --- | --------- |
| 1   | 3.15s     |
| 2   | 3.13s     |
| 3   | 3.13s     |

Average Time: __~3.13s__

## Result

You can see that the storage in a variable is much more faster than reselecting the element all the time throughout the iterations. So save the web and save [jQuery selectors](https://api.jquery.com/category/selectors/) in variables.

## Benchmark Screens

### Variable Benchmarks

![Variable 1](http://i.imgur.com/rl7vvdI.png "Variable 1")

![Variable 2](http://i.imgur.com/lrWajJ5.png "Variable 2")

![Variable 3](http://i.imgur.com/kq76RjW.png "Variable 3")

### Selector Benchmarks

![Selector 1](http://i.imgur.com/8YcAiOW.png "Selector 1")

![Selector 2](http://i.imgur.com/mKYZNfk.png "Selector 2")

![Selector 3](http://i.imgur.com/v78916T.png "Selector 3")
