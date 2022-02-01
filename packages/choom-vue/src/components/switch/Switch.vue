<script>
import { h, reactive, computed, watch, useCssModule } from "vue";
import clsx from "clsx";

import { nanoid } from "nanoid";

export default {
  name: "Switch",
  setup(p) {
    const state = reactive({
      _checked: p.checked,
    });

    const onToggle = () => {
      if (p.disabled) return;

      state._checked = !state._checked;
    };

    watch(
      () => state._checked,
      (val) => {
        p.onChange && p.onChange(val);
      }
    );

    const id = nanoid();

    return {
      id,
      stateChecked: computed(() => state._checked),
      onToggle,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, disabled, name } = p;

    return h(
      "label",
      {
        class: clsx(styles.root, className, {
          [styles.isChecked]: this.stateChecked,
          [styles.isDisabled]: disabled,
          [styles.isEnabled]: !disabled,
        }),
        htmlFor: this.id,
      },
      [
        h("input", {
          id: this.id,
          class: styles.checkbox,
          name,
          disabled,
          checked: this.stateChecked,
          onChange: this.onToggle,
          readonly: true,
          type: "checkbox",
        }),
        <span class={styles.toggle} />,
      ]
    );
  },
  props: {
    className: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    onChange: {
      type: Function,
    },
  },
};
</script>

<style module lang="scss">
.root {
  box-sizing: content-box;
  display: inline-flex;
  vertical-align: middle;

  position: relative;
  height: var(--space-one-and-half);
  width: var(--space-four);

  border: var(--border-size-regular) solid var(--color-dark-temp);
  border-radius: var(--space-one);

  background: var(--color-light-temp);
  color: var(--color-dark-temp);

  cursor: pointer;
  transition: all 0.15s;
}

.isChecked {
  background: var(--color-theme-temp);
}

.isDisabled {
  cursor: default;
  opacity: 0.5;
}

.isEnabled {
  @media (hover: hover) {
    &:hover {
      filter: brightness(1.2);
    }
  }

  &:active:not([disabled]) {
    transform: scale(0.925);
  }
}

.checkbox {
  width: 0;
  height: 0;

  opacity: 0;
  position: absolute;
  pointer-events: none;
}

.toggle {
  box-sizing: content-box;
  position: absolute;
  top: calc(-1 * var(--border-size-regular) - 1 * var(--space-quarter));
  left: calc(-1 * var(--border-size-regular));

  width: var(--space-two);
  height: var(--space-two);

  border: var(--border-size-regular) solid var(--color-dark-temp);
  border-radius: var(--space-one);

  background: var(--color-light-temp);

  transform: translateX(0);
  transition: transform 0.15s;

  .isChecked & {
    transform: translateX(calc(100% - var(--border-size-regular) * 2));
  }
}
</style>
