# Choom UI

> Choom UI is an experiment of using similar patterns  
> in order to create multi-framework UI library  
> that can be used as a seed for Design System

## Structure

Choom UI is a mono-repo that contains one core and several dependent projects:

### [choom-theme](./packages/choom-theme/README.md)

Choom Theme is a core dependency for the Choom UI kits.  
It is practically a Design Tokens package, that exist in the form of CSS and CSS-in-JS variables.

### [choom-react](./packages/choom-react/README.md)

Choom React is the [ReactJS](https://reactjs.org/) version of Choom UI.  
It's worth mentioning that on behalf of experiment a component first is created in this package and then "ported" to other frameworks.
Version of React supported: `17`.

### [choom-vue](./packages/choom-vue/README.md)

Choom Vue is the [VueJS](https://vuejs.org/) version of Choom UI.  
Version of Vue supported: `3.2`.

### [choom-svelte](./packages/choom-svelte/README.md)

Choom Svelte is the [Svelte](https://svelte.dev/) version of Choom UI.  
Version of Svelte supported: `3.39.x`.

## Documentation

Coming up...

