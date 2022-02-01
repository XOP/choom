<script>
import { h, useCssModule } from "vue";
import clsx from "clsx";

import theme, {
  DISPLAY_TYPES,
  ELEVATION_TYPES,
  SIZES_TYPES,
} from "choom-theme";

export default {
  name: "Loader",
  setup(p) {
    let dim = theme.spaceThree;

    if (p.size === "small") {
      dim = theme.spaceOneAndHalf;
    }

    if (p.size === "big") {
      dim = theme.spaceFour;
    }

    let shadow = Number(p.elevation)
      ? "0 0 7px -2px rgba(0, 0, 0, 0.6)"
      : "none";

    return {
      cssDisplay: p.display,
      cssSize: dim,
      cssShadow: shadow,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    return h(
      "div",
      {
        class: clsx(styles.root, p.className),
      },
      [
        h("span", {
          class: styles.element,
        }),
      ]
    );
  },
  props: {
    className: {
      type: String,
    },
    size: {
      validator(value) {
        return SIZES_TYPES.includes(value);
      },
      default: "regular",
    },
    display: {
      validator(value) {
        return DISPLAY_TYPES.includes(value);
      },
      default: "block",
    },
    elevation: {
      validator(value) {
        return ELEVATION_TYPES.includes(value);
      },
      default: 0,
    },
  },
};
</script>

<style module lang="scss">
.root {
  box-sizing: border-box;
  display: v-bind(cssDisplay);
  position: relative;

  width: v-bind(cssSize);
  height: v-bind(cssSize);
}

.element {
  box-sizing: border-box;
  display: block;

  width: 100%;
  height: 100%;

  background: var(--color-theme-temp);
  border-radius: var(--radius-regular);
  border: var(--border-size-regular) solid var(--color-dark-temp);

  box-shadow: v-bind(cssShadow);

  transform: scale(1) rotate(0deg);
  transform-origin: center center;
  animation: rotate 2.6s cubic-bezier(0.15, -0.35, 0.45, 1.25) 0s infinite,
    shape 2.6s cubic-bezier(0.1, 0.15, 0.35, 1.1) 0s infinite;
}

@keyframes rotate {
  0% {
    transform: scale(1) rotate(0deg);
  }

  25% {
    transform: scale(1) rotate(90deg);
  }

  50% {
    transform: scale(1) rotate(180deg);
  }

  75% {
    transform: scale(1) rotate(270deg);
  }

  100% {
    transform: scale(1) rotate(360deg);
  }
}

@keyframes shape {
  0% {
    border-radius: var(--radius-regular);
  }

  12.5% {
    border-radius: 40%;
  }

  25% {
    border-radius: var(--radius-regular);
  }

  37.5% {
    border-radius: 40%;
  }

  50% {
    border-radius: var(--radius-regular);
  }

  67.5% {
    border-radius: 40%;
  }

  75% {
    border-radius: var(--radius-regular);
  }

  87.5% {
    border-radius: 40%;
  }

  100% {
    border-radius: var(--radius-regular);
  }
}
</style>
