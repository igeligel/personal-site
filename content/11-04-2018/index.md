---
title: "How to get total views and reads statistics on Medium"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "11/04/2018"
tags:
  - programming
  - python
  - clean code
---

# How to get total views and reads statistics on Medium

Ever been annoyed that you could not see your total views, total reads, and fans on your medium story stats page?

![My stats page on medium](https://cdn-images-1.medium.com/max/2070/1*1duIPtJpRSKWFFo9BhavDA.png)*My stats page on medium*

You can clearly see that the medium stats page is lacking a general overview area where you can see how your blog article performed over the whole lifetime of your blog. I was really annoyed about this particular issue but since I am a programmer I worked on a simple solution for everyone, especially you, could use to circumvent this problem.

The only thing that you need is a modern web browser. I recommend using Chrome or Firefox. The first thing you have to do is to go to your stats page which you can reach by browsing to [https://medium.com/me/stats](https://medium.com/me/stats). After you have done this you need to open the developer tools of your browser.

Chrome:

* Mac: Command + Option + J ( ⌘ + ⌥ + J)

* Linux and Windows: Control+Shift+J

Firefox:

* Mac: Command + Option + K ( ⌘ + ⌥ + K)

* Linux and Windows: Control + Shift + K

After you have opened the console you need to paste the following script:

<iframe src="https://medium.com/media/53166d73b6d957915e235e5b0b32831a" frameborder=0></iframe>

You can find the source code of this script also here: [https://gist.github.com/igeligel/b2e1ab401ed3f96dcf1030045224fb2c](https://gist.github.com/igeligel/b2e1ab401ed3f96dcf1030045224fb2c)

After inserting the script and pressing enter you should end up with a result like this:

![Results in the developer tools](https://cdn-images-1.medium.com/max/2378/1*epKvQp0rJvPji1Xdt5h_WA.png)*Results in the developer tools*

In the last line, there is something written which is undefined but do not bother about it. The line above is more important because there you can see the aggregated data about total views, total reads and total fans which might be interesting for you.

I hope this article helped you a bit and I really hope medium is going to work on those statistics pages a lot and give us writers more insights into the data. Medium is still a great platform and I enjoy to write blogs here.
> Thanks for reading this. You rock* 🤘*
> If you have any feedback or want to add something to this article just comment here. You can also follow me on [twitter](https://twitter.com/kevinpeters_) or visit my [personal site](https://www.kevinpeters.net/) to stay up-to-date with my blog articles and many more things.
