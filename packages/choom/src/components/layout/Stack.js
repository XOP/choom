import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, ClassNames } from "@emotion/react";

import {
  DIRECTION_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
} from "../../theme/theme";

const Stack = ({ className, children, as = "div", dir = "y", space = "1" }) => {
  const spaceValue = MAP_SPACE[String(space)];

  let marginL = spaceValue;
  let marginT = spaceValue;

  if (dir === 'y') {
    marginL = 0;
  }

  if (dir === 'x') {
    marginT = 0;
  }

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
                width: 100%;
                overflow: hidden;
              `
            ),
          },
          <div css={css`
            margin-top: calc(-1 * ${marginT});
            margin-left: calc(-1 * ${marginL});

            /* extra specificity over descendants */
            && > * {
              margin-top: ${marginT};
              margin-left: ${marginL};
            }
          `}>{children}</div>
        );
      }}
    </ClassNames>
  );
};

Stack.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  dir: PropTypes.oneOf(DIRECTION_TYPES),
  space: PropTypes.oneOf(SPACE_TYPES),
};

export default Stack;
