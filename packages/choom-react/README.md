# CHOOM-REACT

![npm](https://img.shields.io/npm/v/choom-react)

Trusted UI companion for your next React prototype.

Choom React is built with the following concepts:
- sufficient variety of elements for the modern application prototyping
- theming is opinionated, yet extensively and easily configurable
- component API is a predictable facade, shared in similar entities

## DISCLAIMER 

Choom is growing and maturing as you are reading these notes.  
Current version is not stable and most probably **will not** be compatible with the next update.  
Prior to version `1.0.0` it is not recommended to use in anything more complex than an exercise/test/prototype app.

## Installation

```sh
yarn add choom-react
```

## Setup

### Styling

`choom-react` depends on `choom-theme`.  

After installing dependency you need to install the core CSS.  

```js
import "choom-theme/dist/index.css";
```

Additionally you can use the CSS-in-JS variables:

```js
import theme from "choom-theme";

<strong style={{ fontSize: theme.fontSizeXl }}>...</strong>
```

## Links

CHOOM-REACT is created with the help of the following packages:

- [emotion](https://emotion.sh/docs/introduction)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [react-feather](https://www.npmjs.com/package/react-feather)

---

[LICENSE](LICENSE)
