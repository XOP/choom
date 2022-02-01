<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import Flex from "../flex/Flex.vue";

import { FLEX_ALIGN_TYPES, FLEX_JUSTIFY_TYPES } from "choom-theme";

export default {
  name: "Support",
  components: {
    Flex,
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { as, className, alignContent, justifyContent, alignItems } = p;

    return h(
      Flex,
      {
        as,
        class: clsx(styles.root, className),
        dir: "column",
        alignContent,
        justifyContent,
        alignItems,
        space: "0",
        wrap: false,
      },
      () => this.$slots.default()
    );
  },
  props: {
    className: {
      type: String,
    },
    as: {
      type: String,
      default: "div",
    },
    alignContent: {
      validator(value) {
        return [...FLEX_ALIGN_TYPES, "initial"].includes(value);
      },
      default: "center",
    },
    justifyContent: {
      validator(value) {
        return [...FLEX_JUSTIFY_TYPES, "initial"].includes(value);
      },
      default: "start",
    },
    alignItems: {
      validator(value) {
        return [...FLEX_ALIGN_TYPES, "initial"].includes(value);
      },
      default: "center",
    },
  },
};
</script>

<style module lang="scss">
.root {
  flex-grow: 1;
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  width: 100%;
}
</style>
