---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: SSR VS SSG
draft: false
date: '2021-08-04T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1642774025/Blog%20Posts/og2v04elaojgsfpuhucp.webp'
authors:
   James Perkins
categories: nextjs
description: >-
    I’ve heard and seen a lot of “What language should I pick first?” Questions in my time as a developer. It’s an interesting question that I seem to have the opposite response to most.
---

When your first start working in the JAMStack or any web development for that matter, one thing you notice is there are a lot of acronyms thrown about. We have SSG, ISG, SSR, SWR and so much more, so today we are going to look at SSG and SSR.

## What is SSG?

SSG or Server Side Generation enables developers to create static pages, whether the data is completely static, as in you manually create a full page with all the details hard coded or you have dynamic data that you plugin into a template.

### How does SSG Work?

SSG is created a build time, this means build could be potentially slower than you are used to but when a user lands on your site, its _blazing_ fast because everything has been created and is just a file served up. You could think of SSG as a Car dealership:

-   You have a car dealership, and they have 100s of cars for sale.
-   You go to the dealership and you pick out a car you want.
-   The car is ready to go, you don't have to wait for it to be built.
-   You drive off the lot and you are on your way.

## What is SSR?

SSR or Server Side Rendering has been popular for years, but recently it has been gaining a lot of traction in the JavaScript space. Unlike SSG, SSR dynamically populates a page when the user requests it.

### How does SSR work?

SSR as I explained in the quick summary above, it dynamically populates the page as a user requests it versus being populated at build time.For example if a user navigates to /blog/ssr-is-cool then the server will render the blog post and return it to the user. This is great for the user if they want the "freshest" data as they land on the site, but it is not great for the developer if they want to make the site faster. You can think of SSR as Tesla versus a car dealership:

-   You have a Tesla dealership, and they have a few different models for sale.
-   You decide to go to the Tesla dealership and you pick out a car you want.
-   You tell the dealership I want a Model X, and they start building it.
-   The car is not ready to go, you have to wait for it to be built.
-   The car gets built and is sent to your house.

I hope this extremely brief explantion of SSG and SSR will help you the next time you are building a projectin the JAMStack! Make sure to drop me a comment below if you have any questions!
