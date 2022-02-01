<script>
import { useCssModule } from "vue";
import clsx from "clsx";

import {
  DIRECTION_XY_TYPES,
  DISPLAY_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "choom-theme";

export default {
  name: "Space",
  setup(p) {
    const _size = MAP_SPACE[String(p.size)];

    let margin = 0;
    let dim = 0;

    if (p.isBox) {
      dim = _size;
    } else {
      margin = `calc(${_size} / 2)`;
    }

    if (p.dir === "y") {
      return {
        cssDisplay: p.display,
        cssMargin: margin,
        cssHeight: dim,
      };
    }

    if (p.dir === "x") {
      return {
        cssDisplay: p.display,
        cssMargin: margin,
        cssWidth: dim,
      };
    }
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    return (
      <div
        className={clsx(styles.root, p.className, {
          [styles.dirX]: p.dir === "x",
          [styles.dirY]: p.dir === "y",
        })}
      >
        {this.$slots.default && this.$slots.default()}
      </div>
    );
  },
  props: {
    className: {
      type: String,
    },
    display: {
      validator(value) {
        return DISPLAY_TYPES.includes(value);
      },
      default: "block",
    },
    dir: {
      validator(value) {
        return DIRECTION_XY_TYPES.includes(value);
      },
      default: "y",
    },
    size: {
      validator(value) {
        return SPACE_TYPES.includes(value);
      },
      default: "1",
    },
    isBox: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style module lang="scss">
.root {
  display: v-bind(cssDisplay);
  width: auto;
  height: auto;
}

.dirX {
  width: v-bind(cssWidth);
  margin: 0 v-bind(cssMargin);
}

.dirY {
  height: v-bind(cssHeight);
  margin: v-bind(cssMargin) 0;
}
</style>
