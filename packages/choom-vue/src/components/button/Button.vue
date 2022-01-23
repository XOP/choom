<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import theme, { INPUT_TYPES, SIZES_TYPES } from "choom-theme";

export default {
  name: "Button",
  setup(p) {
    let paddingY = theme.spaceThreeQuarters;
    let paddingX = theme.spaceOneAndHalf;
    let fontSize = theme.fontSizeN;

    if (p.size === "small") {
      fontSize = theme.fontSizeM;
      paddingY = theme.spaceHalf;
      paddingX = theme.spaceThreeQuarters;
    }

    if (p.size === "big") {
      fontSize = theme.fontSizeL;
      paddingY = theme.spaceOne;
      paddingX = theme.spaceTwo;
    }

    if (p.isIcon) {
      paddingX = paddingY;
    }

    return {
      cssPaddingX: paddingX,
      cssPaddingY: paddingY,
      cssFontSize: fontSize,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, title, onClick, type, disabled, fluid, isIcon } = p;

    return h(
      "button",
      {
        class: clsx(styles.root, className, {
          [styles.fluid]: fluid,
          [styles.isIcon]: isIcon,
        }),
        title,
        onClick,
        type,
        disabled,
      },
      [
        this.$slots.iconStart &&
          h(
            "span",
            {
              class: styles.iconStart,
            },
            this.$slots.iconStart()
          ),
        h(
          "span",
          {
            class: clsx({
              [styles.icon]: isIcon,
            }),
          },
          this.$slots.default()
        ),
        this.$slots.iconEnd &&
          h(
            "span",
            {
              class: styles.iconEnd,
            },
            this.$slots.iconEnd()
          ),
      ]
    );
  },
  props: {
    className: {
      type: String,
    },
    title: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    type: {
      validator(value) {
        return INPUT_TYPES.includes(value);
      },
      default: "button",
    },
    size: {
      validator(value) {
        return SIZES_TYPES.includes(value);
      },
      default: "regular",
    },
    onClick: {
      type: Function,
    },
  },
};
</script>

<style module lang="scss">
.root {
  appearance: none;

  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  width: auto;
  height: calc(
    v-bind(cssPaddingY) * 2 + v-bind(cssFontSize) * var(--line-height-n) + 2 *
      var(--border-size-regular)
  );
  padding: v-bind(cssPaddingY) v-bind(cssPaddingX);

  background: var(--color-theme-temp);
  border: var(--border-size-regular) solid var(--color-dark-temp);
  border-radius: var(--radius-regular);

  font-family: var(--font-family);
  font-size: v-bind(cssFontSize);
  line-height: var(--line-height-n);
  color: var(--color-dark-temp);

  text-transform: uppercase;
  white-space: nowrap;

  cursor: pointer;
  transition: all 0.15s;
  user-select: none;

  @media (hover: hover) {
    &:hover:not([disabled]) {
      filter: brightness(1.2);
    }
  }

  &:active:not([disabled]) {
    filter: contrast(0.8);
    transform: translateY(1px);
  }

  &:nth-of-type(n + 2) {
    margin-left: var(--space-one);
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
  }
}

.fluid {
  width: 100%;
}

.isIcon {
  width: calc(
    v-bind(cssPaddingX) * 2 + v-bind(cssFontSize) * var(--line-height-n) + 2 *
      var(--border-size-regular)
  );
}

.icon {
  display: inline-flex;
  vertical-align: middle;
}

.iconStart {
  margin-right: var(--space-three-quarters);
  line-height: 0;
  display: inline-flex;
  vertical-align: middle;
}

.iconEnd {
  margin-left: var(--space-three-quarters);
  line-height: 0;
  display: inline-flex;
  vertical-align: middle;
}
</style>
