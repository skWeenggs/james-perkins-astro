---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Supercharge your astro blog
date: '2021-11-04T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1642704336/Blog%20Posts/g8yto96oibcz9lnth0wm.webp'
authors:
   James Perkins
categories: astro
description: >-
    Supercharge your Astro blog with open source comments
---

Astro is a powerful, it allows you to ship less JavaScript which means fast sites. One thing I noticed is a lot of Astro blogs don't seem to have comments, so lets fix that!

## What is utterances?

Utterances A lightweight comments widget built on GitHub issues. It allows you to use GitHub issues for blog comments, these are the three main reason I chose Utterances:

-   It's Open Source
-   You own the data
-   No tracking, no ads, always free.

### How to setup Utterance

Utterance uses a single script to handle loading comments and allowing people to make comments on your blog posts. First thing you need to do is create a public repo to house all of your comments. Once you have that you need a script

```javascript
<script
    src="https://utteranc.es/client.js"
    repo="[ENTER REPO HERE]"
    issue-term="pathname"
    theme="preferred-color-scheme"
    crossorigin="anonymous"
    async
></script>
```

### How to add Utterance to a Astro using Svelte

The power of Astro is It ships 0 bytes of JavaScript by default, only loading it on demand if even needed, all while being able to choose your own UI framework including React, Preact, Svelte, and Vue.

The only difference from using Svelte vs Vue vs React is how you implment your component, but the Astro component will be the same!

### Creating our Svelte component

Inside your Components folder create a svelte component named `Comments` and enter the following:

```
<script>
import { onMount } from 'svelte'
onMount(() => {
    const s = document.createElement('script')
    const tag = document.getElementById('utterances')
    s.setAttribute('repo',""REPO_NAME")
    s.setAttribute('issue-term',"pathname")
    s.setAttribute('label',"comments")
    s.setAttribute('theme',"preferred-color-scheme")
    s.setAttribute('crossorigin',"anonymous")
    s.src = 'https://utteranc.es/client.js'
    tag.parentNode.insertBefore(s, tag)
})
</script>

<div id="utterances"></div>
```

As you can see from this svelte component, I am telling svelte to load the script, on mount and add it to the `<div>` declared at the bottom. You will need to update the `REPO_NAME` with your repo name.

### Adding our Svelte component to our Astro component

In my specific Astro application I have an astro component called `prose.astro` that holds my articles. This is what it currently looks like:

```html
<article class="prose">
    <slot />
</article>

<style>
    .prose {
        @apply max-w-none
        /* Size Modifiers: https://github.com/tailwindlabs/tailwindcss-typography#size-modifiers */
        /* Color Themes: https://github.com/tailwindlabs/tailwindcss-typography#color-modifiers */;
    }
</style>
```

So to add in the comments we just import the component at the top and then add the component to the html.

```html
import Comments from "./Comments.svelte" ---

<article class="prose">
    <slot />
    <Comments client:load />
</article>

<style>
    .prose {
        @apply max-w-none
        /* Size Modifiers: https://github.com/tailwindlabs/tailwindcss-typography#size-modifiers */
        /* Color Themes: https://github.com/tailwindlabs/tailwindcss-typography#color-modifiers */;
    }
</style>
```

### What does it look like?

![Comments in astro.png](https://res.craft.do/user/full/c67cad1b-6dc6-4909-0f8e-19d468ba9fd4/doc/684c6dfe-1804-4551-aef1-12e8d272e71c/d6736c31-2cbb-4ed3-9941-57561c42cc28)

At the bottom of every post you will now see box for someone to add their comments! Pretty awesome right?Let me know what you think in the comments! Go on, you know you want to!
