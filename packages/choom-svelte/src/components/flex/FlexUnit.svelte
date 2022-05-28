<script>
  import clsx from "clsx";

  import {
    FLEX_ALIGNSELF_TYPES,
    FLEX_JUSTIFY_TYPES,
    FLEX_SIZE_TYPES,
    MAP_SPACE,
    SPACE_TYPES,
  } from "choom-theme";

  import { propsToVars } from "../../utils/propsToVars";
  import { Validator } from "../../utils/validator";

  const { validate } = new Validator("FlexUnit");

  /** @props {string} className */
  export let className = "";

  /** @props {string} as */
  export let as = "div";

  /** @props {boolean} fluid */
  export let fluid = false;

  /** @props {boolean} stretch */
  export let stretch = false;

  /** @props {string} align */
  export let align = "center";
  validate("align", align, [...FLEX_ALIGNSELF_TYPES, "initial"]);

  /** @props {string} justify */
  export let justify = "center";
  validate("justify", justify, FLEX_JUSTIFY_TYPES);

  /** @props {string, number} grow */
  export let grow = 1;
  validate("grow", grow, FLEX_SIZE_TYPES);

  /** @props {string, number} grow */
  export let shrink = 1;
  validate("shrink", shrink, FLEX_SIZE_TYPES);

  /** @props {string} basis */
  export let basis = "auto";

  /** @props {string} mt */
  export let mt = "0";
  validate("mt", mt, SPACE_TYPES);

  /** @props {string} mb */
  export let mb = "0";
  validate("mb", mb, SPACE_TYPES);

  /** @props {string} ml */
  export let ml = "0";
  validate("ml", ml, SPACE_TYPES);

  /** @props {string} mr */
  export let mr = "0";
  validate("mr", mr, SPACE_TYPES);

  export let css = {
    Flex_Align: align,
    Flex_Justify: justify,
    Flex_Grow: grow,
    Flex_Shrink: shrink,
    Flex_Basis: basis,
  };

  const _mt = MAP_SPACE[String(mt)];
  const _mb = MAP_SPACE[String(mb)];
  const _ml = MAP_SPACE[String(ml)];
  const _mr = MAP_SPACE[String(mr)];

  if (_mt) {
    css.Flex_MarginT = _mt;
  }

  if (_mb) {
    css.Flex_MarginB = _mb;
  }

  if (_ml) {
    css.Flex_MarginL = _ml;
  }

  if (_mr) {
    css.Flex_MarginR = _mr;
  }

  export const p = {
    class: clsx("root", className, {
      fluid,
      stretch,
    }),
    style: propsToVars(css),
  };
</script>

{#if as === "section"}
  <section {...p}><slot /></section>
{:else if as === "article"}
  <article {...p}><slot /></article>
{:else if as === "blockquote"}
  <blockquote {...p}><slot /></blockquote>
{:else if as === "nav"}
  <nav {...p}><slot /></nav>
{:else if as === "ul"}
  <ul {...p}><slot /></ul>
{:else if as === "ol"}
  <ol {...p}><slot /></ol>
{:else if as === "li"}
  <li {...p}><slot /></li>
{:else if as === "span"}
  <span {...p}><slot /></span>
{:else if as === "strong"}
  <strong {...p}><slot /></strong>
{:else if as === "em"}
  <em {...p}><slot /></em>
{:else if as === "b"}
  <b {...p}><slot /></b>
{:else if as === "i"}
  <i {...p}><slot /></i>
{:else}
  <div {...p}><slot /></div>
{/if}

<style lang="scss">
.root {
  box-sizing: border-box;
  align-self: var(--Flex_Align);
  justify-self: var(--Flex_Justify);
  flex-grow: var(--Flex_Grow);
  flex-shrink: var(--Flex_Shrink);
  flex-basis: var(--Flex_Basis);

  width: auto;
  height: auto;

  margin-top: var(--Flex_MarginT, 0);
  margin-bottom: var(--Flex_MarginB, 0);
  margin-left: var(--Flex_MarginL, 0);
  margin-right: var(--Flex_MarginR, 0);
}

.fluid {
  width: 100%;
}

.stretch {
  height: 100%;
}
</style>
