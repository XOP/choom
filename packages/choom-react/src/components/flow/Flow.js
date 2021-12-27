import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";

import Flex from '../flex/Flex';

import {
  FLEX_ALIGN_TYPES,
  FLEX_JUSTIFY_TYPES,
  SPACE_TYPES,
} from "../../theme/theme";

const Flow = ({
  className,
  children,
  as = "div",
  align = "start",
  justify = "center",
  space = "1",
  wrap = false,
}) => {
  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          <Flex
            as={as}
            align={align}
            justify={justify}
            space={space}
            wrap={wrap}
            className={cx(
              className,
              css`
                flex-direction: row;
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

Flow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  align: PropTypes.oneOf(FLEX_ALIGN_TYPES),
  justify: PropTypes.oneOf(FLEX_JUSTIFY_TYPES),
  space: PropTypes.oneOf(SPACE_TYPES),
  wrap: PropTypes.bool,
};

export default Flow;
