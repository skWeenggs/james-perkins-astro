---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: How to reload an SSR page
date: '2022-04-02T04:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1649076312/remia9bqtmmcp8yyuvbo.png
authors:
   James Perkins
categories: nextjs
description: >-
    When using SSR you might need to update the data that has been served. We are
    going to look at how we do that today.
---

When using SSR you might need to update the data that has been served because a user has done something, such as updating a database or subscribed to your product.

This poses a problem, Next.js doesn't have a feature like `refetchprops` but if the team over at Vercel want to implement it... I am all for it. One solution would be just to hard refresh the page, but that feels almost an anti pattern.&#x20;

So how do we do tackle this without using a hard refresh? First we should talk about the usual SSR flow that we think of when talking about it.

## The usual SSR flow

When we think of Server Side Rendering we have a two flows in mind and it usually goes something like:

-   A user clicks a link that sends them to your website.
-   Next.js calls the `getServerSideProps` method and generates the HTML with the data from your api(s)
-   The user receives that HTML file, and React rehydrates on the client.

Or&#x20;

-   The User is already on your site, and they click a Next `Link` to navigate to the server-rendered page.
-   Next.js calls your `getServerSideProps` method on the server but instead of generating an HTML file as in scenario one. It sends the data as JSON instead.
-   React uses that data as the props when rendering the new page, in-browser.This is what I love about Next.js , two different scenarios handled slightly differently to increase performance and the user is none the wiser.

## The solution

So the solution is to use built in functionality of Next.js `router` . Using this we can ask Next.js to retrieve the latest from SSR without a hard refresh. If you are in a rush here is the solution:


```javascript
import { useRouter } from 'next/router';

export default function YourPage(props) {

 const router = useRouter();
 const dataToUpdate = //some object;

// API that updates your DB
  const update = fetch('api/update',{
    method: 'PUT',
    body: JSON.stringify(dataToUpdate),
  });
  if(update.status == 200) {
    // ask next router to replace the current path with the current path.
   router.replace(router.asPath);
   }
}
```

<newsletter />

### How does this work?&#xA;

When describing SSR the second path we talked about how Next.js returns a JSON when you use Next `Link` through a client side transition. This is exactly what we are doing by using `router.replace` we are telling Next.js to \*perform a client side transition. \*

> If you are wondering what `router.replace` does, it does the exact same thing as `route.push` except it doesn't add history to the stack. This means if the user hits the back button it will perform as expected

This means that when this client side transition happens, `getServerSideProps` fires and the JSON returns with the latest information from your database or API.
