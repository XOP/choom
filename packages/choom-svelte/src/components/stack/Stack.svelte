<script>
  import clsx from "clsx";

  import {
    DIRECTION_XY_TYPES,
    MAP_SPACE,
    SPACE_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Stack");

  /** @props {string} className */
  export let className = "";

  /** @props {string} as */
  export let as = "div";

  /** @props {string} dir */
  export let dir = "y";
  validate("dir", dir, DIRECTION_XY_TYPES);

  /** @props {string} padding */
  export let space = "1";
  validate("space", space, SPACE_TYPES);

  const spaceValue = MAP_SPACE[String(space)];

  let marginL = spaceValue;
  let marginT = spaceValue;

  export let css = {};

  if (dir === "y") {
    css.Stack_MarginT = marginT;
  }

  if (dir === "x") {
    css.Stack_MarginL = marginL;
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

    & > :global(*:not(:first-child)) {
      margin-top: var(--Stack_MarginT);
      margin-left: var(--Stack_MarginL);
    }
  }
</style>
