---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: My top three tools (Mac edition)
date: '2022-07-31T00:00:00.000Z'
draft: false
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1659305217/Blog%20Posts/top-three-tools/ib7mrfif5v9m4sxmoizf.webp'
authors:
   James Perkins
categories: tools
description: >-
    I spend hours on my computer each day, whether it be writing, coding, or creating videos on YouTube. This post shows you my top three tools for my MacBook.
---

I spend hours on my computer each day, whether it be writing, coding, or creating videos on YouTube. I have my work machine and personal MacBooks set up the same way, so I never have to worry about context switching. Below are the top three tools I use:


## AltTab

[AltTab](https://alt-tab-macos.netlify.app/) is probably a dev tool you didn’t know you needed and once you have it, you wondered why you didn’t know about this earlier. 

AltTab brings the power of Windows’s “alt-tab” window to Macs, if you have ever used a Mac one thing you will notice is there are zero previews when tabbing through your windows. This can be annoying when you have multiple Chrome windows or maybe two visual studio codes open as you can’t see which one to tab to. 

With AltTab you get to preview the window before you select it, and it can replace the default alt-tab experience. This is probably number one on my install list. 

## Xnapper

[Xnapper](https://xnapper.com/) is a screenshot software developed by [Tony Dinh](https://twitter.com/tdinh_me) it allows you to create awesome screenshots with minimal effort. It’s currently in beta but the developer rate is unreal. It gives you preset options for Twitter, YouTube thumbnails, Reddit, square, 16:9, and more. 

On top of this, you can have emails auto redacted, and padding and insets added. Add backgrounds, border-radius. Add a background and some shadow. A screenshot has never looked better! 

Below is an example!

![Example of a screenshot](https://res.cloudinary.com/dub20ptvt/image/upload/v1659304938/Blog%20Posts/top-three-tools/b242mweetlvbczxxvz21.webp)

## Warp

[Warp](https://warp.dev) is a terminal built on Rust. It’s super fast and has awesome features. [Warp](https://www.warp.dev/) is a terminal that allows you to do a whole lot right from your keyboard. It gives you the ability to look through your history, and create workflows, and has IntelliSense. This is currently for Mac only but they are building one for Windows and one for Linux as well! So all the other users out there can have a great experience.

### Command Palette

The command palette allows you to search through all the different commands you can use within the Warp terminal. For example, create a new tab is `command + T` or `command + ]` is a new pane. The command pane is completely searchable so you can type in what you are looking for and hit Enter.

### Command History

Command History is one of the best features of Warp, not because it’s a powerful or revolutionary feature, but because I and every developer have pressed the up arrow dozens of times to find that one command.

You get two options when you press control + r you can scroll through all of the history items or you can just type at the beginning of the command. Here is an example of me typing the word yarn into my history search:

![Command Example](https://res.cloudinary.com/dub20ptvt/image/upload/v1650151224/Blog%20Posts/Warp/qjhucpszhyfyuukoeqwj.png)


### **Custom workflows**

**[Custom workflows](https://docs.warp.dev/features/workflows)** are your alias on steroids, they are created using **`.yml`** files and can be either user-specific or project specific.

For user-specific ones you add them to **`~/.warp/workflows`** and for project ones **`{{path_to_project}}/.warp/workflows`**. The format is the same regardless, here is my **`code_profile`** one:

```yaml
name: Change code profiles
description: Change code profile for visual studio code
author: James Perkins
author_url: https://github.com/perkinsjr
tags: ['macos', 'shell', 'vscode']
shells:
    - zsh
    - bash
command: code --user-data-dir {{user_data_dir}} --extensions-dir {{extension_dir}}
arguments:
    - name: user_data_dir
      description: Directory of user-data
    - name: extension_dir
      description: Directory for extensions
```

My custom workflow takes two arguments which and when used will open my code_profiles stored for visual studio code

So that is it, my top three tools that I use every single day of the week, and absolutely love them!