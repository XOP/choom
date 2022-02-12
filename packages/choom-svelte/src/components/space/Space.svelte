<script>
  import {
    DIRECTION_XY_TYPES,
    DISPLAY_TYPES,
    MAP_SPACE,
    SPACE_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Space");

  /** @props {string} className */
  export let className = "";

  /** @props {string} display */
  export let display = "block";
  validate("display", display, DISPLAY_TYPES);

  /** @props {string} dir */
  export let dir = "y";
  validate("dir", dir, DIRECTION_XY_TYPES);

  /** @props {string} padding */
  export let size = "1";
  validate("size", size, SPACE_TYPES);

  /** @props {boolean} isBox */
  export let isBox = true;

  const _size = MAP_SPACE[String(size)];

  let margin = 0;
  let dim = 0;

  if (isBox) {
    dim = _size;
  } else {
    margin = `calc(${_size} / 2)`;
  }

  export let css = {};

  if (dir === "y") {
    css.Space_Display = display;
    css.Space_Margin = margin;
    css.Space_Height = dim;
  }

  if (dir === "x") {
    css.Space_Display = display;
    css.Space_Margin = margin;
    css.Space_Width = dim;
  }
</script>

<div
  style={propsToVars(css)}
  class={className}
  class:dirX={dir === "x"}
  class:dirY={dir === "y"}
>
  <slot />
</div>

<style lang="scss">
  div {
    display: var(--Space_Display);
    width: auto;
    height: auto;
  }

  .dirX {
    width: var(--Space_Width);
    margin: 0 var(--Space_Margin);
  }

  .dirY {
    height: var(--Space_Height);
    margin: var(--Space_Margin) 0;
  }
</style>
