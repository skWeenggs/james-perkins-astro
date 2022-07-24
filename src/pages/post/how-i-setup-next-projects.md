---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: How I setup Next.js Projects
draft: false
date: '2021-10-30T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1619907051/creat-learned_wjlxir.webp'
authors:
   James Perkins
categories: nextjs
description: >-
    I create 100s of Next projects a year, and I have a particular way of setting everything up. It might be for you, it might not.
---

Next.js is probably my favorite framework... Although Astro is slowly creeping into the picture. I create 100s of projects a year using Next.js and set them up the same way every single time.

Next.js does a lot of the handling of structure, `pages` stay under the `/pages` folder. API routes stay under the `/pages/api` folder. Publicly visible files under `/public`.

With API routes I do something that I saw one time and have done every since I create a folder for each route versus naming the file the route:

```javascript
// what I see people do
/pages/api/authentication.js
// What I do
/pages/api/authentication/index.js
```

This to me feels like a really clean way to keep API routes and makes you really think about names and usage.

## What Do I do with the rest?

All the React components required by pages are in a `/components` folder. Then I create component structure based upon usage for example:

-   `/components/Auth/[filename].js`
-   `/components/Layout/[filename].js`
-   `/components/Checkout/[filename].js`

Then I have a `utils` folder that contains all the utilities used by the React components or the API routes. THings that live in here could be database intializers, fetchers, cryptography etc.

Then the final piece to my setup, that makes everything easy, my `jsconfig.json` which allows me to user `@components/[component]/[filename]` or `@util/fauna.js` and the setup looks like this:

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/components/*": ["components/*"],
            "@/utils/*": ["utils/*"]
        }
    }
}
```

This is the base structure I use for every single project, naturally if I have content for a blog for example, I create a `content` folder.

This is a nice clean setup and allows me to work quickly and without much thought, it's also great for context switching because every project is the same.
