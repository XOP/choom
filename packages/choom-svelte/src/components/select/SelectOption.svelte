<script>
  import { Validator } from "../../utils/validator";

  const { required } = new Validator("SelectOption");

  /** @props {string} value */
  export let value;
  required("value", value);

  /** @props {boolean} disabled */
  export let disabled = false;
</script>

<option {value} {disabled}>
  <slot />
</option>
