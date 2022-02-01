<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import Flex from "../flex/Flex.vue";

import {
  FLEX_ALIGN_TYPES,
  FLEX_JUSTIFY_TYPES,
  SPACE_TYPES,
} from "choom-theme";

export default {
  name: "Flow",
  components: {
    Flex,
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const {
      as,
      className,
      alignContent,
      justifyContent,
      alignItems,
      space,
      wrap,
    } = p;

    return h(
      Flex,
      {
        as,
        class: clsx(styles.root, className),
        alignContent,
        justifyContent,
        alignItems,
        space,
        wrap,
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
    wrap: {
      type: Boolean,
      default: false,
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
    space: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "1",
    },
  },
};
</script>

<style module lang="scss">
.root {
  flex-direction: row;
}
</style>
