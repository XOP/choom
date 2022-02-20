import { useContext } from "react";
import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { ThemeContext } from "../../theme";

const Chip = ({ className, children, title = "", onClick }) => {
  const theme = useContext(ThemeContext);

  const heightEx = `${theme.fontSizeM} * ${theme.lineHeightS} + 2 * ${theme.spaceHalf} + 2 * ${theme.borderSizeRegular}`;

  const interactive = onClick && typeof onClick === "function";

  return (
    <span
      className={className}
      css={css`
        display: inline-flex;
        box-sizing: border-box;
        height: calc(${heightEx});
        padding: ${theme.spaceHalf} ${theme.spaceThreeQuarters};

        border: ${theme.borderSizeRegular} solid;
        border-radius: calc(${heightEx} / 2);

        background: ${theme.colorThemeTemp};

        text-align: center;
        white-space: nowrap;
        color: ${theme.colorDarkTemp};
        line-height: ${theme.lineHeightS};
        font-size: ${theme.fontSizeM};
        font-family: ${theme.fontFamily};

        cursor: default;
        user-select: none;

        ${interactive &&
        `
          @media (hover: hover) {
            &:hover {
              cursor: pointer;
              filter: brightness(1.2);
            }
          }

          &:active {
            filter: contrast(0.8);
            transform: translateY(1px);
          }
          `}

        &:nth-of-type(n + 2) {
          margin-left: ${theme.spaceHalf};
        }
      `}
      onClick={onClick}
      title={title}
    >
      <span
        css={css`
          display: block;
          max-width: 45ex;
          overflow: hidden;
          text-overflow: ellipsis;
        `}
      >
        {children}
      </span>
    </span>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Chip;
