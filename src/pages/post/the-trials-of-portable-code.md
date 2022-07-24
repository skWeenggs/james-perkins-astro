---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: The trials of portable coding
draft: false
date: '2021-11-08T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1642774239/Blog%20Posts/lum3qzy9gojjhtcpndmp.webp'
authors:
   James Perkins
categories: thoughts
description: >-
    We were traveling to TN to check out the area, and I didn’t want to take a laptop. Mostly to stop me from writing YouTube videos or working on Roll Your Tweet and enjoy my vacation away.
---

We were traveling to TN to check out the area, and I didn’t want to take a laptop. Mostly to stop me from writing YouTube videos or working on Roll Your Tweet and enjoy my vacation away. This lead me down a path of can I use my iPad for coding, it’s been awhile since I tried it.

There is a secondary piece in here also, we own an RV so if I can do some work while traveling without bringing the laptop (even though its 13inch) any space we can save the better.

## My Setup + Plan

My setup is the following:

-   iPad 6th generation
-   Logitech Slim Folio Keyboard
-   Extra long lightening cord for the charge.

What I want to do anytime I’m on the portable option

-   Light web development
-   Update my blog post (built on Astro)
-   Must be able to run terminal commands

## What I tried

I decided to start checking out the offerings in the space, there are quite a few.

### Visual Studio Code (Online)

The obvious answer was to go to the heavy hitter Visual Studio Code. VS Code has taken over the development world, a huge improvement of the days of old. I boot up their new cloud offering, clone a repo, go to launch a terminal and… you can’t…. Unless you have codespaces, which I don’t so that’s out.

### Repl.it

Repl.it is something I have also used in the past, I’ve written some node code and other stuff. I checked out my blog, installed all the dependencies no problem! We are getting somewhere, except when I went to run the code I got an ESM error and couldn’t seem to find the fix. So off the list for the blog but could be good for other projects that aren’t Astro + Svelte.

### StackBlitz

StackBlitz has been something that people have talked about quite a lot on tech twitter and referenced a lot of GitHub repo’s. I cloned my project which was easy and again all the dependencies installed in ms and again I ran into the same ESM issue. Sigh! So close

## Of to Tech Twitter I go

At this point I went off to tech twitter and asked the age old question:

> If you wanted to code on the go using say an iPad. What would you use?

I got some great responses:

1. Vs code
2. Gitpod
3. Run vs code server on a pi and connect to it.
4. Juno.sh

I had already tried vs code in the web, but it didn’t work for me. So I went to check out Gitpod, I had heard of Gitpod a few times but never needed to use it.

## The solution

Gitpod is basically a visual studio code server in the browser it allows you to do anything you would of your home machine with zero configuration. I setup my iPad 6th generation in a few minutes and was able to write this whole article, push, schedule my PR while riding down the road as part of our road trip.

Gitpod acts and looks exactly like Visual Studio Code and feels snappy. You can run your dev server and access it via a URL they give you for the workspace. Gitpod is not just for visual studio code, you can also use jet brains if you prefer!

Gitpod is incredibly impressive from a remote development standpoint, you can setup preconfigured environments so the famous “works on my machine” comment can no longer be used!
