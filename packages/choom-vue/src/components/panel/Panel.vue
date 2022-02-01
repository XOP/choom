<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import {
  MAP_SPACE,
  PLACEMENT_Y_TYPES,
  POSITION_TYPES,
  SPACE_TYPES,
  TEXT_ALIGN_TYPES,
} from "choom-theme";

export default {
  name: "Panel",
  setup(p) {
    let shadow = "";

    if (p.placement === "top") {
      shadow = "0 2px 7px -2px rgba(0,0,0,.6), 0 1px 18px -4px rgba(0,0,0,.3)";
    }

    if (p.placement === "bottom") {
      shadow =
        "0 -2px 7px -3px rgba(0,0,0,.6), 0 -1px 18px -6px rgba(0,0,0,.3)";
    }

    return {
      cssPosition: p.position,
      cssTop: p.placement === "top" ? "0" : "auto",
      cssBottom: p.placement === "bottom" ? "0" : "auto",
      cssPadding: MAP_SPACE[String(p.padding)],
      cssShadow: shadow,
      cssAlignText: p.align,
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
      default: "section",
    },
    padding: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "2",
    },
    align: {
      validator(value) {
        return TEXT_ALIGN_TYPES.includes(value);
      },
      default: "left",
    },
    position: {
      validator(value) {
        return POSITION_TYPES.includes(value);
      },
      default: "fixed",
    },
    placement: {
      validator(value) {
        return PLACEMENT_Y_TYPES.includes(value);
      },
      default: "top",
    },
  },
};
</script>

<style module lang="scss">
.root {
  position: v-bind(cssPosition);
  left: 0;
  right: 0;
  top: v-bind(cssTop);
  bottom: v-bind(cssBottom);

  z-index: 2000;
  padding: v-bind(cssPadding);
  border: var(--border-size-regular) solid var(--color-dark-temp);
  border-radius: var(--radius-regular);

  color: var(--color-dark-temp);
  font-family: var(--font-family);
  font-size: var(--font-size-n);
  text-align: v-bind(cssAlignText);

  background: var(--color-light-temp);
  box-shadow: v-bind(cssShadow);
}
</style>
