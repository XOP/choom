import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme, { MAP_SPACE, SPACE_TYPES } from "choom-theme";

const Divider = ({ className, mt = "1", mb = "1" }) => {
  const spaceTop = MAP_SPACE[String(mt)];
  const spaceBot = MAP_SPACE[String(mb)];

  return (
    <hr
      className={className}
      css={css`
        box-sizing: border-box;
        width: 100%;
        height: ${theme.borderSizeRegular};
        border: 0 none;
        margin-top: ${spaceTop};
        margin-bottom: ${spaceBot};

        background: ${theme.colorDarkTemp};
      `}
    />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
  mt: PropTypes.oneOf(SPACE_TYPES),
  mb: PropTypes.oneOf(SPACE_TYPES),
};

export default Divider;
