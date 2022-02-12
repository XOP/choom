<script>
  import clsx from "clsx";

  import {
    DIRECTION_TYPES,
    MAP_SPACE,
    SPACE_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Contain");

  /** @props {string} className */
  export let className = "";

  /** @props {string} as */
  export let as = "div";

  /** @props {string} dir */
  export let dir = "xy";
  validate("dir", dir, DIRECTION_TYPES);

  /** @props {string} padding */
  export let space = "1";
  validate("space", space, SPACE_TYPES);

  const spaceValue = MAP_SPACE[String(space)];

  let padT = 0;
  let padB = 0;
  let padL = 0;
  let padR = 0;

  switch (dir) {
    case "xy":
      padT = padB = padL = padR = spaceValue;
      break;

    case "x":
      padL = padR = spaceValue;
      break;

    case "y":
      padT = padB = spaceValue;
      break;

    case "top":
      padT = spaceValue;
      break;

    case "bottom":
      padB = spaceValue;
      break;

    case "left":
      padL = spaceValue;
      break;

    case "right":
      padR = spaceValue;
      break;
  }

  export let css = {};

  if (padT !== 0) {
    css.Contain_PaddingT = padT;
  }

  if (padB !== 0) {
    css.Contain_PaddingB = padB;
  }

  if (padL !== 0) {
    css.Contain_PaddingL = padL;
  }

  if (padR !== 0) {
    css.Contain_PaddingR = padR;
  }

  export const p = {
    class: clsx("root", className),
    style: propsToVars(css),
  };
</script>

{#if as === "section"}
  <section {...p}><slot /></section>
{:else if as === "article"}
  <article {...p}><slot /></article>
{:else if as === "aside"}
  <aside {...p}><slot /></aside>
{:else}
  <div {...p}><slot /></div>
{/if}

<style lang="scss">
  .root {
    box-sizing: border-box;
    width: 100%;
    padding-top: var(--Contain_PaddingT, 0);
    padding-bottom: var(--Contain_PaddingB, 0);
    padding-left: var(--Contain_PaddingL, 0);
    padding-right: var(--Contain_PaddingR, 0);
  }
</style>
