<script>
import { reactive, useCssModule } from "vue";
import clsx from "clsx";

import { ChevronDownIcon } from "vue-tabler-icons";

import theme, { SIZES_TYPES } from "choom-theme";

import Icon from "../icon/Icon.vue";

export default {
  name: "Select",
  components: {
    Icon,
    ChevronDownIcon,
  },
  setup(p) {
    let paddingY = theme.spaceThreeQuarters;
    let paddingX = theme.spaceOne;
    let fontSize = theme.fontSizeN;

    if (p.size === "small") {
      fontSize = theme.fontSizeM;
      paddingY = theme.spaceHalf;
      paddingX = theme.spaceHalf;
    }

    if (p.size === "big") {
      fontSize = theme.fontSizeL;
      paddingY = theme.spaceOne;
      paddingX = theme.spaceOneAndHalf;
    }

    const state = reactive({
      _value: p.value,
    });

    const handleChange = (e) => {
      const val = e.target.value;

      p.onChange && p.onChange(val);
    };

    return {
      handleChange,
      stateValue: state._value,

      cssFontSize: fontSize,
      cssPaddingX: paddingX,
      cssPaddingY: paddingY,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, id, name, disabled } = p;

    return (
      <div class={clsx(styles.root, className)}>
        <select
          class={styles.select}
          id={id}
          name={name}
          disabled={disabled}
          onChange={this.handleChange}
          value={this.stateValue}
        >
          {this.$slots.default()}
        </select>
        <span
          class={clsx(styles.icon, {
            [styles.__disabled]: disabled,
          })}
        >
          <Icon size="inherit">
            <ChevronDownIcon />
          </Icon>
        </span>
      </div>
    );
  },
  props: {
    className: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    size: {
      validator(value) {
        return SIZES_TYPES.includes(value);
      },
      default: "regular",
    },
    onChange: {
      type: Function,
    },
  },
};
</script>

<style module lang="scss">
.root {
  position: relative;
  width: 100%;

  font-size: v-bind(cssFontSize);
}

.select {
  appearance: none;

  box-sizing: border-box;

  width: 100%;
  height: calc(
    v-bind(cssPaddingY) * 2 + v-bind(cssFontSize) * var(--line-height-n) + 2 *
      var(--border-size-regular)
  );
  padding: v-bind(cssPaddingY) v-bind(cssPaddingX);

  border: var(--border-size-regular) solid var(--color-dark-temp);
  border-radius: var(--radius-regular);

  color: var(--color-dark-temp);
  background: var(--color-light-temp);

  white-space: nowrap;
  font-family: var(--font-family);
  font-size: inherit;
  line-height: var(--line-height-n);

  cursor: pointer;
  transition: all 0.15s;

  &[disabled] {
    cursor: default;
    opacity: 0.5;
  }

  &:not([disabled]) {
    @media (hover: hover) {
      &:hover {
        filter: brightness(1.2);
      }
    }
  }
}

.icon {
  position: absolute;
  top: calc(50% + var(--space-eighth));
  right: v-bind(cssPaddingX);

  color: var(--color-dark-temp);

  transform: translateY(-50%);
  pointer-events: none;

  &.__disabled {
    opacity: 0.5;
  }
}
</style>
