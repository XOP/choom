<script>
import { h, readonly, useCssModule } from "vue";
import clsx from "clsx";

import Icon from "../icon/Icon.vue";

import { PhotoIcon } from "vue-tabler-icons";

import { ASPECT_RATIO_TYPES, IMG_FIT_TYPES } from "choom-theme";

const getUnit = (strValue) => strValue.match(/[a-z, %]+$/)[0] || "";
const parseAspectRatio = (strValue) => {
  const [wx, hx] = strValue.split(":");

  return [Number(wx), Number(hx)];
};

export default {
  name: "Picture",
  components: {
    Icon,
    PhotoIcon,
  },
  setup(p) {
    let widthValue = "";
    let heightValue = "";

    const state = readonly({
      width: p.width,
      height: p.height
    });

    if (p.width !== undefined) widthValue = state.width;
    if (p.height !== undefined) heightValue = state.height;

    if (p.aspectRatio) {
      const [wx, hx] = parseAspectRatio(p.aspectRatio);

      if (widthValue && heightValue === "auto") {
        let unit = getUnit(widthValue);

        heightValue = (parseInt(widthValue, 10) / wx) * hx;
        heightValue = `${Math.round(heightValue)}${unit}`;
      } else if (heightValue && widthValue === "auto") {
        let unit = getUnit(heightValue);

        widthValue = (parseInt(heightValue, 10) / hx) * wx;
        widthValue = `${Math.round(widthValue)}${unit}`;
      }
    }

    return {
      cssWidth: widthValue,
      cssHeight: heightValue,
      cssFill: p.fill,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, src, alt } = p;

    const img = h("img", {
      class: styles.img,
      alt,
      src,
    });

    const ph = h(
      "span",
      {
        class: styles.ph,
      },
      <Icon>
        <PhotoIcon />
      </Icon>
    );

    return h(
      "figure",
      {
        class: clsx(styles.root, className),
      },
      src ? img : ph
    );
  },
  props: {
    className: {
      type: String,
    },
    alt: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: "auto",
    },
    height: {
      type: [String, Number],
      default: "auto",
    },
    aspectRatio: {
      validator(value) {
        return ASPECT_RATIO_TYPES.includes(value);
      },
      default: "",
    },
    fill: {
      validator(value) {
        return IMG_FIT_TYPES.includes(value);
      },
      default: "cover",
    },
  },
};
</script>

<style module lang="scss">
.root {
  display: inline-flex;
  box-sizing: border-box;

  width: v-bind("cssWidth || auto");
  height: v-bind("cssHeight || auto");
  margin: 0;

  border: var(--border-size-regular) solid var(--color-light-temp);
  border-radius: var(--radius-regular);
  overflow: hidden;

  background: var(--color-light-temp);

  line-height: 0;
  font-size: 0;

  cursor: default;
  user-select: none;
}

.img {
  object-fit: v-bind(cssFill);
  width: 100%;
  height: 100%;
}

.ph {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0.25;
  color: var(--color-dark-temp);
}
</style>
