---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Why I embraced Typescript for development
date: '2021-06-26T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1624743050/Embrace_Typescript_ly0g9c.webp'
authors:
   James Perkins
categories: thoughts
description: >-
    I've been very much avoiding using Typescript for quite a while, not because I don't believe in statically typed software, I spent a decade in production Java and was a certified PERL developer. I just never found a reason to use it, being a content creator and Jamstack developer for the past 3 years I have just been using JavaScript without much issue. If I ended up working on a project with typescript I just understood the system coded and moved on
---

I've been very much avoiding using Typescript for quite a while, not because I don't believe in statically typed software, I spent a decade in production Java and was a certified PERL developer. I just never found a reason to use it, being a content creator and Jamstack developer for the past 3 years I have just been using JavaScript without much issue. If I ended up working on a project with typescript I just understood the system coded and moved on.

## How did I end up embracing it?

When I started writing Collabstream, I wrote an early implementation in JavaScript that used about 30 components, and a half dozen hooks with a bunch of API calls that required specific types. I was trying to pass props and data around and at least 30% of the time I was struggling to keep what variable type was supposed to where. I managed to finish the early POC but probably added hours of development time for no reason. I decided the POC worked really well but the code was an absolute mess, it was probably the worst "production" code I've written. I am okay with this, POC's sometimes need to be dirty to see if what you originally came up with works and can scale. One of the two was true, it worked but the scaling in it's current form would make any dev team run off and live in a hut in the woods with no electricity.
I immediately made the decision to move to typescript so I could make it easy to scale and easy to find issues without deploying these changes. I started the rewrite and it was easy to convert the already written JavaScript into TypeScript and make the scaling changes as I went.

## Do I use it on every project?

This is a simple answer, no. It has a time and a place, and I evaluate it on a case by case basis with a few simple questions:

1. Am I making a tutorial?
2. Does this need scale?
3. Is this a node package?

I will never make a tutorial in TypeScript unless is a specific tutorial on Typescript as it makes the barrier to entry higher. If it's a node package, it makes sense to be in TypeScript as it provides auto completion of what I am expecting.

### Thinking of learning TypeScript?

If you are thinking of learning TypeScript here are a few resources:

-   [TypeScript Lang](https://www.typescriptlang.org/docs/)
-   [Learn Typescript basics in 5 ](https://www.freecodecamp.org/news/learn-typescript-in-5-minutes-13eda868daeb/)
