<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

export default {
  name: "Chip",
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, title, onClick } = p;

    return h(
      "span",
      {
        class: clsx(styles.root, className, {
          [styles.interactive]: onClick && typeof onClick === "function",
        }),
        title,
        onClick,
      },
      [
        h(
          "span",
          {
            class: styles.children,
          },
          this.$slots.default()
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
    onClick: {
      type: Function,
    },
  },
};
</script>

<style module lang="scss">
$height: "var(--font-size-m) * var(--line-height-s) + 2 * var(--space-half) + 2 * var(--border-size-regular)";

.root {
  display: inline-flex;
  box-sizing: border-box;

  height: calc(unquote($height));
  padding: var(--space-half) var(--space-three-quarters);

  border: var(--border-size-regular) solid;
  border-radius: calc(unquote($height) / 2);

  background: var(--color-theme-temp);

  text-align: center;
  white-space: nowrap;
  color: var(--color-dark-temp);
  line-height: var(--line-height-s);
  font-size: var(--font-size-m);
  font-family: var(--font-family);

  cursor: default;
  user-select: none;

  &:nth-of-type(n + 2) {
    margin-left: var(--space-half);
  }
}

.interactive {
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  &:active {
    filter: contrast(0.8);
    transform: translateY(1px);
  }
}

.children {
  display: block;
  max-width: 45ex;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
