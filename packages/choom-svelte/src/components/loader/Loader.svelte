<script>
  import theme, {
    DISPLAY_TYPES,
    ELEVATION_TYPES,
    SIZES_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Loader");

  /** @props {string} className */
  export let className = "";

  /** @props {string} padding */
  export let size = "regular";
  validate("size", size, SIZES_TYPES);

  /** @props {string} padding */
  export let display = "block";
  validate("display", display, DISPLAY_TYPES);

  /** @props {string} padding */
  export let elevation = 0;
  validate("elevation", elevation, ELEVATION_TYPES);

  let dim = theme.spaceThree;

  if (size === "small") {
    dim = theme.spaceOneAndHalf;
  }

  if (size === "big") {
    dim = theme.spaceFour;
  }

  let shadow = Number(elevation) ? "0 0 7px -2px rgba(0, 0, 0, 0.6)" : "none";

  export let css = {
    Loader_Display: display,
    Loader_Size: dim,
    Loader_Shadow: shadow,
  };
</script>

<div style={propsToVars(css)} class={className}>
  <span>
    <slot />
  </span>
</div>

<style lang="scss">
  div {
    box-sizing: border-box;
    display: var(--Loader_Display);
    position: relative;

    width: var(--Loader_Size);
    height: var(--Loader_Size);
  }

  span {
    box-sizing: border-box;
    display: block;

    width: 100%;
    height: 100%;

    background: var(--color-theme-temp);
    border-radius: var(--radius-regular);
    border: var(--border-size-regular) solid var(--color-dark-temp);

    box-shadow: var(--Loader_Shadow);

    transform: scale(1) rotate(0deg);
    transform-origin: center center;
    animation: rotate 2.6s cubic-bezier(0.15, -0.35, 0.45, 1.25) 0s infinite,
      shape 2.6s cubic-bezier(0.1, 0.15, 0.35, 1.1) 0s infinite;
  }

  @keyframes rotate {
    0% {
      transform: scale(1) rotate(0deg);
    }

    25% {
      transform: scale(1) rotate(90deg);
    }

    50% {
      transform: scale(1) rotate(180deg);
    }

    75% {
      transform: scale(1) rotate(270deg);
    }

    100% {
      transform: scale(1) rotate(360deg);
    }
  }

  @keyframes shape {
    0% {
      border-radius: var(--radius-regular);
    }

    12.5% {
      border-radius: 40%;
    }

    25% {
      border-radius: var(--radius-regular);
    }

    37.5% {
      border-radius: 40%;
    }

    50% {
      border-radius: var(--radius-regular);
    }

    67.5% {
      border-radius: 40%;
    }

    75% {
      border-radius: var(--radius-regular);
    }

    87.5% {
      border-radius: 40%;
    }

    100% {
      border-radius: var(--radius-regular);
    }
  }
</style>
