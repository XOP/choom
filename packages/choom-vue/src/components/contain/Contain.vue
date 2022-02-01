<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import { DIRECTION_TYPES, MAP_SPACE, SPACE_TYPES } from "choom-theme";

export default {
  name: "Contain",
  setup(p) {
    const spaceValue = MAP_SPACE[String(p.space)];

    let padT = 0;
    let padB = 0;
    let padL = 0;
    let padR = 0;

    switch (p.dir) {
      case "xy":
        padT = padB = padL = padR = spaceValue;
        break;

      case "x":
        padL = padR = spaceValue;
        break;

      case "y":
        padT = padB = spaceValue;
        break;

      case "top":
        padT = spaceValue;
        break;

      case "bottom":
        padB = spaceValue;
        break;

      case "left":
        padL = spaceValue;
        break;

      case "right":
        padR = spaceValue;
        break;
    }

    return {
      cssPaddingT: padT,
      cssPaddingB: padB,
      cssPaddingL: padL,
      cssPaddingR: padR,
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
        return DIRECTION_TYPES.includes(value);
      },
      default: "xy",
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
  padding-top: v-bind(cssPaddingT);
  padding-bottom: v-bind(cssPaddingB);
  padding-left: v-bind(cssPaddingL);
  padding-right: v-bind(cssPaddingR);
}
</style>
