# CHOOM-VUE

![npm](https://img.shields.io/npm/v/choom-vue)

Trusted UI companion for your next Vue 3 prototype.

Choom Vue is built with the following concepts:
- sufficient variety of elements for the modern application prototyping
- theming is opinionated, yet extensively and easily configurable
- component API is a predictable facade, shared in similar entities

## DISCLAIMER 

Choom is growing and maturing as you are reading these notes.  
Current version is not stable and most probably **will not** be compatible with the next update.  
Prior to version `1.0.0` it is not recommended to use in anything more complex than an exercise/test/prototype app.

## Installation

```sh
yarn add choom-vue
```

Use component imports in your app:  
```js
import { Button } from "choom-vue";
```

## Setup

### Styling

#### Theme

`choom-vue` depends on `choom-theme`.  

After installing dependency you need to install the core CSS.  

```js
import "choom-theme/dist/index.css";
```

Optionally you can use the CSS-in-JS variables:

```js
import theme from "choom-theme";

<strong style={{ fontSize: theme.fontSizeXl }}>...</strong>
```

#### Library

Temporarily `choom-vue` relies on the external CSS due to vite build features.  
To support component styling add an additional import to your app:

```js
import "choom-vue/lib/index.css";
```

## Links

CHOOM-VUE is created with the help of the following packages:

- [nanoid](https://www.npmjs.com/package/nanoid)
- [vue-tabler-icons](https://www.npmjs.com/package/vue-tabler-icons)

---

[LICENSE](LICENSE)
