# My Visual Studio Code setup - Part 1

In this blog post article series i will summarize how i use Visual Studio Code and which plugins are really helpful when working with this Editor.
So lets start with some basic explanations about Visual Studio Code:

## What is Visual Studio Code

When writing programs or developing web applications you need to write some type of Code.
This code is written in files. But we do not want to write all the code by ourselve. We want some support by programs to make our code better and to write it faster.

Thats where IDE's and Code Editors come in. Whats the difference between them?

An IDE is an Integrated Development enviroment, it is supporting different things regarding to their scope. For example Webstorm, a popular Web development IDE by Jetbrains, is an IDE because it is supporting a lot of features in the scope of Web Development like Debugging, Compiling and many more features. For a full list of features see the [Features site](https://www.jetbrains.com/webstorm/features/) provided by Jetbrains.

An Editor is just a program where you can edit files. There are some smaller features about specific topics but in general an editor is very slick and comes just with a small amount of features. That is also the reason why they are lot faster than full-blown IDE's.

So why am i using Visual Studio Code, an editor for different things?

With plugins you can extend the functionality of an editor to come closer to an IDE but still be superfast. There are different editors with different plugin supports, but the biggest ones are:

- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)
- [Vim](http://www.vim.org/)
- [Brackets](http://brackets.io/)
- [Visual Studio Code](https://code.visualstudio.com/)

All the editors have their pro's and con's but i will not get into that. Otherwise we will end up in an endless war:

![endless code editor war](https://media.giphy.com/media/rcRwO8GMSfNV6/giphy.gif "Endless code editor war")


## How to start with Visual Studio Code

1. Head over to the [Download page](https://code.visualstudio.com/download) of Visual Studio Code
2. Download the installer
3. install
4. ???
5. Profit

Now it really begins to get hard. Finding the right plugins and settings.
What i like and recommend to everyone is the following plugin:

- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) by [Shan Khan](https://github.com/shanalikhan)

So how can we install a plugin? On the left side of Visual Studio Code you will find a button like this:

<img class="no-resize" src="https://code.visualstudio.com/images/extension-gallery_extensions-view-icon.png" alt="Visual Studio Code Icon" />

Click on this and just search for Settings Sync. If you do not want to go this way press CTRL+P in Visual Studio Code and type the following command:

```
ext install code-settings-sync
```

This also will install the extension.

## Settings Sync

Settings Sync is a plugin which will create a small file in GitHub Gist for you where your current settings and plugins are saved. It is great if you work on different computers or are just switching your OS frequently or doing some changes. Also it is a great protection against possible data loss to recover your favorite Editor configuration.

To start you need to create GitHub Key. To create this key just go to [GitHub](https://github.com/) and login with your account. If you do not have an account [create one here](https://github.com/join?source=header-home).

Next go to your [personal access token settings](https://github.com/settings/tokens) and add a new token called what you want. It is important to set the gist scope.

Copy the access token to some safe place for later.

To use the plugin the first time get back to Visual Studio Code and press 'SHIFT + ALT + U'. Now a little toast will show with an input field where you enter the personal access token. Now your settings will be uploaded to a gist containing all the information about your visual studio code installation. To see the gist get to [gist.github](https://gist.github.com/) and click on 'See all of your gists'. You will probably spot the gist containing the settings right away. There are different files for the different settings of your Visual Studio Code configuration.

Everytime you have changed something in your Visual Studio Code settings you should upload it to this gist. To do so just press 'SHIFT + ALT + U' again and it will update the settings in the gist.

To download the gist just press 'SHIFT + ALT + D'. This will download your settings. This is probably really interesting if you work accross different machines or operating systems like Linux and Windows so you have the same settings in every installation.
