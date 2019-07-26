---
title: "What makes a nice development project?"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "10/28/2018"
tags:
  - programming
  - python
  - clean code
---

# What makes a nice development project?

When onboarding new developers it is important to make their life as easy as possible. New developers will judge the code base instantly and make assumptions about used tooling and that their preferred tooling is working as well. This brings us to the first point of a nice development project:

### The IDE

![](https://cdn-images-1.medium.com/max/4000/1*97_O7xEjBH3HGGMOfwPaSQ.png)

IDE’s are a huge topic in the developer community. I will not argue what is the best and the worst or if people are happy with using editors. The main point is that the code base should not rely on using a specific IDE for developing. In my professional career, I heard people telling me to let code formatting be done by PyCharm. I heavily disagreed with this approach since people who are using anything else than PyCharm will be nitpicked in Pull Request reviews or in similar events. A lot of useless discussions are being created and a lot of time will be wasted, finally resulting in decreasing the team’s performance.

Other than that you have to see that people are different and even their opinions are different. There is no way you can convince a VIM power user to use PyCharm if he has done a significant amount of development in VIM. He is maybe 50% faster doing stuff in VIM. Performance is not a huge factor though in this whole discussion. The big factor here is that people might like to use their environment and do not want to leave it. Compare it to your favorite workplace. Would you rather like to work at your favorite workplace or in a call center?

After all, the IDE independence is a big factor when it comes to a nice development project and you should make it possible for other developers to join easily.

### Tests

Every code base should be well-tested of course. But the real question is why this should be?

Imagine a new developer joining your team and the project. He will try to understand business logic, programming patterns and much more. Every developer will get assigned tasks, new developers will get assigned easy tasks but navigation might be hard to understand in the first place. This is where tests come in handy. I like to assign developers who are new to the code base to either start refactoring tests, writing tests or just simply navigate by tests. Tests can be quite different though and have different use cases. There are E2E, Integration and Unit tests. Unit tests are about low-level functionality in most code bases. Really good to understand simple programming patterns. E2E tests are there for understanding the higher-level business logic. Integration tests are something in between in most cases. So regarding the task, it might be helpful to redirect the new developer to the right tests to understand the kind of tasks they have to do and see how it is done in the current code base.

Another good reason for having tests is that these are creating trust. New developers might want to try out new stuff in the code base. Tests are giving the security to change things without breaking production and losing the company money and time. Trust is one of the biggest values you can provide as a team within a project for a new developer. If the new developer sees he can do changes and immediately sees he has done something which is not expected and he does not even need to communicate to another person this shows that other people prepared for exactly this situation and tried to mitigate it in a nice way.

With this we come to the next point:

### Automation, Commands and Build processes

The last chapter was speaking about trust. Processes in the development of a project are really common. But does every developer know the end to end process from assigning a ticket on JIRA, to creating a branch with a specific naming pattern, creating changes, committing with the right style and creating the Pull Request at the right time? I do not think so, even experienced developers on the team with several years of experience will get this wrong since every code base is different. There might be even differences between teams in one organization. But a lot of this can be mitigated.

In the Joel test, there are twelve questions. One of them is this though:
> Can you make a build in one step?

I think this question could be also more formulated like this:
> Are you trying to automate every repetitive step in your development process?

This becomes important for every part. Every step in the process of development should be automated and intuitive. Creating branch names is not something the developer should think about. Running tests before a commit should be done automatically. Check the commit messages so they make sense and decline a push in the earliest step possible. Those are some examples you should live by.

Building and testing, of course, should be done on a regular basis, make those steps fast and your developers will get happier over time. Running tests in a pre-commit hook will enable developers to concentrate on their main task: developing.

Also, the same goes with setting up the project. This should not take multiple hours or days but rather maximum two hours. Teams should try to reach this time on average for new setups to under two hours. New developers want to get a nice first impression and do not want to bother a lot with setting up their database or inserting data in random places. Use Docker for having a unified platform on every system possible.
> Thanks for reading this. You rock* 🤘*
> If you have any feedback or want to add something to this article just comment here. You can also follow me on [twitter](https://twitter.com/kevinpeters_) or visit my [personal site](https://www.kevinpeters.net/) to stay up-to-date with my blog articles and many more things.
