---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: How to handle page to page loading in Next.js
date: '2022-03-22T04:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1648161149/Blog%20Posts/Page_to_page_loading_with_nextjs_iuitn9.png
authors:
   James Perkins
categories: nextjs
description: >-
    Here we are, the new year is upon us, and if you are like me, you have set
    some New Year’s resolutions for yourself. Possibly learning a new language,
    skill or improving on the foundation that you have. What a better way to kick
---

I am a huge advocate of minimalist websites, I don't hate heavily overly designed websites with animations and designs but they have a place. Talking of animations, one thing you do want is a way to handle moving between pages and loading data.&#x20;

<youtube url="https://youtu.be/2Tj6lcfJytA" />

## Handling loading through `next/router`

One great feature of `next/router` is the ability to tap into the events that happen during a route change. This means you can use these to handle loading. So what are the events we need? We need route change events.

```javascript
routeChangeStart;
routeChangeComplete;
routeChangeError;
```

With these three events and `useEffect` and `useState` you can handle each route change on your application. For example

```javascript
function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},2000);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })

  return loading && (
    <div>loading</>
  )
}
```

### What is happening?

Now you have an example to look at, let us talk about what we are doing to make a loading function. First we are setting a state of `loading` as a boolean. This allows you to easily swap between it is and is not loading, we are then using `useEffect` to power the checks. The `useEffect` here has two functions one to handle the starting and one to handle when it is finished, we then use the `router.events` mentioned above to decide what function should run. If we are starting, it should run handleStart which sets loading to the boolean true. Otherwise it has finished and we set the boolean false.

Finally we have a conditional renderer that only shows if it is indeed loading.
