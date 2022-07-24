---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: How to automate your PRs
draft: false
date: '2021-10-31T00:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1642772244/Blog%20Posts/gco6j1r1t1jqeuakq1o5.webp
authors:
   James Perkins
categories: devops
description: >-
    When using static sites like Next, Hugo or Astro sometimes you want to use a
    seperate branch and then deploy it at a particular time. I have built a few
    automated workflows so here is how
---

When working on a site that requires deployment to be at a specific time or date you have a few different options that I will cover today. The first option is to use PR Scheduler which installs to your repositories and makes automation easy as writing a PR comment. The second option we are covering today is GitHub Actions to automate them.

<youtube url="https://www.youtube.com/watch?v=HpYq6xWLAo4" />

## PR Scheduler

PR Scheduler is a GitHub integration that can be installed to your GitHub repositories. It was built by [@tomkadwill](https://twitter.com/TomKadwill) to make it easy to schedule Pull Requests, in fact I use this on my site to merge blog posts at a specific time.

### How to install and use it

1.  Open PR Scheduler's GitHub App page.
2.  Click the 'Install' button
3.  Select whether to install PR Scheduler on all repositories or only specific repositories. Then click 'Install'.

Now PR Schedule can now be used on your PR's and to initiate it you do the following:

1.  Open up your PR that you want to schedule.
2.  Add a new comment for example @prscheduler 31/10/2021T14:00
3.  PR Scheduler will respond back telling you it's ready.

![PR Scheduler](https://res.cloudinary.com/dub20ptvt/image/upload/v1635613787/PR_Scheduled_cvxyim.png)

That's it now when that time comes along, your PR will be merged. If you make a mistake with the time or date, just run the same command and it will reschedule.

## GitHub Actions

GitHub Actions are very powerful and flexible and allow you to run all sorts of DevOps operations without needing separate tooling.

### Creating your GitHub action

Create a file in your project called `.github/workflows/scheduler.ym`we will use this to create our actions.

There are quite a few options for GitHub actions but I actually like a prebuilt version called [merge-schedule-action](https://github.com/gr2m/merge-schedule-action) takes a few different arguments and uses the date to schedule your PR:

```javascript
name: Merge Schedule
on:
  pull_request:
    types:
      - opened
      - edited
      - synchronize
  schedule:
    # Check every hour.
    - cron: 0 * * * *

jobs:
  merge_schedule:
    runs-on: ubuntu-latest
    steps:
      - uses: gr2m/merge-schedule-action@v1
        with:
          merge_method: squash
          #  Time zone to use. Default is UTC.
          time_zone: "America/Los_Angeles"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

So let us breakdown what is happening here we give it a name Merge Schedule that triggers on pull requests that are opened, edited, synchronize. We then check every hour via a cronjob using `0 \* \* \* \*` and then we run a job called `merge\_schedule`. The steps are the most important here, we tell it to use gr2m/merge-schedule-action@v1 and tell it the merge method to use and what timezone we should be using in the example we are using America/Los_Angeles

Now we have created the Action when you create a Pull Request you need to add /schedule YYYY-MM-DD to your Pull Request description. At this point the Action will check all PRs until the date matches and deploy the code, if you need precise deployments you can use `/schedule 2019-12-31T00:00:00.000Z.`
