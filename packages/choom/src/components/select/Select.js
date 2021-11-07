import PropTypes from "prop-types";

import { useState } from "react";

import { ChevronDown as IconArrowDown } from "react-feather";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme, { SIZES_TYPES } from "../../theme/theme";

import { Icon } from "..";

const Select = ({
  className,
  children,
  id,
  name,
  value,
  size = "regular",
  disabled = false,
  onChange = () => null,
}) => {
  let paddingY = theme.spaceThreeQuarters;
  let paddingX = theme.spaceOne;
  let fontSize = theme.fontSizeN;

  if (size === "small") {
    fontSize = theme.fontSizeM;
    paddingY = theme.spaceHalf;
    paddingX = theme.spaceHalf;
  }

  if (size === "big") {
    fontSize = theme.fontSizeL;
    paddingY = theme.spaceOne;
    paddingX = theme.spaceOneAndHalf;
  }

  const [_value, setValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div
      css={css`
        position: relative;
        width: 100%;

        font-size: ${fontSize};
      `}
    >
      <select
        className={className}
        id={id}
        name={name}
        value={_value}
        onChange={handleChange}
        disabled={disabled}
        css={css`
          appearance: none;

          box-sizing: border-box;

          width: 100%;
          height: calc(
            ${paddingY} * 2 + ${fontSize} * ${theme.lineHeightN} + 2 *
              ${theme.borderSizeRegular}
          );
          padding: ${paddingY} ${paddingX};

          border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};
          border-radius: ${theme.radiusRegular};

          background: ${theme.colorLightTemp};
          color: ${theme.colorDarkTemp};

          white-space: nowrap;
          font-family: ${theme.fontFamily};
          font-size: inherit;
          line-height: ${theme.lineHeightN};

          cursor: pointer;
          transition: all 0.15s;

          ${
            !disabled &&
            `
            @media (hover: hover) {
              &:hover {
                filter: brightness(1.2);
              }
            }
            `
          }

          ${
            disabled &&
            `
            cursor: default;
            opacity: 0.5;
            `
          }
        }
      `}
      >
        {children}
      </select>
      <span
        css={css`
          position: absolute;
          top: calc(50% + ${theme.spaceEighth});
          right: ${paddingX};

          transform: translateY(-50%);
          pointer-events: none;

          ${disabled &&
          `
          opacity: 0.5;
          `}
        `}
      >
        <Icon size="inherit">
          <IconArrowDown />
        </Icon>
      </span>
    </div>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(SIZES_TYPES),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Select;
