import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { ICON_SIZES_TYPES, MAP_ICONS } from "choom-theme";

const Icon = ({ className, children, title = "", size = "regular" }) => {
  let sizeVal = 'inherit';

  if (size !== sizeVal) {
    sizeVal = MAP_ICONS[size];
  }

  if (sizeVal === 'inherit') {
    sizeVal = '1.125em';
  }

  return (
    <span
      className={className}
      css={css`
        display: inline-flex;
        box-sizing: border-box;
        height: ${sizeVal};
        width: ${sizeVal};

        && > svg,
        && > * > svg {
          height: ${sizeVal};
          width: ${sizeVal};
        }
      `}
      title={title}
    >
      {children}
    </span>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(ICON_SIZES_TYPES),
};

export default Icon;
