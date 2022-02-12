<script>
  import { MAP_SPACE, SPACE_TYPES } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Divider");

  /** @props {string} className */
  export let className = "";

  /** @props {string} mt - margin top */
  export let mt = "1";
  validate("mt", mt, SPACE_TYPES);

  /** @props {string} mb - margin bottom */
  export let mb = "1";
  validate("mb", mb, SPACE_TYPES);

  export let css = {
    Divider_MarginTop: MAP_SPACE[String(mt)],
    Divider_MarginBot: MAP_SPACE[String(mb)],
  };
</script>

<hr class={className} style={propsToVars(css)} />

<style lang="scss">
  hr {
    box-sizing: border-box;
    width: 100%;
    height: var(--border-size-regular);
    border: 0 none;

    margin-top: var(--Divider_MarginTop);
    margin-bottom: var(--Divider_MarginBot);

    background: var(--color-dark-temp);
  }
</style>
