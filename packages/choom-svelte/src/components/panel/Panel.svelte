<script>
  import clsx from "clsx";

  import {
    MAP_SPACE,
    TEXT_ALIGN_TYPES,
    PLACEMENT_Y_TYPES,
    POSITION_TYPES,
    SPACE_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Panel");

  /** @props {string} className */
  export let className = "";

  /** @props {string} as */
  export let as = "section";

  /** @props {string} padding */
  export let padding = "2";
  validate("padding", padding, SPACE_TYPES);

  /** @props {string} align */
  export let align = "left";
  validate("align", align, TEXT_ALIGN_TYPES);

  /** @props {string} position */
  export let position = "fixed";
  validate("position", position, POSITION_TYPES);

  /** @props {string} placement */
  export let placement = "top";
  validate("placement", placement, PLACEMENT_Y_TYPES);

  let shadow = "";

  if (placement === "top") {
    shadow = "0 2px 7px -2px rgba(0,0,0,.6), 0 1px 18px -4px rgba(0,0,0,.3)";
  }

  if (placement === "bottom") {
    shadow = "0 -2px 7px -3px rgba(0,0,0,.6), 0 -1px 18px -6px rgba(0,0,0,.3)";
  }

  export let css = {
    Panel_Position: position,
    Panel_Top: placement === "top" ? "0" : "auto",
    Panel_Bottom: placement === "bottom" ? "0" : "auto",
    Panel_Padding: MAP_SPACE[String(padding)],
    Panel_Shadow: shadow,
    Panel_TextAlign: align,
  };

  export const p = {
    class: clsx("root", className),
    style: propsToVars(css),
  };
</script>

{#if as === "section"}
  <section {...p}><slot /></section>
{:else if as === "header"}
  <header {...p}><slot /></header>
{:else if as === "footer"}
  <footer {...p}><slot /></footer>
{:else}
  <div {...p}><slot /></div>
{/if}

<style lang="scss">
  .root {
    position: var(--Panel_Position);
    left: 0;
    right: 0;
    top: var(--Panel_Top);
    bottom: var(--Panel_Bottom);

    z-index: 2000;
    padding: var(--Panel_Padding);
    border: var(--border-size-regular) solid var(--color-dark-temp);
    border-radius: var(--radius-regular);

    color: var(--color-dark-temp);
    font-family: var(--font-family);
    font-size: var(--font-size-n);
    text-align: var(--Panel_TextAlign);

    background: var(--color-light-temp);
    box-shadow: var(--Panel_Shadow);
  }
</style>
