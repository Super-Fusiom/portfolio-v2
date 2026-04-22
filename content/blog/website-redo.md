---
title: "New Portfolio website"
description: "Wait a new website?"
tags: ["project", "personal"]
date: 2026/04/22
---

# New Portfolio Website! Why!?

This website's [source code](https://github.com/Super-Fusiom/portfolio-v2.git)  
Previous Website [source code](https://github.com/Super-Fusiom/Website-Portfolio.git) for reference

Well it was about time I actually document what I'm actually doing instead of just build something and not show it. (I mean I could but for some things I make, what's the point?)  
Most of my projects are just in this limbo where I make so much progress in so much time yet never put the project in a finished state.  
It's not to say I have any projects that are finished it's just that it's not the majority of projects that I do.  
This website, blog, and the future blogs/projects is one of those projects I can say is mostly complete or rather actively maintained as I'm adding more and more content. Is it just me being lazy or just getting to board of the work? I have no idea.

## Why Am I Doing This?

Well I just don't like `TSX` and `JSX`. That's mainly what I've been bummed about when I've made the first portfolio website. With React being the most popular framework there, it just made sense to make a project with it and I didn't have a way to show my work to employers or anyone of the sort.  
Like who likes to do:

```
import "./projectsMain.css";
import TopProjects from "../topProjects/topProjects";

const projectsMain = () => {
  return (
    <>
      <h1> Here are some of my featured projects that I'm proud of</h1>
      <TopProjects />
    </>
  );
};

export default projectsMain;
```

**Vue For Comparison**

```
<script setup lang="ts">
    const msg: String = "Wow, TypeScrpt in the script tag? Like in HTML but better !?";
</script>

<template>
    <section class="hero">
        <h1>Wow this is cool</h1>
        <h3>No Exports or crappy imports here in template tag!</h3>
        <br />
    </section>
</template>
```

Another thing is that I wanted to add a blogging system because I like to document things day by day or just when I feel like it. Problem with implementing with the previous website is that I would have to use `TSX` to actually render the page (That's why my project page for the previous website is simpler compared to the code in this website). That creates so much effort for me just to write a simple blog post. While I could add Markdown support, it wouldn't be effective since I'm only using a frontend library (React) rather than a full-stack framework (Next.JS).

#### What About Blogging Services?

Nah I'm good.

## What Am I Using Now?

With this in mind, I've done three things:

- I've switched from React to Vue (Shocker)
- I'm using Nuxt.JS instead of Next.JS
- I've added a blogging system

With a full-stack framework, it handles slug routes effectively which is what I needed for a blogging system (Bonus!).
Also using Vue instead of React is a blessing (If you're a web dev, try it out!). I don't need to worry about XML like syntax surrounded by JavaScript nonsense. It's just simple tags you would see in XML-like languages (HTML, XML).

Nuxt also has a first party support for content such as YAML and Markdown (This document is written in Markdown by the way).  
Did I implement this in the best way possible?  
**No!**  
However, it works for now and it fits the requirements for me so I'm leaving blogging portion of the website (implementation) as it is.  
As someone who doesn't do web dev (If any development at all), it has been a great experience I must say so I recommend it.  
After all I can just write one Markdown file and it's a git push away.

## What's Next?

Well I'm hoping to add more content in the near future and more features in my website.  
Currently the Landing page is a bit lacking so I might add some fancy visual on what technologies I've used on a regular basis or something like that.
