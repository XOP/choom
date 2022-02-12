<script>
  import { tick } from "svelte";

  import Button from "../button/Button.svelte";
  import Icon from "../icon/Icon.svelte";

  export const svgPlus = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 4v16m8-8H4" />
</svg>`;

  export const svgMinus = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M20 12H4" />
</svg>`;

  /** @props {string} className */
  export let className = "";

  /** @props {boolean} disabled */
  export let disabled = false;

  /** @props {number} value */
  export let value = 0;

  /** @props {number} min */
  export let min = 0;

  /** @props {number} max */
  export let max = 99;

  /** @props {number} step */
  export let step = 1;

  /** @props {function} onChange */
  export let onChange = () => null;

  export let valueEl = null;

  const minMax = (val) => Math.min(Math.max(val, min), max);

  function handleChange() {
    onChange(valueEl.value, valueEl);
  }

  async function onDecrement() {
    value = minMax(value - step);
    await tick();
    handleChange();
  }

  async function onIncrement() {
    value = minMax(value + step);
    await tick();
    handleChange();
  }
</script>

<div class={className}>
  <span class="item">
    <Button
      className="buttonDecrement"
      isIcon
      size="small"
      {disabled}
      onClick={onDecrement}
    >
      <Icon>{@html svgMinus}</Icon>
    </Button>
  </span>

  <input
    type="input"
    readonly
    {disabled}
    bind:this={valueEl}
    bind:value
    on:change={handleChange}
  />

  <span class="item">
    <Button
      className="buttonIncrement"
      isIcon
      size="small"
      {disabled}
      onClick={onIncrement}
    >
      <Icon>{@html svgPlus}</Icon>
    </Button>
  </span>
</div>

<style lang="scss">
  div {
    display: inline-flex;
    vertical-align: middle;

    flex-direction: row;
    flex-wrap: nowrap;
  }

  .item {
    flex: 0 1 auto;
  }

  .item > :global(.buttonDecrement) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .item > :global(.buttonIncrement) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  input {
    appearance: none;
    box-sizing: content-box;
    position: relative;
    z-index: 1;
    display: inline-flex;
    flex: 0 1 3ch;
    min-width: 3ch;
    max-width: 0;

    height: calc(
      var(--font-size-m) * var(--line-height-n) + var(--space-half) * 2
    );

    padding: 0 var(--space-half);
    margin-left: calc(-1 * var(--border-size-regular));
    margin-right: calc(-1 * var(--border-size-regular));
    border: var(--border-size-regular) solid;

    font-family: var(--font-family);
    font-size: var(--font-size-n);
    text-align: right;
    color: var(--color-dark-temp);
    background: var(--color-light-temp);

    &[disabled] {
      cursor: default;
      opacity: 0.5;
    }
  }
</style>
