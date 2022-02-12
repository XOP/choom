<script>
  import { ICON_SIZES_TYPES, MAP_ICONS } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Icon");

  /** @props {string} className */
  export let className = "";

  /** @props {string} title */
  export let title = undefined;

  /** @props {string} size */
  export let size = "regular";
  validate("size", size, ICON_SIZES_TYPES);

  let sizeVal = "inherit";

  if (size !== sizeVal) {
    sizeVal = MAP_ICONS[size];
  }

  if (sizeVal === "inherit") {
    sizeVal = "1.125em";
  }

  export let css = {
    Icon_Size: sizeVal,
  };
</script>

<span style={propsToVars(css)} class={className} {title}>
  <slot />
</span>

<style lang="scss">
  $size: var(--Icon_Size);

  span {
    display: inline-flex;
    box-sizing: border-box;
    height: $size;
    width: $size;

    & > :global(svg),
    & > :global(* > svg) {
      height: $size;
      width: $size;
    }
  }
</style>
