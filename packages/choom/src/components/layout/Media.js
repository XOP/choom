import React from "react";
import PropTypes from "prop-types";

import Flow from "./Flex";
import FlexUnit from "./FlexUnit";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";

import { FLEX_ALIGN_TYPES, SPACE_TYPES } from "../../theme/theme";

const Media = ({
  className,
  children,
  as = "div",
  asUnit = "div",
  align = "start",
  start = null,
  end = null,
  space = "1",
}) => {
  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          <Flow
            as={as}
            align={align}
            justify="start"
            wrap={false}
            space={space}
            className={className}
          >
            {start && (
              <FlexUnit
                as={asUnit}
                grow="0"
                shrink="1"
                align={align}
                className={cx(
                  css`
                    display: inline-flex;
                  `
                )}
              >
                {start}
              </FlexUnit>
            )}
            {children && (
              <FlexUnit
                as={asUnit}
                grow="1"
                shrink="1"
                align={align}
                className={cx(
                  css`
                    display: inline-flex;
                  `
                )}
              >
                {children}
              </FlexUnit>
            )}
            {end && (
              <FlexUnit
                as={asUnit}
                grow="0"
                shrink="1"
                align={align}
                className={cx(
                  css`
                    display: inline-flex;
                  `
                )}
              >
                {end}
              </FlexUnit>
            )}
          </Flow>
        );
      }}
    </ClassNames>
  );
};

Media.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  start: PropTypes.node,
  end: PropTypes.node,
  as: PropTypes.string,
  asUnit: PropTypes.string,
  align: PropTypes.oneOf(FLEX_ALIGN_TYPES),
  space: PropTypes.oneOf(SPACE_TYPES),
};

export default Media;
