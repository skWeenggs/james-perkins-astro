---
setup: |
  import Layout from '../../layouts/BlogLayout.astro'
title: How I automate Productivity using Session and AppleScript
date: '2021-11-02T00:00:00.000Z'
image: >-
    https://res.cloudinary.com/dub20ptvt/image/upload/v1642771477/Blog%20Posts/ap0llteoc9vvmetmpjxq.webp
authors:
   James Perkins
categories: thoughts
description: >-
    I have to focus on important tasks throughout the day and I find I can get
    distracted easily, as a YouTube and Dev Advocate there are plenty of excuses
    to open Twitter, TikTok or YouTube. I use Session and AppleScript to automate
    this.
---

I have to focus on important tasks throughout the day and I find I can get distracted easily, as a YouTube and Dev Advocate there are plenty of excuses to open Twitter, TikTok or YouTube.

Here is where Session comes to save the day! I have been using Session since I saw a tweet from Chris where he stated he was a paying customer. So I dig in and find this Indie Hacker built product that allows you to use the Pomodoro tracking with analytics. But it is so much more than that block applications or websites, put on Do not Disturb, and be mindful about each session block.

If this sounds like something you want, you can download Session over at [https://www.stayinsession.com/](https://www.stayinsession.com/)

## My Session setup

So the most important things to me when working productively are:

1.  Distractions are removed.
2.  Music or Podcasts are playing
3.  Do not disturb is on.
4.  Remind me to stop.

<newsletter />

### Removing distractions

Block sites:

So first thing I do is setup my Website blocker to include Twitter, Lifehacker, BBC. The BBC might seem like a strange thing to block, but it’s football “soccer” season and managers are getting fired left and right!

![Block Sites](https://res.craft.do/user/full/c67cad1b-6dc6-4909-0f8e-19d468ba9fd4/doc/59247533-AA5E-4201-918F-7D232B9F4091/3C29A0B1-53F0-485A-B34C-3648672267CF_2/CleanShot%202021-11-01%20at%2015.10.58.png)

Remove ticking sounds

There is an option for a Session sound, it supposed to help users but as a kid who grew up with a lot of ticking clocks it was immediately silenced as I can’t stand the sound, but crank that Ocean Waves!

![Remove Ticking](https://res.craft.do/user/full/c67cad1b-6dc6-4909-0f8e-19d468ba9fd4/doc/59247533-AA5E-4201-918F-7D232B9F4091/32956A04-5E62-4783-9FE9-0F3189CCD1D0_2/CleanShot%202021-11-01%20at%2015.14.03.png)

### AppleScript Automation

So I have simple start focusing startup routine that does the following:

1.  Open Spotify to a playlist which happens to be Matt Cherne which has zero lyrics but the songs slap. Set the volume to a crisp 80
2.  Close Slack, Close Email, Close Basecamp and Discord
3.  Set Do Not Disturb to on.

This allows me to get right to work without having to manually close all the noise makers and put on specific sounds.

```shell

tell application "Slack" to quit
tell application “Discord” to quit
tell application "Mail" to quit
tell application “Basecamp 3” to quit

tell application "Spotify"
launch
delay 3
set sound volume to 80
play track "spotify:user:spotify:playlist:5ssrqksXW4G4ze7my3kgMJ"
end tell

set output to (do shell script "defaults read com.apple.controlcenter 'NSStatusItem Visible DoNotDisturb'")
if output is "0" then
tell application "System Events" to keystroke "D" using {command down, shift down, option down, control down}
do shell script "defaults write com.apple.controlcenter 'NSStatusItem Visible DoNotDisturb' 1"
end if

```

Then when a session is over I ask everything to Launch I had closed and to close out of Spotify allowing me to check slack messages, emails etc before continuing a task.

```shell
tell application "Slack" to launch

tell application "Mail" to launch

tell application "Discord" to launch

tell application "Basecamp 3" to launch

tell application "Spotify" to quit

set output to (do shell script "defaults read com.apple.controlcenter 'NSStatusItem Visible DoNotDisturb'")

if output is "0" then
tell application "System Events" to keystroke "D" using {command down, shift down, option down, control down}
do shell script "defaults write com.apple.controlcenter 'NSStatusItem Visible DoNotDisturb' 1"

end if
```

That’s how I automate my tasks and keep on track! Hope you enjoyed, feel free to modify the AppleScript as needed.
