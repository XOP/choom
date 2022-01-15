import React from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/react";
import theme, {
  HEADING_LEVEL_TYPES,
  MAP_SPACE,
  SPACE_TYPES,
  TEXT_ALIGN_TYPES,
} from "choom-theme";

const MAP_HEADING_FONTSIZE = {
  1: theme.fontSize4xl,
  2: theme.fontSize3xl,
  3: theme.fontSize2xl,
  4: theme.fontSizeXl,
  5: theme.fontSizeL,
};

const Heading = ({
  className,
  children,
  align = "center",
  as = "",
  level = "2",
  mb = "0",
  mt = "0",
  colorInherit = false,
}) => {
  const tag = as || `h${level}`;

  const fontSize = MAP_HEADING_FONTSIZE[String(level)];
  const marginBottom = MAP_SPACE[String(mb)];
  const marginTop = MAP_SPACE[String(mt)];

  return (
    <ClassNames>
      {({ css, cx }) => {
        return React.createElement(
          tag,
          {
            className: cx(
              className,
              css`
                margin: 0;
                margin-bottom: ${marginBottom};
                margin-top: ${marginTop};

                color: ${colorInherit ? "inherit" : theme.colorLightTemp};

                font-size: ${fontSize};
                font-family: ${theme.fontFamily};
                line-height: ${theme.lineHeightS};
                text-transform: uppercase;
                text-align: ${align};
                text-shadow: 0 0.05em 0.05em ${theme.colorThemeTemp};
              `
            ),
          },
          <span>{children}</span>
        );
      }}
    </ClassNames>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(TEXT_ALIGN_TYPES),
  as: PropTypes.string,
  level: PropTypes.oneOf(HEADING_LEVEL_TYPES),
  mb: PropTypes.oneOf(SPACE_TYPES),
  mt: PropTypes.oneOf(SPACE_TYPES),
  colorInherit: PropTypes.bool,
};

export default Heading;
