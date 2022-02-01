<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import {
  FLEX_ALIGN_TYPES,
  FLEX_DIR_TYPES,
  FLEX_JUSTIFY_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "choom-theme";

export default {
  name: "Flex",
  setup(p) {
    return {
      cssGap: MAP_SPACE[String(p.space)],
      cssDir: p.dir,
      cssAlignContent: p.alignContent,
      cssJustifyContent: p.justifyContent,
      cssAlignItems: p.alignItems,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { as, className, wrap, fluid, stretch } = p;

    return h(
      as,
      {
        class: clsx(styles.root, className, {
          [styles.wrap]: wrap,
          [styles.fluid]: fluid,
          [styles.stretch]: stretch,
        }),
      },
      this.$slots.default()
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
    wrap: {
      type: Boolean,
      default: false,
    },
    dir: {
      validator(value) {
        return FLEX_DIR_TYPES.includes(value);
      },
      default: "row",
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
      default: "center",
    },
    alignItems: {
      validator(value) {
        return [...FLEX_ALIGN_TYPES, "initial"].includes(value);
      },
      default: "initial",
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
  box-sizing: border-box;
  display: flex;
  align-content: v-bind(cssAlignContent);
  justify-content: v-bind(cssJustifyContent);
  align-items: v-bind(cssAlignItems);
  flex-wrap: nowrap;
  flex-direction: v-bind(cssDir);
  width: auto;
  height: auto;
  gap: v-bind(cssGap);
}

.wrap {
  flex-wrap: wrap;
}

.fluid {
  width: 100%;
}

.stretch {
  height: 100%;
}
</style>
