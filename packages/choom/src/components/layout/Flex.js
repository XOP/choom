import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";

import {
  FLEX_ALIGN_TYPES,
  FLEX_DIR_TYPES,
  FLEX_JUSTIFY_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "../../theme/theme";

const Flex = ({
  className,
  children,
  fluid = false,
  stretch = false,
  as = "div",
  dir = "row",
  align = "center",
  justify = "center",
  wrap = false,
  space = "1",
}) => {
  const gapVal = MAP_SPACE[String(space)];

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
                display: flex;
                align-content: ${align};
                justify-content: ${justify};
                flex-wrap: ${wrap ? "wrap" : "nowrap"};
                flex-direction: ${dir};
                width: ${fluid ? '100%' : 'auto'};
                height: ${stretch ? '100%' : 'auto'};
                gap: ${gapVal};
              `
            ),
          },
          children
        );
      }}
    </ClassNames>
  );
};

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  fluid: PropTypes.bool,
  stretch: PropTypes.bool,
  dir: PropTypes.oneOf(FLEX_DIR_TYPES),
  align: PropTypes.oneOf(FLEX_ALIGN_TYPES),
  justify: PropTypes.oneOf(FLEX_JUSTIFY_TYPES),
  space: PropTypes.oneOf(SPACE_TYPES),
};

export default Flex;
