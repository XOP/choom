<script>
import { h, reactive, computed, watch, useCssModule } from "vue";
import clsx from "clsx";

import Button from "../button/Button.vue";
import Icon from "../icon/Icon.vue";

import { MinusIcon, PlusIcon } from "vue-tabler-icons";

export default {
  name: "Numeric",
  components: {
    Button,
    Icon,
    MinusIcon,
    PlusIcon,
  },
  setup(p) {
    const minMax = (val) => Math.min(Math.max(val, p.min), p.max);

    const state = reactive({
      _value: p.value,
    });

    const onIncrement = () => {
      state._value = minMax(state._value + p.step);
    };

    const onDecrement = () => {
      state._value = minMax(state._value - p.step);
    };

    watch(
      () => state._value,
      (val) => {
        p.onChange && p.onChange(val);
      }
    );

    return {
      onIncrement,
      onDecrement,
      stateValue: computed(() => state._value),
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, disabled } = p;

    return h(
      "div",
      {
        class: clsx(styles.root, className),
      },
      [
        h(
          "span",
          {
            class: styles.item,
          },
          [
            h(
              Button,
              {
                className: styles.buttonDecrement,
                isIcon: true,
                size: "small",
                onClick: this.onDecrement,
                disabled,
              },
              () => (
                <Icon size="inherit">
                  <MinusIcon />
                </Icon>
              )
            ),
          ]
        ),
        h("input", {
          class: styles.input,
          value: this.stateValue,
          disabled,
          readonly: true,
          type: "input",
        }),
        h(
          "span",
          {
            class: styles.item,
          },
          [
            h(
              Button,
              {
                className: styles.buttonIncrement,
                isIcon: true,
                size: "small",
                onClick: this.onIncrement,
                disabled,
              },
              () => (
                <Icon size="inherit">
                  <PlusIcon />
                </Icon>
              )
            ),
          ]
        ),
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
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 99,
    },
    step: {
      type: Number,
      default: 1,
    },
    onChange: {
      type: Function,
    },
  },
};
</script>

<style module lang="scss">
.root {
  display: inline-flex;
  vertical-align: middle;

  flex-direction: row;
  flex-wrap: nowrap;
}

.item {
  flex: 0 1 auto;
}

.buttonDecrement {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.buttonIncrement {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input {
  appearance: none;
  box-sizing: content-box;
  position: relative;
  z-index: 1;
  display: inline-flex;
  flex: 0 1 3ch;
  min-width: 3ch;
  max-width: 0;

  height: calc(
    var(--font-size-m) * var(--line-height-n) + var(--space-half) * 2
  );

  padding: 0 var(--space-half);
  margin-left: calc(-1 * var(--border-size-regular));
  margin-right: calc(-1 * var(--border-size-regular));
  border: var(--border-size-regular) solid;

  font-family: var(--font-family);
  font-size: var(--font-size-n);
  text-align: right;
  color: var(--color-dark-temp);
  background: var(--color-light-temp);

  &[disabled] {
    cursor: default;
    opacity: 0.5;
  }
}
</style>
