---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Force Reload Next.js Pages
date: '2021-10-05T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1633284008/force-page-reload_rqi48d.webp'
authors:
   James Perkins
categories: nextjs
description: >-
    Sometimes you need to just force reload a page in Next.js, lets look at a couple ways you can do this!
---

In some circumstances, you might need to force refresh a page, maybe you have data that needs to be fetched from the server but aren't using a Stale While Revalidating method. For example a user profile page, where a user might update a password or email.

Prefer a video? Check below

%[https://youtu.be/ouEPm91TlTI]

### When in a component

When you are in a component, Next.js has the `useRouter` hook that allows you to, well, hook into the router functionality. When using the hook you can do the following

```javascript
import { useRouter } from 'next/router';

export default function myComponent() {
    const router = useRouter();

    router.reload();
}
```

### When you aren't in a component

There are on occasion where you might be out of a component, such as a utility or something similar. You can still force the reload, but you can't use the hook to do this. Instead you can still use the router functionality:

```javascript
import Router from 'next/router';

Router.reload();
```

This will force the reload but without the hook, allowing you to do it wherever you need it outside of component function.
