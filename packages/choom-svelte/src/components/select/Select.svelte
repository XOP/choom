<script>
  import { beforeUpdate, afterUpdate } from "svelte";

  import theme, { SIZES_TYPES } from "choom-theme";

  import Icon from "../icon/Icon.svelte";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Select");

  export const svgArrow = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M19 9l-7 7-7-7" />
</svg>`;

  /** @props {string} className */
  export let className = "";

  /** @props {string} id */
  export let id = undefined;

  /** @props {string} name */
  export let name = undefined;

  /** @props {boolean} disabled */
  export let disabled = false;

  /** @props {string} value */
  export let value = undefined;

  /** @props {string} size */
  export let size = "regular";
  validate("size", size, SIZES_TYPES);

  /** @props {function} onChange */
  export let onChange = undefined;

  let selectEl = null;

  let paddingY = theme.spaceThreeQuarters;
  let paddingX = theme.spaceOne;
  let fontSize = theme.fontSizeN;

  if (size === "small") {
    fontSize = theme.fontSizeM;
    paddingY = theme.spaceHalf;
    paddingX = theme.spaceHalf;
  }

  if (size === "big") {
    fontSize = theme.fontSizeL;
    paddingY = theme.spaceOne;
    paddingX = theme.spaceOneAndHalf;
  }

  export let css = {
    Select_FontSize: fontSize,
    Select_PaddingX: paddingX,
    Select_PaddingY: paddingY,
  };

  let prevValue = value;

  beforeUpdate(() => {
    if (value !== prevValue) {
      onChange && onChange(value, selectEl);
    }
  });

  afterUpdate(() => {
    prevValue = value;
  });
</script>

<div style={propsToVars(css)} class={className}>
  <select {id} {name} {disabled} bind:value bind:this={selectEl}>
    <slot />
  </select>
  <span class:isDisabled={disabled}>
    <Icon size="inherit">
      {@html svgArrow}
    </Icon>
  </span>
</div>

<style lang="scss">
  div {
    position: relative;
    width: 100%;

    font-size: var(--Select_FontSize);
  }

  select {
    appearance: none;

    box-sizing: border-box;

    width: 100%;
    height: calc(
      var(--Select_PaddingY) * 2 + var(--Select_FontSize) * var(--line-height-n) +
        2 * var(--border-size-regular)
    );
    padding: var(--Select_PaddingY) var(--Select_PaddingX);

    border: var(--border-size-regular) solid var(--color-dark-temp);
    border-radius: var(--radius-regular);

    color: var(--color-dark-temp);
    background: var(--color-light-temp);

    white-space: nowrap;
    font-family: var(--font-family);
    font-size: inherit;
    line-height: var(--line-height-n);

    cursor: pointer;
    transition: all 0.15s;

    &[disabled] {
      cursor: default;
      opacity: 0.5;
    }

    &:not([disabled]) {
      @media (hover: hover) {
        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }

  span {
    position: absolute;
    top: calc(50% + var(--space-eighth));
    right: var(--Select_PaddingX);

    color: var(--color-dark-temp);

    transform: translateY(-50%);
    pointer-events: none;

    &.isDisabled {
      opacity: 0.5;
    }
  }
</style>
