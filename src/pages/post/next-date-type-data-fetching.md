---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Dealing with Date objects in Next data fetching
date: '2021-11-10T00:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1642773038/Blog%20Posts/szsc0zjxgvl11lbghhyc.webp
authors:
   James Perkins
categories: nextjs
description: >-
    When working with Data objects in ServerSideProps or StaticProps Next.js
    doesn't like it because they don't serailize it for performance. So you are on
    your own to handle it.
---

I have been working on some changes to Roll Your Tweet which includes moving from Fauna to PlanetScale and Prisma. This isn't a "this is better than that" situation it's actually a decision that I had be toying with for a while as I wanted to add some changes to the DB to make it easier to track from my side.

## The issue

One of the improvements I am making is robust timestamps of sign ups, when working with Prisma it returns a beautiful timestamp which Next doesn't like and you get this error message:

```bash
Error: Error serializing `.user.subscription_end_date` returned from `getServerSideProps` in "/".
Reason: `object` ("[object Date]") cannot be serialized as JSON. Please only return JSON serializable data types
```

The reason behind this is performant based, Next has made the decision to not handle date objects and the developer should. This in my opinion is a valid choice and allows the performance to be on the developer not on them. This happens when you use `getStaticProps` or `getServerSideProps`.

<newsletter />

## My Solution

At first I was ready to just manually parse the date to a string and then pass it along to next to return the data to the application. Then I realized I would have to do this every single time I wanted to parse the date, and as a developer "lazy" options are the best options.

I decided to install superjson and babel-plugin-superjson-next which takes care of all of it. superjson provides a thin wrapper over `JSON.stringify` and `JSON.parse`, which takes away the issues of date objects and other such problems.

```bash
yarn add babel-plugin-superjson-next superjson
```

Then create a .babelrc file with the following in it :

```json
{
    "presets": ["next/babel"],

    "plugins": ["superjson-next"]
}
```

Now when you launch Next the error is gone and you can use a pure date object and handle the serializing as needed.
