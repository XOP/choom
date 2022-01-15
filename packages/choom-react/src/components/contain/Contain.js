import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, ClassNames } from "@emotion/react";

import { MAP_SPACE, SPACE_TYPES, DIRECTION_TYPES } from "choom-theme";

const Contain = ({
  className,
  children,
  as = "div",
  dir = "xy",
  space = "1",
}) => {
  const spaceValue = MAP_SPACE[String(space)];

  let padT = 0;
  let padB = 0;
  let padL = 0;
  let padR = 0;

  switch (dir) {
    case "xy":
      padT = padB = padL = padR = spaceValue;
      break;

    case "x":
      padL = padR = spaceValue;
      break;

    case "y":
      padT = padB = spaceValue;
      break;

    case "top":
      padT = spaceValue;
      break;

    case "bottom":
      padB = spaceValue;
      break;

    case "left":
      padL = spaceValue;
      break;

    case "right":
      padR = spaceValue;
      break;
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
                padding-top: ${padT};
                padding-bottom: ${padB};
                padding-left: ${padL};
                padding-right: ${padR};
              `
            ),
          },
          children
        );
      }}
    </ClassNames>
  );
};

Contain.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  dir: PropTypes.oneOf(DIRECTION_TYPES),
  space: PropTypes.oneOf(SPACE_TYPES),
};

export default Contain;
