import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";

import Flex from "./Flex";
import FlexUnit from "./FlexUnit";

import { FLEX_ALIGN_TYPES, FLEX_JUSTIFY_TYPES } from "../../theme/theme";

const Hold = ({
  className,
  children,
  as = "div",
  asUnit = "div",
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
            space='0'
            className={cx(
              className,
              css`
                flex-flow: row wrap;
                flex-wrap: wrap;
                min-height: 100%;
                min-width: 100%;
                height: 100%;
                width: 100%;
              `
            )}
          >
            <FlexUnit as={asUnit} grow="0" shrink="1">
              {children}
            </FlexUnit>
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
  asUnit: PropTypes.string,
  align: PropTypes.oneOf(FLEX_ALIGN_TYPES),
  justify: PropTypes.oneOf(FLEX_JUSTIFY_TYPES),
};

export default Hold;
