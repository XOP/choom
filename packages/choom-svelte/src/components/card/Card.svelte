<script>
  import {
    MAP_SPACE,
    SPACE_TYPES,
    TEXT_ALIGN_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Card");

  /** @props {string} className */
  export let className = "";

  /** @props {string} title */
  export let title = undefined;

  /** @props {string} align */
  export let align = "left";
  validate("align", align, TEXT_ALIGN_TYPES);

  /** @props {string} padding */
  export let padding = "1";
  validate("padding", padding, SPACE_TYPES);

  /** @props {function} onClick */
  export let onClick = () => null;

  export let css = {
    Card_Padding: MAP_SPACE[String(padding)],
    Card_TextAlign: align,
  };
</script>

<div style={propsToVars(css)} class={className} {title} on:click={onClick}>
  <slot />
</div>

<style lang="scss">
  div {
    padding: var(--Card_Padding);

    background: var(--color-light-temp);
    box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.6);
    border: var(--border-size-regular) solid var(--color-dark-temp);
    border-radius: var(--radius-heavy);

    font-family: var(--font-family);
    font-size: var(--font-size-n);
    line-height: var(--line-height-n);
    color: var(--color-dark-temp);

    text-align: var(--Card_TextAlign);
  }
</style>
