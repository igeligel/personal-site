---
title: "Function parameters in JavaScript — Clean Code"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "07/08/2019"
tags:
  - programming
  - python
  - clean code
---

# Function parameters in JavaScript — Clean Code

In my time as a web developer I have to deal a lot with JavaScript Code. I love JavaScript, no question asked. But sometimes I hate code written by people who are not embracing the language features. The time where most mistakes are made in my opinion are in function parameters. Functions with a lot of parameters are most often stale and cannot be changed in a lot of places. This is a real frustrating experience for other developers who have to shift a lot around. But let us tackle this problem in this blog article.

So let us imagine a function which is calling an REST API endpoint with a lot of parameters. This HTTP call will be a GET with a lot of filters. In our example I will take the API call to get twitter tweet timelines. You can find the documentation here: [https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline](https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline)

So let us create our simple function. It will take the query parameters as function arguments:

```js
const getStatusHomeTimeline = (
  count,
  since_id,
  max_id,
  trim_user,
  exclude_replies,
  include_entities
) => {
  axios
    .get("/1.1/statuses/home_timeline.json", {
      params: {
        count,
        since_id,
        max_id,
        trim_user,
        exclude_replies,
        include_entities
      }
    })
    .then(response => {
      // ...
    })
    .catch(error => {
      //...
    });
};
```

The function is then called like this:

```js
getStatusesHomeTimeline(5, 12345, 54321, true, true, false);
```

This seems quite reasonable. But now think about the client. This function is used 100 times in your code base (let us just assume this) and now Twitter is changing the API to include another parameter. You would need to change the function of your API-calling business logic to something like this:

```js{8}
const getStatusHomeTimeline = (
  count,
  since_id,
  max_id,
  trim_user,
  exclude_replies,
  include_entities,
  new_parameter
) => {
  // ...
};
```

The problem now is that you need to change every caller of the function to include the last argument. A solution for this would be to add a default parameter. This is supported since ES6. So let us refactor the function to use default parameters to the last parameter.

```js{8}
const getStatusHomeTimeline = (
  count,
  since_id,
  max_id,
  trim_user,
  exclude_replies,
  include_entities,
  new_parameter = null
) => {
  // ...
};
```

Problem solved :) You do not need to change all the callers of the function. Problem is that if a required parameter now gets included you need to append them to the function and change all function callers. Not really scalable. A easy solution is provided by the book Clean Code: If there are more than two or three parameters in a function, provide the parameters as one object. So let us transform the function to use an object instead of multiple parameters.

```js
const getStatusesHomeTimeline = params => {
  axios
    .get("/1.1/statuses/home_timeline.json", {
      params: {
        count: params.count,
        since_id: params.since_id,
        max_id: params.max_id,
        trim_user: params.trim_user,
        exclude_replies: params.exclude_replies,
        include_entities: params.include_entities,
        new_parameter: params.new_parameter
      }
    })
    .then(response => {
      // ...
    })
    .catch(error => {
      // ...
    });
};
```

Still, this seems really verbose and also the default parameter is gone 🤷

There are two ECMAScript features which can help us here:

- Object destructuring

- Default parameters (hey we have used them before)

So, what we will do here now is quite simple: We will destruct the object given as parameter to the properties and also add a default parameter for the destructured property new_parameter :

```js
const getStatusesHomeTimeline = ({
  count,
  since_id,
  max_id,
  trim_user,
  exclude_replies,
  include_entities,
  new_parameter = null,
}) => {
  axios
    .get("/1.1/statuses/home_timeline.json", {
      params: {
        count,
        since_id,
        max_id,
        trim_user,
        exclude_replies,
        include_entities,
        new_parameter,
      },
    })
    .then(response => {
      // ...
    })
    .catch(error => {
      // ...
    });
};
```

Now we can still call the function with an object but also have the advantage of extensibility and default parameters.

Another good reason to use objects as function parameters is that you need to name the properties in the caller function. This is indirect documentation and helps a lot to read code for other developers. The main advantage here is the extensibility of functionality which is super important in modern software development because features will change and code will be moved around. So dynamic and extensible functionality is key.

> Thanks for reading this. You rock* 🤘*
> If you have any feedback or want to add something to this article just comment here. You can also follow me on [twitter](https://twitter.com/kevinpeters_) or visit my [personal site](https://www.kevinpeters.net/) to stay up-to-date with my blog articles and many more things.
