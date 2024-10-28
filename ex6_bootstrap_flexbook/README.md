---
title: 'README'
metaTitle: 'README'
metaDesc: 'README'
socialImage: ''
data: '2024-Sep-15 07:33'
tag: 
    - tsx
---

# README

## Getting Started

```bash
# install SolidJS
pnpm create vite
# √ Project name: ... .
# √ Select a framework: » Solid
# √ Select a variant: » TypeScript

pnpm install
pnpm outdated
pnpm update --latest

# install bootstrap
pnpm add @popperjs/core bootstrap@latest

# add these in `index.tsx`
# import 'bootstrap/dist/css/bootstrap.min.css';
# import 'bootstrap/dist/js/bootstrap.bundle.min.js';

# you may have to install type for typescript
pnpm add -D @types/bootstrap

# using bootstrap scss
pnpm add -D sass
# then import this one instead
# import 'bootstrap/scss/bootstrap.scss';

# routing
pnpm install @solidjs/router


```

## Development

```bash
pnpm run dev

# Ctrl+Shift+p
# Simple Browser
# http://localhost:3000


# Facebook Clone
# https://www.youtube.com/watch?v=TZdiRlFd9r0
```

## Bootstrap

```bash
https://getbootstrap.com/docs/5.3/components/modal/#how-it-works

https://www.youtube.com/watch?v=TZdiRlFd9r0
```

```tsx
import { onCleanup, onMount } from "solid-js";
import { Popover } from "bootstrap"; // Import Bootstrap at the top

export default function App() {
// Popover
let popoverInstances: bootstrap.Popover[] = [];

onMount(() => {
  const popoverTriggers = document.querySelectorAll('[data-bs-toggle="popover"]');
  
  popoverTriggers.forEach((trigger) => {
    const popoverInstance = new Popover(trigger); // Create a new instance of Popover
    popoverInstances.push(popoverInstance); // Store the instance for cleanup
  });
});

onCleanup(() => {
  // Dispose of each popover instance on cleanup
  popoverInstances.forEach((popover) => popover.dispose());
});

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}
```

```tsx
import { onCleanup, onMount } from "solid-js";
import { Popover } from "bootstrap"; // Import Bootstrap at the top

export default function App() {
  // Popover
  let popoverInstances: bootstrap.Popover[] = [];
  onMount(() => {
    const popoverTriggers = document.querySelectorAll('[data-bs-toggle="popover"]');
    import("bootstrap").then(({ Popover }) => {
      popoverTriggers.forEach((trigger) => {
        const popoverInstance = new Popover(trigger); // Create a new instance of Popover
        popoverInstances.push(popoverInstance); // Store the instance for cleanup
      });
    });
  });
  onCleanup(() => {
    // Dispose of each popover instance on cleanup
    popoverInstances.forEach((popover) => popover.dispose());
  });

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}
```

