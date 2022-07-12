---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Warp is the future of terminals
date: '2022-04-13T04:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1650152623/Blog%20Posts/Warp/hsospoc5bdm0u26elker.png
authors:
   James Perkins
categories: thoughts
description: >-
    I spend a lot of time working with tooling, whether it's for my job, content
    creation, or just development tools in general. Warp is a brand new terminal
    experience, so lets talk about it.
---

I spend a lot of time working with tooling, whether it's for my job, content creation, or just development tools in general. Warp is a brand new terminal experience, so lets talk about it.

<youtube url="https://www.youtube.com/watch?v=wDuo5IlYlaQ" />

## What is Warp?

[Warp](https://www.warp.dev/) is a terminal that allows you to do a whole lot right from your keyboard. It gives you the ability to look through your history, create workflows and has intellisense. This is currently for Mac only but they are building one for Windows and one for Linux as well! So all the other users out there can have a great experience.

## Command Palette

![Command Palette](https://res.cloudinary.com/dub20ptvt/image/upload/v1650150775/Blog%20Posts/Warp/n0wyavby3moe0hcqpgjf.png)

The [command palette](https://docs.warp.dev/features/command-palette) allows you to search through all the different commands you can use within the Warp terminal. For example create new tab is `command + T` or `command + ]` is a new pane. The command pane is completely searchable so you can type in what you are looking for hit `Enter`.

<newsletter />

## Command History

![History Search](https://res.cloudinary.com/dub20ptvt/image/upload/v1650150937/Blog%20Posts/Warp/vdk9urrrz8wcvnp2tlaa.png)

[Command History](https://docs.warp.dev/features/command-history) is one of the _best_ features of Warp, not because it's powerful or revolutionary feature, but because I and every developer has press the up arrow dozens of times to find that _one_ command.

You get two options when you press `control + r` you can scroll through all of the history items or you can just type in the beginning of the command. Here is an example of me typing the word `yarn` into my history search:

![History example](https://res.cloudinary.com/dub20ptvt/image/upload/v1650151133/Blog%20Posts/Warp/x4baa9qeumyoyh1jbojm.png)

As you can see I can now just select what I need from the list, speeding up the time spent remembering what did I type?

## Workflows

Workflows are the powerhouse to this terminal application, workflows allow you to run commands similar to aliases. Each workflow gets a searchable title and description which make easy to find what you are looking for. The workflow pane can be opened by typing `shift + control + r`.

When you choose a workflow, you will prompted to fill in any arguements you might need to make the command work which you can navigate using `shift + tab` :

![Command Example](https://res.cloudinary.com/dub20ptvt/image/upload/v1650151224/Blog%20Posts/Warp/qjhucpszhyfyuukoeqwj.png)

### Custom workflows

[Custom workflows](https://docs.warp.dev/features/workflows) are your alias on steroids, they are created using `.yml` files and can be either user specific or project specific.

For user specific ones you add them to `~/.warp/workflows` and for project ones `{{path_to_project}}/.warp/workflows`. The format is the same regardless, here is my `code_profile` one:

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

My custom workflow takes two arguments which and when used will open my code_profiles have stored for visual studio code and it looks like this in the application.

![My work flow](https://res.cloudinary.com/dub20ptvt/image/upload/v1650151280/Blog%20Posts/Warp/nwmwrpfyez345dfazdwn.png)

This is just scratching the surface of the feature set that Warp offers and how it can be used. I recommend giving it a shot and seeing what you think.

<newsletter />
