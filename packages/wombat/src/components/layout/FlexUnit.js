import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";

import {
  FLEX_ALIGNSELF_TYPES,
  FLEX_SIZE_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "../../theme/theme";

const FlexUnit = ({
  className,
  children,
  as = "div",
  align = "center",
  grow = 1,
  shrink = 1,
  basis = "auto",
  mt = "0",
  mb = "0",
  ml = "0",
  mr = "0",
}) => {
  const spaceT = MAP_SPACE[String(mt)];
  const spaceB = MAP_SPACE[String(mb)];
  const spaceL = MAP_SPACE[String(ml)];
  const spaceR = MAP_SPACE[String(mr)];

  return (
    <ClassNames>
      {({ css, cx }) => {
        return React.createElement(
          as,
          {
            className: cx(
              className,
              css`
                box-sizing: border-box;
                align-self: ${align};
                flex-grow: ${grow};
                flex-shrink: ${shrink};
                flex-basis: ${basis};
                margin-top: ${spaceT};
                margin-bottom: ${spaceB};
                margin-left: ${spaceL};
                margin-right: ${spaceR};
              `
            ),
          },
          children
        );
      }}
    </ClassNames>
  );
};

FlexUnit.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  align: PropTypes.oneOf(FLEX_ALIGNSELF_TYPES),
  grow: PropTypes.oneOf(FLEX_SIZE_TYPES),
  shrink: PropTypes.oneOf(FLEX_SIZE_TYPES),
  basis: PropTypes.string,
  mt: PropTypes.oneOf(SPACE_TYPES),
  mb: PropTypes.oneOf(SPACE_TYPES),
  ml: PropTypes.oneOf(SPACE_TYPES),
  mr: PropTypes.oneOf(SPACE_TYPES),
};

export default FlexUnit;
