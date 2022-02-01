<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import theme, {
  MAP_SPACE,
  HEADING_LEVEL_TYPES,
  SPACE_TYPES,
  TEXT_ALIGN_TYPES,
} from "choom-theme";

export default {
  name: "Heading",
  setup(p) {
    const MAP_HEADING_FONTSIZE = {
      1: theme.fontSize4xl,
      2: theme.fontSize3xl,
      3: theme.fontSize2xl,
      4: theme.fontSizeXl,
      5: theme.fontSizeL,
      6: theme.fontSizeL,
    };

    return {
      cssMarginTop: MAP_SPACE[String(p.mt)],
      cssMarginBot: MAP_SPACE[String(p.mb)],
      cssFontSize: MAP_HEADING_FONTSIZE[String(p.level)],
      cssTextAlign: p.align,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { as, className, colorInherit, level } = p;

    return h(
      `${as ? as : `h${level}`}`,
      {
        class: clsx(styles.root, className, {
          [styles.colorInherit]: colorInherit,
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
    },
    level: {
      validator(value) {
        return HEADING_LEVEL_TYPES.includes(value);
      },
      default: 2,
    },
    align: {
      validator(value) {
        return TEXT_ALIGN_TYPES.includes(value);
      },
      default: "center",
    },
    mt: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
    },
    mb: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
    },
    colorInherit: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style module lang="scss">
.root {
  margin: 0;
  margin-top: v-bind("cssMarginTop || 0");
  margin-bottom: v-bind("cssMarginBot || 0");

  font-family: var(--font-family);
  font-size: v-bind(cssFontSize);
  line-height: var(--line-height-s);
  color: var(--color-light-temp);

  text-align: v-bind(cssTextAlign);
  text-transform: uppercase;
  text-shadow: 0 0.05em 0.05em var(--color-theme-temp);
}

.colorInherit {
  color: inherit;
}
</style>
