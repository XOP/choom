<script>
import { h, reactive, computed, watch, useCssModule, Teleport } from "vue";
import clsx from "clsx";

import Button from "../button/Button.vue";
import Heading from "../heading/Heading.vue";
import Icon from "../icon/Icon.vue";

import { XIcon } from "vue-tabler-icons";

const modalRootId = "choom-modal";

export default {
  name: "Modal",
  components: {
    Button,
    Heading,
    Icon,
    Teleport,
  },
  setup(p, { emit }) {
    const state = reactive({ _isOpen: p.isOpen });

    const handleClose = () => {
      state._isOpen = false;
      emit("update:isOpen", false);
    };

    watch(
      () => p.isOpen,
      (isOpen) => {
        state._isOpen = isOpen;
      }
    );

    watch(
      () => state._isOpen,
      (isOpen, prevIsOpen) => {
        if (isOpen && !prevIsOpen) {
          p.onClose && p.onClose();
        }
      }
    );

    return {
      stateIsOpen: computed(() => state._isOpen),
      handleClose,
    };
  },
  render() {
    const p = this.$props;
    const styles = useCssModule();

    const { className, title } = p;

    return h(
      Teleport,
      {
        to: `#${modalRootId}`,
      },
      [
        this.stateIsOpen
          ? h(
              "section",
              {
                className: clsx(className, styles.root),
              },
              [
                h(
                  Button,
                  {
                    className: styles.close,
                    isIcon: true,
                    size: "small",
                    onClick: this.handleClose,
                  },
                  () => (
                    <Icon size="inherit">
                      <XIcon />
                    </Icon>
                  )
                ),
                title && (
                  <Heading level="3" colorInherit mb="2">
                    {title}
                  </Heading>
                ),
                h(
                  "div",
                  {
                    className: styles.content,
                  },
                  this.$slots.default()
                ),
              ]
            )
          : null,
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
    isOpen: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
    },
  },
};
</script>

<style module lang="scss">
.root {
  position: fixed;
  z-index: 3000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: var(--space-one-and-half);

  background: var(--color-light-temp);
  color: var(--color-dark-temp);

  font-family: var(--font-family);
}

.close {
  position: absolute;
  top: var(--space-one-and-half);
  right: var(--space-one);
  z-index: 1000;
}

.content {
  position: relative;
  z-index: 0;
}
</style>
