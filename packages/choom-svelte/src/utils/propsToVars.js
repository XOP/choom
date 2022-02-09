export function propsToVars(css) {
  return Object.entries(css)
    .map(([name, val]) => `--${name}: ${val}`)
    .join(";");
}
