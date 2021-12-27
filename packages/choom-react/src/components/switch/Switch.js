import PropTypes from "prop-types";

import { useState, useRef } from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { nanoid } from "nanoid";

import theme from "../../theme/theme";

const Switch = ({
  className,
  name,
  disabled = false,
  checked = false,
  onChange = () => null,
}) => {
  const _id = useRef(nanoid());

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;

    const _checked = !isChecked;

    setIsChecked(_checked);
    onChange(_checked);
  };

  return (
    <label
      css={css`
        box-sizing: content-box;
        display: inline-flex;
        vertical-align: middle;

        position: relative;
        height: ${theme.spaceOneAndHalf};
        width: ${theme.spaceFour};

        border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};
        border-radius: ${theme.spaceOne};

        background: ${isChecked ? theme.colorThemeTemp : theme.colorLightTemp};
        color: ${theme.colorDarkTemp};

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

          &:active:not([disabled]) {
            transform: scale(0.925);
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
      htmlFor={_id.current}
    >
      <input
        id={_id.current}
        className={className}
        name={name}
        css={css`
          width: 0;
          height: 0;
          opacity: 0;
          position: absolute;
          pointer-events: none;
        `}
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
        type="checkbox"
      />
      <span
        css={css`
          box-sizing: content-box;
          position: absolute;
          top: calc(
            -1 * ${theme.borderSizeRegular} - 1 * ${theme.spaceQuarter}
          );
          left: calc(-1 * ${theme.borderSizeRegular});

          width: ${theme.spaceTwo};
          height: ${theme.spaceTwo};

          border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};
          border-radius: ${theme.spaceOne};

          background: ${theme.colorLightTemp};

          transform: ${isChecked
            ? "translateX(calc(100% - " + theme.borderSizeRegular + " * 2))"
            : "translateX(0)"};
          transition: transform 0.15s;
        `}
      />
    </label>
  );
};

Switch.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Switch;
