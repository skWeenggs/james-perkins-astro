---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: How to use Chakra UI and Next Image
draft: false
date: '2022-01-21T05:00:00.000Z'
image: >-
    http://res.cloudinary.com/dub20ptvt/image/upload/v1642782051/Blog%20Posts/pkitdslkh3dixmcw9fda.png
authors:
   James Perkins
categories: tutorials
    
description: >-
    Next.js has it's image optimization and ChakraUI has it's own Image componet
    but you can use them together. I will show you how.
---

I use ChakraUI for almost everything I build, and one of the first things I struggled with when I first started using it was how can I use Next Image optimization with it.

### Leveraging Chakra Factory

The Chakra UI team has a way to tap and override standard elements. They call it the Chakra Factory, here is an example of overriding a button with chakra styling.

```jsx
import { chakra } from '@chakra-ui/react';

<chakra.button px="3" py="2" bg="green.200" rounded="md" _hover={{ bg: 'green.300' }}>
    Click me
</chakra.button>;
```

This is a normal HTML element but now can use all the styling of Chakra, alongside being able to use any HTML elements we can also use JSX elements. This is exactly what we need to make Next Image work and be able to style it anyway we want with Chakra.&#x20;

#### ShouldForwardProp&#x20;

Next Image at a minimum for remote images needs a `src` , `height` , `width` , and alt . Chakra provides a `shouldForwardProp` which allows you to pass along `props` through the Chakra factory to the JSX element. So will a combination of both of these things we can create, a Chakra styled Next optimized component.

```javascript
const BlogImg = chakra(Image, {
    shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop)
});
```

Now we have a component that we can use in an application somewhere for example if I wanted all my blog images to be a certain size and shape I can do that using my `BlogImg` like so:

```jsx
<BlogImg
    zIndex={1}
    width="560px"
    height="360px"
    quality={70}
    pos="relative"
    objectFit="cover"
    src={image}
    alt={heading}
/>
```

This will send all of the props needed for Next Image but still use the rest for Chakra styling, making it the perfect combo.&#x20;

<newsletter />
