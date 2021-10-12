import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme, {
  SPACE_TYPES,
  POSITION_TYPES,
  PLACEMENT_Y_TYPES,
  MAP_SPACE,
} from "../../theme/theme";

const Panel = ({
  className,
  children,
  position = "fixed",
  placement = "top",
  padding = "2",
}) => {
  const space = MAP_SPACE[String(padding)];

  let shadow = "";
  if (placement === "top") {
    shadow = `0 2px 7px -2px rgba(0,0,0,.6), 0 1px 18px -4px rgba(0,0,0,.3)`;
  }
  if (placement === "bottom") {
    shadow = `0 -2px 7px -3px rgba(0,0,0,.6), 0 -1px 18px -6px rgba(0,0,0,.3)`;
  }

  return (
    <section
      className={className}
      css={css`
        position: ${position};
        left: 0;
        right: 0;
        top: ${placement === "top" ? "0" : "auto"};
        bottom: ${placement === "bottom" ? "0" : "auto"};

        z-index: 2000;
        padding: ${space};
        border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};
        border-radius: ${theme.radiusRegular};

        color: ${theme.colorDarkTemp};
        font-size: ${theme.fontSizeN};
        font-family: ${theme.fontFamily};

        background: ${theme.colorLightTemp};
        box-shadow: ${shadow};
      `}
    >
      {children}
    </section>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOf(SPACE_TYPES),
  position: PropTypes.oneOf(POSITION_TYPES),
  placement: PropTypes.oneOf(PLACEMENT_Y_TYPES),
};

export default Panel;
