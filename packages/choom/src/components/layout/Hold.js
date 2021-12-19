import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";

import Flex from "./Flex";

import { FLEX_ALIGN_TYPES, FLEX_JUSTIFY_TYPES } from "../../theme/theme";

const Hold = ({
  className,
  children,
  as = "div",
  align = "center",
  justify = "center",
}) => {
  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          <Flex
            as={as}
            align={align}
            justify={justify}
            space="0"
            wrap={true}
            dir="row"
            className={cx(
              className,
              css`
                flex-grow: 1;
                min-height: 100%;
                min-width: 100%;
                height: 100%;
                width: 100%;
              `
            )}
          >
            {children}
          </Flex>
        );
      }}
    </ClassNames>
  );
};

Hold.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  align: PropTypes.oneOf(FLEX_ALIGN_TYPES),
  justify: PropTypes.oneOf(FLEX_JUSTIFY_TYPES),
};

export default Hold;
