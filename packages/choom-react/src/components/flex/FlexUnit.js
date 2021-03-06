import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";

import {
  FLEX_ALIGNSELF_TYPES,
  FLEX_JUSTIFY_TYPES,
  FLEX_SIZE_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "choom-theme";

const FlexUnit = ({
  className,
  children,
  as = "div",
  fluid = false,
  stretch = false,
  align = "center",
  justify = "center",
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
                justify-self: ${justify};
                flex-grow: ${grow};
                flex-shrink: ${shrink};
                flex-basis: ${basis};
                width: ${fluid ? '100%' : 'auto'};
                height: ${stretch ? '100%' : 'auto'};
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
  children: PropTypes.node,
  as: PropTypes.string,
  fluid: PropTypes.bool,
  stretch: PropTypes.bool,
  align: PropTypes.oneOf(FLEX_ALIGNSELF_TYPES),
  justify: PropTypes.oneOf(FLEX_JUSTIFY_TYPES),
  grow: PropTypes.oneOf(FLEX_SIZE_TYPES),
  shrink: PropTypes.oneOf(FLEX_SIZE_TYPES),
  basis: PropTypes.string,
  mt: PropTypes.oneOf(SPACE_TYPES),
  mb: PropTypes.oneOf(SPACE_TYPES),
  ml: PropTypes.oneOf(SPACE_TYPES),
  mr: PropTypes.oneOf(SPACE_TYPES),
};

export default FlexUnit;
