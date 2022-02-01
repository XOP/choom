<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import {
  DIRECTION_XY_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "choom-theme";

export default {
  name: "Stack",
  setup(p) {
    const spaceValue = MAP_SPACE[String(p.space)];

    let marginL = spaceValue;
    let marginT = spaceValue;

    if (p.dir === "y") {
      marginL = 0;
    }

    if (p.dir === "x") {
      marginT = 0;
    }

    return {
      cssMarginT: marginT,
      cssMarginL: marginL,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { as, className } = p;

    return h(
      as,
      {
        class: clsx(styles.root, className),
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
    dir: {
      validator(value) {
        return DIRECTION_XY_TYPES.includes(value);
      },
      default: "y",
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
  width: 100%;

  & > *:not(:first-child) {
    margin-top: v-bind(cssMarginT);
    margin-left: v-bind(cssMarginL);
  }
}
</style>
