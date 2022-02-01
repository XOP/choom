<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import { ICON_SIZES_TYPES, MAP_ICONS } from "choom-theme";

export default {
  name: "Icon",
  setup(p) {
    let sizeVal = "inherit";

    if (p.size !== sizeVal) {
      sizeVal = MAP_ICONS[p.size];
    }

    if (sizeVal === "inherit") {
      sizeVal = "1.125em";
    }

    return {
      cssSize: sizeVal,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { title, className } = p;

    return h(
      "span",
      {
        class: clsx(styles.root, className),
        title
      },
      this.$slots.default()
    );
  },
  props: {
    className: {
      type: String,
    },
    title: {
      title: String,
    },
    size: {
      validator(value) {
        return ICON_SIZES_TYPES.includes(value);
      },
      default: "regular",
    },
  },
};
</script>

<style module lang="scss">
$size: v-bind(cssSize);

.root {
  display: inline-flex;
  box-sizing: border-box;
  height: $size;
  width: $size;

  & > svg,
  & > * > svg {
    height: $size;
    width: $size;
  }
}
</style>
