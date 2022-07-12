---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: Why flag parameters suck
date: '2021-04-17T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1618778953/feature_flag_losart.webp'
authors:
   James Perkins
categories: thoughts
description: >-
    When coding people tend to use flag parameters to drive their functions, without considering that they absolutely suck! They cause more trouble when a you write complex functions or a codebase that is large in nature, because the readability is just terrible let me explain
---

When coding people tend to use flag parameters to drive their functions, without considering that they absolutely suck! They cause more trouble when a you write complex functions or a codebase that is large in nature, because the readability is just terrible let me explain.

## What is a flag parameter?

A flag parameter is a Boolean that drives a function, for example:

```js
function register(user, isAdmin) {
    if (isAdmin) {
        // give admin privs
    } else {
        //Give standard privs
    }
}

register(user, true);
```

The problem when using a flag parameter you lose context behind the parameter and another developer has to read through the full function before understanding what `isAdmin` is for. Now imagine that this function is complex making it hard to follow.

## What is the alternative?

There are some alternatives to this issue but I prefer two options.

### Create distinct functions

The first option create two functions that separate the flag, so taking above we can create:

```js
function registerAdmin(user) {
    // do admin privs
}

function registerUser(user) {
    // give standard pribs
}

registerAdmin(user);
registerUser(user);
```

Now we have very distinct functions and based just upon the name we know exactly what is happening in the functions.

### Using an options parameter

The second option, to use an options parameter that holds all the different parameters that drive the functions:

```js
function register(user, options){
	if(options.admin){
	// do admin privs
}
else{
	//Give standard privs
}
}

register(user, options:{"admin" : true})
```

This option allows you to see what is driving the function without needing to read a full function, you can see there are extra options and are they an admin or not.
