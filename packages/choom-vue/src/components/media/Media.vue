<script>
import { h, useCssModule } from "vue";

import Flow from "../flow/Flow.vue";
import FlexUnit from "../flex/FlexUnit.vue";

import { FLEX_ALIGN_TYPES, SPACE_TYPES } from "choom-theme";

export default {
  name: "Media",
  components: {
    Flow,
    FlexUnit,
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { as, asUnit, className, alignContent, alignItems, space } = p;

    return h(
      Flow,
      {
        as,
        class: className,
        alignContent,
        alignItems,
        justifyContent: "start",
        space,
        wrap: false,
      },
      () => [
        this.$slots.start && (
          <FlexUnit
            as={asUnit}
            grow="0"
            shrink="1"
            align="initial"
            className={styles.start}
          >
            {this.$slots.start()}
          </FlexUnit>
        ),
        this.$slots.default && (
          <FlexUnit
            as={asUnit}
            grow="1"
            shrink="1"
            align="initial"
            className={styles.main}
          >
            {this.$slots.default()}
          </FlexUnit>
        ),
        this.$slots.end && (
          <FlexUnit
            as={asUnit}
            grow="0"
            shrink="1"
            align="initial"
            className={styles.end}
          >
            {this.$slots.end()}
          </FlexUnit>
        ),
      ]
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
    asUnit: {
      type: String,
      default: "div",
    },
    alignContent: {
      validator(value) {
        return [...FLEX_ALIGN_TYPES, "initial"].includes(value);
      },
      default: "center",
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
.start,
.main,
.end {
  display: inline-flex;
}
</style>
