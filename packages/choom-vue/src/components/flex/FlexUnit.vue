<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import {
  FLEX_ALIGNSELF_TYPES,
  FLEX_JUSTIFY_TYPES,
  FLEX_SIZE_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "choom-theme";

export default {
  name: "FlexUnit",
  setup(p) {
    return {
      cssAlign: p.align,
      cssJustify: p.justify,
      cssGrow: p.grow,
      cssShrink: p.shrink,
      cssBasis: p.basis,
      cssMarginT: MAP_SPACE[String(p.mt)],
      cssMarginB: MAP_SPACE[String(p.mb)],
      cssMarginL: MAP_SPACE[String(p.ml)],
      cssMarginR: MAP_SPACE[String(p.mr)],
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { as, className, fluid, stretch } = p;

    return h(
      as,
      {
        class: clsx(styles.root, className, {
          [styles.fluid]: fluid,
          [styles.stretch]: stretch,
        }),
      },
      this.$slots.default && this.$slots.default()
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
    fluid: {
      type: Boolean,
      default: false,
    },
    stretch: {
      type: Boolean,
      default: false,
    },
    align: {
      validator(value) {
        return [...FLEX_ALIGNSELF_TYPES, "initial"].includes(value);
      },
      default: "center",
    },
    justify: {
      validator(value) {
        return FLEX_JUSTIFY_TYPES.includes(value);
      },
      default: "center",
    },
    grow: {
      validator(value) {
        return FLEX_SIZE_TYPES.includes(value);
      },
      default: 1,
    },
    shrink: {
      validator(value) {
        return FLEX_SIZE_TYPES.includes(value);
      },
      default: 1,
    },
    basis: {
      type: String,
      default: "auto",
    },
    mt: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "0",
    },
    mb: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "0",
    },
    ml: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "0",
    },
    mr: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "0",
    },
  },
};
</script>

<style module lang="scss">
.root {
  box-sizing: border-box;
  align-self: v-bind(cssAlign);
  justify-self: v-bind(cssJustify);
  flex-grow: v-bind(cssGrow);
  flex-shrink: v-bind(cssShrink);
  flex-basis: v-bind(cssBasis);

  width: auto;
  height: auto;

  margin-top: v-bind(cssMarginT);
  margin-bottom: v-bind(cssMarginB);
  margin-left: v-bind(cssMarginL);
  margin-right: v-bind(cssMarginR);
}

.fluid {
  width: 100%;
}

.stretch {
  height: 100%;
}
</style>
