import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme, {
  MAP_SPACE,
  SPACE_TYPES,
  TEXT_ALIGN_TYPES,
} from "../../theme/theme";

const Card = ({ className, children, align = "left", padding = "2" }) => {
  const space = MAP_SPACE[String(padding)];

  return (
    <div
      className={className}
      css={css`
        padding: ${space};
        border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};
        border-radius: ${theme.radiusHeavy};

        box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.6);
        background: ${theme.colorLightTemp};

        text-align: ${align};
        color: ${theme.colorDarkTemp};
        font-size: ${theme.fontSizeN};
        font-family: ${theme.fontFamily};

        & + & {
          margin-top: ${theme.spaceOne};
        }
      `}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(TEXT_ALIGN_TYPES),
  padding: PropTypes.oneOf(SPACE_TYPES),
};

export default Card;
