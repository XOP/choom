<script>
  import clsx from "clsx";

  /** @props {string} className */
  export let className = "";

  /** @props {string} title */
  export let title = undefined;

  /** @props {function} onClick */
  export let onClick = undefined;
</script>

<span
  class={clsx("root", className)}
  class:interactive={onClick && typeof onClick === "function"}
  {title}
  on:click={onClick}
>
  <span>
    <slot />
  </span>
</span>

<style lang="scss">
  $height: "var(--font-size-m) * var(--line-height-s) + 2 * var(--space-half) + 2 * var(--border-size-regular)";

  .root {
    display: inline-flex;
    box-sizing: border-box;

    height: calc(unquote($height));
    padding: var(--space-half) var(--space-three-quarters);

    border: var(--border-size-regular) solid;
    border-radius: calc(unquote($height) / 2);

    background: var(--color-theme-temp);

    text-align: center;
    white-space: nowrap;
    color: var(--color-dark-temp);
    line-height: var(--line-height-s);
    font-size: var(--font-size-m);
    font-family: var(--font-family);

    cursor: default;
    user-select: none;

    &:nth-of-type(n + 2) {
      margin-left: var(--space-half);
    }
  }

  .interactive {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        filter: brightness(1.2);
      }
    }

    &:active {
      filter: contrast(0.8);
      transform: translateY(1px);
    }
  }

  .root > span {
    display: block;
    max-width: 45ex;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
