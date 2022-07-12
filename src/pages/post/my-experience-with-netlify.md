---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: My experience with Netlify
date: '2021-11-01T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1642772865/Blog%20Posts/k3tg0eh5261xex4oxn5u.webp'
authors:
   James Perkins
categories: thoughts
description: >-
    My experience with Netlify was short lived, in fact, under 36 hours before I returned to Vercel. This post describes how, and what happened to make me returned so quickly.
---

Before we get started on my experience I want to make a few thnigs clear:

1. This is not an anti Netlify post
2. This has a lot of personal preference

When I rewrote this site, I made a few things clear in my mind. Firstly I wanted to try some new technology so I could give people honest feedback on other Jamstack tech. So first up with Astro + Svelte which uses a bit of Next.js style tech (getStaticProps) and I wanted to give Netlify a try again.

### Setup and Deployment

Netlify made it as easy as it could be, connect my GitHub, select the repo and set the build properties and deployment acheived. Now continous integration was setup, so all my commits would kick of a build. Adding a custom domain was a breeze, just setup the DNS and it was done.

### Netlify CMS

Netlify CMS is quite interesting, although I only used it as a quick experiment they certainly could insert them into the market as an all in one shop.

### Where my issues began.

So after all of that niceness I started to run into some issues.Most of these are complaints more than issues but they caused me enough pain to move back off the platform.

#### Deployment that didn't build

I was deploying fixes at quite a rate, and I started to notice that occasionally I would refresh my site and the changes wouldn't be there, I'd go to Netlify and it would be just sat waiting to build. Normally this wouldn't bother me but it happened a couple times while I was building and really threw off my productivity.

#### Build Minutes

I understand the need to reduce usage for free tiers, but build minutes seems like an oddity to me. I feel like Netlify could of just set a limit on amount of builds a day e.g "100" and max build time to "x minutes". I used 10% in less than 24 hrs while I was finishing bug fixes and improvements. I felt the pressure of having a limit, although probably a soft limit, if I had moved all my projects over. I would be capped within a few days.

#### Analytics

Analytics are free for a single project of Vercel, which I used for my personal site to figure out if any changes I had made were causing performance issues. Netlify wanted to charge $9 a month for this which isn't a huge deal but I was a bit disappointed that I had to pay for it.

### Overall

Netlify is a perfectly acceptable deployment / CI and CMS for anyone looking to deployment their applications. I just find some of the benefits I've had for years at Vercel don't warrant moving across.
