---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: DaisyUI - Make Tailwind components with ease!
date: '2021-10-28T00:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1635377217/Tailwind_uryoth.webp
authors:
   James Perkins
categories: css
description: >-
    DaisyUI allows you to bring the power of tailwind into clean concise
    components.
---

When TailwindCSS hit the world, developers were brought to a world of utility classes. Allowing them to move swiftly and produce amazing looking content. I've always found Tailwind to be messy, hard to follow, and bloats code lines. This is fine if you spend a lot of time with Tailwind as with any language you learn the syntax, but I am always looking for an easy way to do something... Which is where Daisy UI comes in.

###

<youtube url="https://youtu.be/hM9fENyAquM" />

## What is DaisyUI?

DaisyUI is a Tailwind plugin that allows you to create Clean HTML with component classes, that is built on pure CSS. It also has themes that we all love like `dracula` , `dark` , `cupcake` . In other words no need to deal with 100s of utility classes to create something, but you still have access to them.

## How to setup DaisyUI?

DaisyUI is a tailwind plugin, so it requires minimal setup. First step, make sure you have a project setup with tailwindCSS. Then install DaisyUI

```shell
npm i daisyui
```

Then the final step is to register DaisyUI as a plugin in your `tailwindcss.config`

```javascript
module.exports = {
...
    plugins: [
      require('daisyui'),
    ],
...
  }
```

Now you are ready to start using it.

## DaisyUI vs Utility Classes

### A button

What makes DaisyUI so appealing is the ability to cut down the amount of classes added to an element for example a button:In Tailwind to create a link that is a rounded button that is purple it would look similar to this :

```html
<a
    class="inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out
    bg-indigo-100 rounded-md
    cursor-pointer
    hover:bg-indigo-600"
    >Button</a
>
```

Which is a lot for a button, sure you could make this into a reusable component but if someone came along and read this there is a lot to read through before fully comprehending what is happening. In DaisyUI you can set a link as a rounded button with 5% of the code used above for example:

```javascript
<a class="btn btn-primary">Button</a>
```

### Toggle Switches

If you wanted a toggle switch in Tailwind you would have to write something similar:

```
<div class="relative">
    <input type="checkbox" class="peer
    appearance-none cursor-pointer
    border border-gray-300 rounded-full
    checked:border-gray-900 w-12 h-7"/>
    <span class="peer-checked:left-6
    peer-checked:bg-gray-900
    transition-all duration-500
    pointer-events-none w-5 h-5
    block absolute top-1 left-1
    rounded-full bg-gray-300"></span>
  </div>
```

Again hard to parse unless you are truly using Tailwind frequently. In Daisy UI it's again much smaller

```
<input type="checkbox" class="toggle"/>

```

## My Thoughts

As a big fan of Chakra-UI it's hard to get me to pull away from such a beautiful component based framework that I am so familiar with. DaisyUI will almost guarantee that in the future I will be checking out TailwindCSS for projects, it's use of extendable components reduces the barrier of entry, an important requirement in 2021.
