<script>
  import theme, { INPUT_TYPES, SIZES_TYPES } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Button");

  /** @props {string} className */
  export let className = "";

  /** @props {string} title */
  export let title = undefined;

  /** @props {boolean} disabled */
  export let disabled = false;

  /** @props {boolean} fluid - button block behaviour */
  export let fluid = false;

  /** @props {boolean} isIcon - if only contains icon */
  export let isIcon = false;

  /** @props {string} type */
  export let type = "button";
  validate("type", type, INPUT_TYPES);

  /** @props {string} size - button size */
  export let size = "regular";
  validate("size", size, SIZES_TYPES);

  /** @props {function} onClick */
  export let onClick = () => null;

  let paddingY = theme.spaceThreeQuarters;
  let paddingX = theme.spaceOneAndHalf;
  let fontSize = theme.fontSizeN;

  if (size === "small") {
    fontSize = theme.fontSizeM;
    paddingY = theme.spaceHalf;
    paddingX = theme.spaceThreeQuarters;
  }

  if (size === "big") {
    fontSize = theme.fontSizeL;
    paddingY = theme.spaceOne;
    paddingX = theme.spaceTwo;
  }

  if (isIcon) {
    paddingX = paddingY;
  }

  export let css = {
    Button_PaddingX: paddingX,
    Button_PaddingY: paddingY,
    Button_FontSize: fontSize,
  };
</script>

<button
  style={propsToVars(css)}
  class={className}
  class:isIcon
  class:fluid
  {title}
  {type}
  {disabled}
  on:click={onClick}
>
  {#if $$slots.iconStart}
    <span class="iconStart">
      <slot name="iconStart" />
    </span>
  {/if}

  <span class:icon={isIcon}>
    <slot />
  </span>

  {#if $$slots.iconEnd}
    <span class="iconEnd">
      <slot name="iconEnd" />
    </span>
  {/if}
</button>

<style lang="scss">
  button {
    appearance: none;

    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    width: auto;

    height: calc(
      var(--Button_PaddingY) * 2 + var(--Button_FontSize) * var(--line-height-n) +
        2 * var(--border-size-regular)
    );

    padding: var(--Button_PaddingY) var(--Button_PaddingX);

    background: var(--color-theme-temp);
    border: var(--border-size-regular) solid var(--color-dark-temp);
    border-radius: var(--radius-regular);

    font-family: var(--font-family);
    font-size: var(--Button_FontSize);
    line-height: var(--line-height-n);
    color: var(--color-dark-temp);

    text-transform: uppercase;
    white-space: nowrap;

    cursor: pointer;
    transition: all 0.15s;
    user-select: none;

    @media (hover: hover) {
      &:hover:not([disabled]) {
        filter: brightness(1.2);
      }
    }

    &:active:not([disabled]) {
      filter: contrast(0.8);
      transform: translateY(1px);
    }

    &:nth-of-type(n + 2) {
      margin-left: var(--space-one);
    }

    &[disabled] {
      cursor: default;
      opacity: 0.5;
    }
  }

  .fluid {
    width: 100%;
  }

  .isIcon {
    width: calc(
      var(--Button_PaddingX) * 2 + var(--Button_FontSize) * var(--line-height-n) +
        2 * var(--border-size-regular)
    );
  }

  .icon {
    display: inline-flex;
    vertical-align: middle;
  }

  .iconStart {
    margin-right: var(--space-three-quarters);
    line-height: 0;
    display: inline-flex;
    vertical-align: middle;
  }

  .iconEnd {
    margin-left: var(--space-three-quarters);
    line-height: 0;
    display: inline-flex;
    vertical-align: middle;
  }
</style>
