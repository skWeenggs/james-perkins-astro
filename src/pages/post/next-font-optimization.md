---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Next.js -  How to optimize fonts
date: '2022-05-02T04:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1651535244/Blog%20Posts/Yellow_And_Green_Bold_Money_Blog_Banner_gjpzog.png
authors:
   James Perkins
categories: nextjs
description: >-
    When using 3rd party fonts we have to make sure they are optimized, in the
    times before Next.js 10.2 you had to manually optimize them for example:
---

When using 3rd party fonts we have to make sure they are optimized, in the times before Next.js 10.2 you had to manually optimize them for example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap"
    rel="stylesheet"
/>
<link
    href="https://fonts.googleapis.com/css2?family=Squada+One:wght@400&display=swap"
    rel="stylesheet"
/>
```

After 10.2 Next.js can now optimize Google fonts and Typekit with a variety of font optimization, inside your `_document.js` you can now provide the font:

```
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

<newsletter />

You can even provide the preferred display options as a query parameter :

\- **block :** The text blocks (is invisible) for a short period

\- **swap:** There is no block period (so no invisible text), and the text is shown immediately in the fallback font until the custom font loads

\- **fallback**: This is somewhere in between block and swap. The text is invisible for a short period of time (100ms). Then if the custom font hasn't been downloaded, the text is shown in a fallback font (for about 3s), then swapped after the custom font loads.

\- **optional:** This behaves just like fallback, only the browser can decide to not use the custom font at all, based on the user's connection speed (if you're on a slow 3G or less, it will take forever to download the custom font and then swapping to it will be too late and extremely annoying)

\- **auto: ** This basically ends up being the same as fallback.
