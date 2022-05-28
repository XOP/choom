<script>
  import clsx from "clsx";

  import {
    FLEX_ALIGN_TYPES,
    FLEX_DIR_TYPES,
    FLEX_JUSTIFY_TYPES,
    MAP_SPACE,
    SPACE_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Flex");

  /** @props {string} className */
  export let className = "";

  /** @props {string} as */
  export let as = "div";

  /** @props {boolean} fluid */
  export let fluid = false;

  /** @props {boolean} stretch */
  export let stretch = false;

  /** @props {boolean} wrap */
  export let wrap = false;

  /** @props {string} dir */
  export let dir = "row";
  validate("dir", dir, FLEX_DIR_TYPES);

  /** @props {string} alignContent */
  export let alignContent = "center";
  validate("alignContent", alignContent, [...FLEX_ALIGN_TYPES, "initial"]);

  /** @props {string} justifyContent */
  export let justifyContent = "center";
  validate("justifyContent", justifyContent, [
    ...FLEX_JUSTIFY_TYPES,
    "initial",
  ]);

  /** @props {string} alignItems */
  export let alignItems = "initial";
  validate("alignItems", alignItems, [...FLEX_ALIGN_TYPES, "initial"]);

  /** @props {string} space */
  export let space = "1";
  validate("space", space, SPACE_TYPES);

  export let css = {
    Flex_Gap: MAP_SPACE[String(space)],
    Flex_Dir: dir,
    Flex_AlignContent: alignContent,
    Flex_JustifyContent: justifyContent,
    Flex_AlignItems: alignItems,
  };

  export const p = {
    class: clsx("root", className, {
      wrap,
      fluid,
      stretch,
    }),
    style: propsToVars(css),
  };
</script>

{#if as === "section"}
  <section {...p}><slot /></section>
{:else if as === "header"}
  <header {...p}><slot /></header>
{:else if as === "footer"}
  <footer {...p}><slot /></footer>
{:else if as === "main"}
  <main {...p}><slot /></main>
{:else if as === "article"}
  <article {...p}><slot /></article>
{:else if as === "aside"}
  <aside {...p}><slot /></aside>
{:else if as === "blockquote"}
  <blockquote {...p}><slot /></blockquote>
{:else if as === "nav"}
  <nav {...p}><slot /></nav>
{:else if as === "ul"}
  <ul {...p}><slot /></ul>
{:else if as === "ol"}
  <ol {...p}><slot /></ol>
{:else}
  <div {...p}><slot /></div>
{/if}

<style lang="scss">
  .root {
    box-sizing: border-box;
    display: flex;
    align-content: var(--Flex_AlignContent);
    justify-content: var(--Flex_JustifyContent);
    align-items: var(--Flex_AlignItems);
    flex-wrap: nowrap;
    flex-direction: var(--Flex_Dir);
    width: auto;
    height: auto;
    gap: var(--Flex_Gap);
  }

  .wrap {
    flex-wrap: wrap;
  }

  .fluid {
    width: 100%;
  }

  .stretch {
    height: 100%;
  }
</style>
