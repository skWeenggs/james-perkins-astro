---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: 'How to add claps to your blog '
date: '2022-01-22T05:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1642876501/Blog%20Posts/z0j5vihc4i6ty2b9tc4z.png
authors:
   James Perkins
categories: nextjs
description: >-
    Interactions are a content creators favorite thing, it allows you to know if
    your content is providing value.
---

You may notice that if you scroll to the bottom of any blog post on my site, you will see a section that asks you if you like this post and if you do to give it some claps. This isn't something you see very often but it is easier than you think.

Personally, I chose to use Lyket, a great bit of indie development. It supports React, HTML and WordPress so perfect for all the cases you might need.

<youtube url="https://youtu.be/KOEA1UbSxHc" />

### The Setup

For a React based blog you just need a single package, `@lyket/react` and you are ready to start adding claps to your website.&#x20;

Next you need to signup for your Lyket account which can be found at [https://lyket.dev](https://lyket.dev) . Once you signed up grab the `Public API token` from the settings.

#### ![Use settings ](https://res.cloudinary.com/dub20ptvt/image/upload/v1642873631/Blog%20Posts/add-claps-to-blog/yzgcbin70tmkvh0ul8pm.jpg)

#### Wrap our \_app.js

Now that we have all the required pieces, we can wrap our application in a provider so we can use it with Lyket. First you need to import `Provider` from Lyket but instead of importing as `Provider` let's use `LyketProvider` .

```javascript
import { Provider as LyketProvider} from “@lyket/react”
```

Now we need to wrap our application in this provider and pass in our API token so Lyket can know which account to use.

<newsletter />

Your `_app.js` should look similar to the following:

```
import '../styles/index.css'
import { Provider as LyketProvider} from “@lyket/react”

export default function MyApp({ Component, pageProps }) {
  return (
    <LyketProvider apiKey="[YOUR-API-KEY]">
      <Component {...pageProps} />
    </LyketProvider>
  );
}
```

#### Using Lyket on a page.

Lyket is now available on any page we want. Open up the page you want to use Lyket on and add the follow import `import { ClapButton } from '@lyket/react';` then we can use this component wherever we want. For example:

```
import { ClapButton } from '@lyket/react';

export BlogPost = ({ title,slug, content }) => {
  return (
    <div>
      {title}
      <ClapButton id={slug} namespace="blog-posts" />
      {content}
    </div>
  );
};
```

That is it, now your readers can clap when they love your post. Give it a shot below!&#x20;
