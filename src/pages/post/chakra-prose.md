---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Chakra Prose is finally here
date: '2022-03-27T04:00:00.000Z'
draft: false
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1648302940/Blog%20Posts/chakra-prose_jwbyum.png
authors:
   James Perkins
categories: css
description: >-
    Someone on the Chakra team finally released prose support, which reduced my
    code significantly. Here is how to implement it.
---

I am a big fan of Chakra UI I have used it for years, it's my go to when building out basic websites as it is extremely fast to get everything up and going.&#x20;

The problem was with using something like [TinaCMS](https://tina.io 'TinaCMS') or Markdown is the content gets parsed as standard elements, for example `<h1>` and Chakra overrides all styling and expects you to use `<Heading as="h1">`. Which leads you to two options, override all of the styles manually or pass html through and send back Chakra specific components.&#x20;

## Introducing Chakra Prose

You maybe have noticed that my site, has changed a little bit when reading, the site has decent spacing, the sizes have changed and the reading experience is so much better. This is because of the new package from one of the core maintainers ([https://github.com/nikolovlazar/chakra-ui-prose](https://github.com/nikolovlazar/chakra-ui-prose)), this allows you to implement Prose on your site using the `<Prose>` component.

<newsletter />

### How to implement Chakra Prose

To add Chakra Prose firstly you need to install the package:

```bash
yarn add @nikolovlazar/chakra-ui-prose
# or
npm i @nikolovlazar/chakra-ui-prose
```

Once you have installed the package you are ready to start configuring your Chakra UI application. If you don't have a custom theme, you need to create one which you can read in detail in the [Chakra documentation](https://chakra-ui.com/docs/styled-system/theming/customize-theme 'Chakra Documentation') but here is an example of a basic one.

```
/ theme.js
// 1. Import extend theme
import { extendTheme } from '@chakra-ui/react';
// 2. extend the theme
const theme = extendTheme({})
export default theme;
```

Then you can import this and pass it to your `ChakraProvider` in Next.js this is in your `_app.js` and will look like the following:

```
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
<ChakraProvider theme={theme}>
  <Component {...pageProps} />
</ChakraProvider>
```

To add Chakra Prose, you need to add it to your custom theme. First you need to import `withProse` and then add it to the `extendTheme` like so

```
import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
const theme = extendTheme(
    { config },
    withProse())

export default theme;
```

Now you application is ready for prose, and to use it you can wrap any part of your website or application in the `<Prose>` component. Of course on top of this, you can extend the prose theme to be customized by using the same extending that Chakra offers for example:

```javascript
withProse({
    baseStyle: {
        pre: {
            fontFamily: 'monospace',
            fontSize: '1rem',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            overflow: 'auto',
            padding: '0.2rem 0.4rem',
            margin: '0.2rem 0.4rem',
            borderRadius: '0.5rem',
            border: '1px solid #ddd',
            backgroundColor: '#000000',
            border: '1px solid #ccc',
            transition: 'all 0.2s ease-in-out',
            color: '#fff'
        }
    }
});
```

This would create a custom code block that you have seen throughout this blog post. I am so glad they finally created a recipe for this as it really reduces the amount of code you need to write to get a good standardized experience.
