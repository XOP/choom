<script>
  import { onMount, afterUpdate } from "svelte";

  import Button from "../button/Button.svelte";
  import Heading from "../heading/Heading.svelte";
  import Icon from "../icon/Icon.svelte";

  const modalRootId = "choom-modal";

  export const svgX = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M6 18L18 6M6 6l12 12" />
</svg>`;

  /** @props {string} className */
  export let className = "";

  /** @props {string} title */
  export let title = "";

  /** @props {boolean} isOpen */
  export let isOpen = false;

  /** @props {function} onClose */
  export let onClose = undefined;

  let root = null;
  let modalEl = null;

  onMount(() => {
    root = document.getElementById(modalRootId);

    if (isOpen) {
      root.appendChild(modalEl);
    }
  });

  afterUpdate(() => {
    if (isOpen) {
      root.appendChild(modalEl);
    } else {
      if (modalEl) {
        root.removeChild(modalEl);
      }
    }
  });

  function handleClose() {
    isOpen = false;

    onClose && onClose();
  }
</script>

{#if isOpen}
  <section class={className} bind:this={modalEl}>
    <Button className="close" size="small" isIcon onClick={handleClose}>
      <Icon size="inherit">{@html svgX}</Icon>
    </Button>

    {#if title}
      <Heading level="3" colorInherit mb="2">{title}</Heading>
    {/if}

    <div>
      <slot />
    </div>
  </section>
{/if}

<style lang="scss">
  section {
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

  section > :global(.close) {
    position: absolute;
    top: var(--space-one-and-half);
    right: var(--space-one);
    z-index: 1000;
  }

  section > div {
    position: relative;
    z-index: 0;
  }
</style>
