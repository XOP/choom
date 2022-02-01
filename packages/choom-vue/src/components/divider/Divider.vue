<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import { MAP_SPACE, SPACE_TYPES } from "choom-theme";

export default {
  name: "Divider",
  setup(p) {
    return {
      cssMarginTop: MAP_SPACE[String(p.mt)],
      cssMarginBot: MAP_SPACE[String(p.mb)],
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    return h("hr", {
      class: clsx(styles.root, p.className),
    });
  },
  props: {
    className: {
      type: String,
    },
    mt: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "1",
    },
    mb: {
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
  height: var(--border-size-regular);
  border: 0 none;

  margin-top: v-bind("cssMarginTop || 0");
  margin-bottom: v-bind("cssMarginBot || 0");

  background: var(--color-dark-temp);
}
</style>
