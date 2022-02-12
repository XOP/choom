<script>
  import clsx from "clsx";

  import theme, {
    MAP_SPACE,
    HEADING_LEVEL_TYPES,
    SPACE_TYPES,
    TEXT_ALIGN_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("Heading");

  /** @props {string} className */
  export let className = "";

  /** @props {string} as */
  export let as = undefined;

  /** @props {string} level */
  export let level = 2;
  validate("level", level, HEADING_LEVEL_TYPES);

  /** @props {string} align */
  export let align = "center";
  validate("align", align, TEXT_ALIGN_TYPES);

  /** @props {string} mt - margin top */
  export let mt = "0";
  validate("mt", mt, SPACE_TYPES);

  /** @props {string} mb - margin bottom */
  export let mb = "0";
  validate("mb", mb, SPACE_TYPES);

  /** @props {boolean} colorInherit - if should inherit parent color */
  export let colorInherit = false;

  const MAP_HEADING_FONTSIZE = {
    1: theme.fontSize4xl,
    2: theme.fontSize3xl,
    3: theme.fontSize2xl,
    4: theme.fontSizeXl,
    5: theme.fontSizeL,
    6: theme.fontSizeL,
  };

  export let css = {
    Heading_FontSize: MAP_HEADING_FONTSIZE[String(level)],
    Heading_TextAlign: align,
  };

  if (mt !== "0") {
    css.Heading_MarginTop = MAP_SPACE[String(mt)];
  }

  if (mb !== "0") {
    css.Heading_MarginBot = MAP_SPACE[String(mb)];
  }

  export let tag = as || `h${level}`;

  export const p = {
    class: clsx("root", className, {
      colorInherit: colorInherit,
    }),
    style: propsToVars(css),
  };
</script>

<!-- waiting for the alternative: https://github.com/sveltejs/svelte/issues/2324 -->

{#if tag === "h1"}
  <h1 {...p}><slot /></h1>
{:else if tag === "h2"}
  <h2 {...p}><slot /></h2>
{:else if tag === "h3"}
  <h3 {...p}><slot /></h3>
{:else if tag === "h4"}
  <h4 {...p}><slot /></h4>
{:else if tag === "h5"}
  <h5 {...p}><slot /></h5>
{:else if tag === "h6"}
  <h6 {...p}><slot /></h6>
{:else if tag === "span"}
  <span {...p}><slot /></span>
{:else}
  <div {...p}><slot /></div>
{/if}

<style lang="scss">
  .root {
    margin: 0;
    margin-top: var(--Heading_MarginTop);
    margin-bottom: var(--Heading_MarginBot);

    font-family: var(--font-family);
    font-size: var(--Heading_FontSize);
    line-height: var(--line-height-s);
    color: var(--color-light-temp);

    text-align: var(--Heading_TextAlign);
    text-transform: uppercase;
    text-shadow: 0 0.05em 0.05em var(--color-theme-temp);
  }

  .colorInherit {
    color: inherit;
  }
</style>
