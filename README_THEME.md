# Liquid Glass Theme System

The "Liquid Glass" theme is a premium design system built on top of Tailwind CSS and shadcn/ui, characterized by frosted glass effects, translucent gradients, and smooth motion.

## Core Design Principles

1.  **Glassmorphism**: Extensive use of `backdrop-filter: blur()`, semi-transparent backgrounds, and subtle white borders to create depth and texture.
2.  **Vibrant Gradients**: Backgrounds use soft, moving gradients (Mesh Gradients) to provide a dynamic feel.
3.  **Light & Dark Mode**: Seamless transition between modes, with specific glass opacities tuned for readability in both environments.
4.  **Motion**: Micro-interactions and entrance animations (e.g., `animate-accordion-down`, hover scales) make the UI feel alive.

## Design Tokens (`design-tokens.json`)

The theme is defined by a set of design tokens that map to CSS variables and Tailwind utilities.

### Colors
- **Primary**: Gradients (Blue to Purple)
- **Glass**:
    - `glass-bg`: White/Black with low opacity
    - `glass-border`: White with 10-20% opacity
    - `glass-shadow`: Colored shadows for depth

### Utilities

We have extended Tailwind with custom utilities:

- `.glass`: Standard frosted glass effect.
    ```css
    @apply bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-xl;
    ```
- `.glass-strong`: More opaque for higher contrast areas.
- `.glass-subtle`: Less blur, for secondary elements.

## Components

### Card
Cards use the `.glass` utility by default, with a hover effect that slightly scales the card and increases shadow intensity.

### Buttons
- **Primary**: Gradient background with shadow.
- **Secondary/Ghost**: Glass background with hover effects.

### Inputs
Inputs use a very subtle glass background (`bg-white/5`) with a border that lights up on focus.

## Usage

To apply the glass effect to any new component:

```jsx
<div className="glass p-6 rounded-xl">
  <h2 className="text-xl font-bold">Glass Content</h2>
</div>
```

To use the gradient text:

```jsx
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
  Gradient Text
</span>
```
