import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import theme, { INPUT_TYPES, SIZES_TYPES } from "choom-theme";

const Button = ({
  className,
  children,
  onClick,
  disabled = false,
  type = "button",
  iconStart = null,
  iconEnd = null,
  size = "regular",
  fluid = false,
  isIcon = false,
}) => {
  let paddingY = theme.spaceThreeQuarters;
  let paddingX = theme.spaceOneAndHalf;
  let fontSize = theme.fontSizeN;

  if (size === "small") {
    fontSize = theme.fontSizeM;
    paddingY = theme.spaceHalf;
    paddingX = theme.spaceThreeQuarters;
  }

  if (size === "big") {
    fontSize = theme.fontSizeL;
    paddingY = theme.spaceOne;
    paddingX = theme.spaceTwo;
  }

  if (isIcon) {
    paddingX = paddingY;
  }

  return (
    <button
      className={className}
      css={css`
        appearance: none;

        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;

        height: calc(
          ${paddingY} * 2 + ${fontSize} * ${theme.lineHeightN} + 2 *
            ${theme.borderSizeRegular}
        );
        padding: ${paddingY} ${paddingX};
        width: ${fluid
          ? "100%"
          : isIcon
          ? `calc(${paddingX} * 2 + ${fontSize} * ${theme.lineHeightN} + 2 * ${theme.borderSizeRegular})`
          : "auto"};

        border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};
        border-radius: ${theme.radiusRegular};

        background: ${theme.colorThemeTemp};
        color: ${theme.colorDarkTemp};

        text-transform: uppercase;
        white-space: nowrap;
        font-family: ${theme.fontFamily};
        font-size: ${fontSize};
        line-height: ${theme.lineHeightN};

        cursor: pointer;
        transition: all 0.15s;
        user-select: none;

        @media (hover: hover) {
          &:hover:not([disabled]) {
            filter: brightness(1.2);
          }
        }

        &:active:not([disabled]) {
          filter: contrast(0.8);
          transform: translateY(1px);
        }

        &:nth-of-type(n + 2) {
          margin-left: ${theme.spaceOne};
        }

        &[disabled] {
          cursor: default;
          opacity: 0.5;
        }
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {iconStart && (
        <span
          css={css`
            margin-right: ${theme.spaceThreeQuarters};
            line-height: 0;
            display: inline-flex;
            vertical-align: middle;
          `}
        >
          {iconStart}
        </span>
      )}
      <span
        css={css`
          ${isIcon &&
          `
            display: inline-flex;
            vertical-align: middle;
          `}
        `}
      >
        {children}
      </span>
      {iconEnd && (
        <span
          css={css`
            margin-left: ${theme.spaceThreeQuarters};
            line-height: 0;
            display: inline-flex;
            vertical-align: middle;
          `}
        >
          {iconEnd}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(INPUT_TYPES),
  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,
  size: PropTypes.oneOf(SIZES_TYPES),
  fluid: PropTypes.bool,
  isIcon: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
