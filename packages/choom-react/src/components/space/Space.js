import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import {
  DIRECTION_XY_TYPES,
  DISPLAY_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "choom-theme";

const Space = ({
  className,
  size = "1",
  display = "block",
  dir = "y",
  isBox = true,
}) => {
  const _size = MAP_SPACE[String(size)];

  let margin = 0;
  let dim = 0;

  if (isBox) {
    dim = _size;
  } else {
    margin = `calc(${_size} / 2)`;
  }

  return (
    <div
      className={className}
      css={css`
        display: ${display};

        ${dir === "y"
          ? `
          height: ${dim};
          margin-top: ${margin};
          margin-bottom: ${margin};
        `
          : `
          width: ${dim};
          margin-left: ${margin};
          margin-right: ${margin};
        `}
      `}
    ></div>
  );
};

Space.propTypes = {
  className: PropTypes.string,
  display: PropTypes.oneOf(DISPLAY_TYPES),
  dir: PropTypes.oneOf(DIRECTION_XY_TYPES),
  size: PropTypes.oneOf(SPACE_TYPES),
  isBox: PropTypes.bool,
};

export default Space;
