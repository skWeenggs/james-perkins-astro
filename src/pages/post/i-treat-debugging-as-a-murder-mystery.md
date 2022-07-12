---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: I treat debugging as a murder mystery
date: '2021-05-07T00:00:00.000Z'
image: 'https://res.cloudinary.com/dub20ptvt/image/upload/v1620501992/murder-mystery_tmmku1.jpg'
authors:
   James Perkins
categories: tutorials
description: >-
    I have spent so much of my career debugging code, whether its Production code in a large scale enterprise applications or in my own personal code. Every time I start debugging I treat it as a murder mystery.
---

I have spent so much of my career debugging code, whether its Production code in a large scale enterprise applications or in my own personal code. Every time I start debugging I treat it as a murder mystery. I follow the same 6 steps to almost all of my debugging as it allows maximum throughput for me.

1. Figure Out What Changed.
2. Eliminate One Possibility Each Time.
3. Focus on code changes.
4. Use the Google.
5. Take Notes and Share New Information.
6. Pay Attention to other Developers Suggestions.

Sometimes you can skip some steps but the first 2 are must do's if you can narrow down to a single change in file a, then you know file a introduced the bug.If you have multiple changes elimating each change will allow you to swiftly move through the issue and come to a solution.

I followed this idea for years and it has never let me down, next time you are debugging try thinking it's a murder mystery!
