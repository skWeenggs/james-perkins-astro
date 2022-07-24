---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Increase your development productivity
draft: false
date: '2021-11-09T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1642772422/Blog%20Posts/pk7gk93me0kspzqo2gka.webp'
authors:
   James Perkins
categories: tutorials
description: >-
    git-ultimate-cloner is an absolute game changer, it allows you to clone, install open an idea and get ready to develop. This will speed your productivity up and allow you to move quickly.
---

When working in development we spend a lot of cloning packages, installing packages and opening visual studio code. My usual workflow goes like the following:

1. git clone
2. cd project
3. yarn
4. code .
5. yarn dev
6. development time!

When one of my discord members `cryptus_neoxys🇮🇳` told me about a project he had been working on called [`git-ultimate-cloner`](https://www.npmjs.com/package/git-ultimate-cloner) , it allowed you to clone, install packages and open visual studio code (or your favorite ide) in a single command. It hit 100k downloads this week!

### How does it work?

First you install the package globally `npm i -g git-ultimate-cloner` and then you can use the following command:

```bash
quick clone <repository-url>
```

This will then do all of this work flow, allowing you to get working quickly without having to do it all manually.

#### Using a default directory

I develop everything in the same directory named development, `git-ultimate-cloner` allows you to set a default directory. Even if you open in your root directory it will always clone to that directory for example:

```bash
quick --set-folder default "C:\development\development"
```

Then if you need a one off directory you can do the following:

```bash
quick clone <repo-link> --folder current
```

and that will clone it to the current directory.

You should 100% check this out, it's one of my favorite new projects and I am super proud of the discord member who created this project.
