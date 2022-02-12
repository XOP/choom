<script>
  import { ASPECT_RATIO_TYPES, IMG_FIT_TYPES } from "choom-theme";

  import Icon from "../icon/Icon.svelte";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate, required } = new Validator("Picture");

  export const svgPlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>`;

  /** @props {string} className */
  export let className = "";

  /** @props {string} alt */
  export let alt = "";

  /** @props {string} src */
  export let src;
  required("src", src);

  /** @props {string, number} width */
  export let width = "auto";

  /** @props {string, number} height */
  export let height = "auto";

  /** @props {string} aspectRatio */
  export let aspectRatio = "";
  validate("aspectRatio", aspectRatio, ASPECT_RATIO_TYPES);

  /** @props {string} fill */
  export let fill = "cover";
  validate("fill", fill, IMG_FIT_TYPES);

  const getUnit = (strValue) => strValue.match(/[a-z, %]+$/)[0] || "";
  const parseAspectRatio = (strValue) => {
    const [wx, hx] = strValue.split(":");

    return [Number(wx), Number(hx)];
  };

  let widthValue = width ?? "";
  let heightValue = height ?? "";

  if (aspectRatio) {
    const [wx, hx] = parseAspectRatio(aspectRatio);

    if (widthValue && heightValue === "auto") {
      let unit = getUnit(widthValue);

      heightValue = (parseInt(widthValue, 10) / wx) * hx;
      heightValue = `${Math.round(heightValue)}${unit}`;
    } else if (heightValue && widthValue === "auto") {
      let unit = getUnit(heightValue);

      widthValue = (parseInt(heightValue, 10) / hx) * wx;
      widthValue = `${Math.round(widthValue)}${unit}`;
    }
  }

  export let css = {
    Picture_Width: widthValue,
    Picture_Height: heightValue,
    Picture_Fill: fill,
  };
</script>

<figure style={propsToVars(css)} class={className}>
  {#if src}
    <img {src} {alt} />
  {:else}
    <span><Icon>{@html svgPlaceholder}</Icon></span>
  {/if}
</figure>

<style lang="scss">
  figure {
    display: inline-flex;
    box-sizing: border-box;

    width: var(--Picture_Width);
    height: var(--Picture_Height);
    margin: 0;

    border: var(--border-size-regular) solid var(--color-light-temp);
    border-radius: var(--radius-regular);
    overflow: hidden;

    background: var(--color-light-temp);

    line-height: 0;
    font-size: 0;

    cursor: default;
    user-select: none;
  }

  img {
    object-fit: var(--Picture_Fill);
    width: 100%;
    height: 100%;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    opacity: 0.25;
    color: var(--color-dark-temp);
  }
</style>
