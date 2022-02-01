<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import {
  MAP_SPACE,
  SPACE_TYPES,
  TEXT_ALIGN_TYPES,
} from "choom-theme";

export default {
  name: "Card",
  setup(p) {
    return {
      cssPadding: MAP_SPACE[String(p.padding)],
      cssTextAlign: p.align,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, title, onClick } = p;

    return h(
      "div",
      {
        class: clsx(styles.root, className),
        title,
        onClick,
      },
      this.$slots.default()
    );
  },
  props: {
    className: {
      type: String,
    },
    title: {
      type: String,
    },
    align: {
      validator(value) {
        return TEXT_ALIGN_TYPES.includes(value);
      },
      default: "left",
    },
    padding: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "1",
    },
    onClick: {
      type: Function,
    },
  },
};
</script>

<style module lang="scss">
.root {
  padding: v-bind("cssPadding || 0");

  background: var(--color-light-temp);
  box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.6);
  border: var(--border-size-regular) solid var(--color-dark-temp);
  border-radius: var(--radius-heavy);

  font-family: var(--font-family);
  font-size: var(--font-size-n);
  line-height: var(--line-height-n);
  color: var(--color-dark-temp);

  text-align: v-bind(cssTextAlign);
}
</style>
