<script>
  import { nanoid } from 'nanoid/non-secure';

  /** @props {string} className */
  export let className = '';

  /** @props {boolean} disabled */
  export let disabled = false;

  /** @props {boolean} checked */
  export let checked = false;

  /** @props {string} name */
  export let name = undefined;

  /** @props {function} onChange */
  export let onChange = () => null;

  export const id = nanoid();

  function handleChange(e) {
    onChange(checked, e.target);
  }
</script>

<label
  class={className}
  class:isDisabled={disabled}
  class:isEnabled={!disabled}
  class:isChecked={checked}
  for={id}
>
  <input
    type="checkbox"
    readonly
    {id}
    {name}
    {disabled}
    bind:checked
    on:change={handleChange}
  />
  <span class="toggle" />
</label>

<style lang="scss">
  label {
    box-sizing: content-box;
    display: inline-flex;
    vertical-align: middle;

    position: relative;
    height: var(--space-one-and-half);
    width: var(--space-four);

    border: var(--border-size-regular) solid var(--color-dark-temp);
    border-radius: var(--space-one);

    background: var(--color-light-temp);
    color: var(--color-dark-temp);

    cursor: pointer;
    transition: all 0.15s;
  }

  .isChecked {
    background: var(--color-theme-temp);
  }

  .isDisabled {
    cursor: default;
    opacity: 0.5;
  }

  .isEnabled {
    @media (hover: hover) {
      &:hover {
        filter: brightness(1.2);
      }
    }

    &:active:not([disabled]) {
      transform: scale(0.925);
    }
  }

  input {
    width: 0;
    height: 0;

    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  input + span {
    box-sizing: content-box;
    position: absolute;
    top: calc(-1 * var(--border-size-regular) - 1 * var(--space-quarter));
    left: calc(-1 * var(--border-size-regular));

    width: var(--space-two);
    height: var(--space-two);

    border: var(--border-size-regular) solid var(--color-dark-temp);
    border-radius: var(--space-one);

    background: var(--color-light-temp);

    transform: translateX(0);
    transition: transform 0.15s;

    .isChecked & {
      transform: translateX(calc(100% - var(--border-size-regular) * 2));
    }
  }
</style>
