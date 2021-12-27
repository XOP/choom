import PropTypes from "prop-types";

import { useState, useEffect } from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { ClassNames, css, jsx } from "@emotion/react";

import { Minus as IconMinus, Plus as IconPlus } from "react-feather";

import theme from "../../theme/theme";

import Button from '../button/Button';
import Icon from '../icon/Icon';

const Numeric = ({
  className,
  value: _value = 0,
  disabled = false,
  min = 0,
  max = 99,
  step = 1,
  onChange = () => null,
}) => {
  const [value, setValue] = useState(_value);

  const minMax = (val) => Math.min(Math.max(val, min), max);

  const onIncrement = () => {
    let newVal = minMax(value + step);

    setValue(newVal);
  };

  const onDecrement = () => {
    let newVal = minMax(value - step);

    setValue(newVal);
  };

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          <div
            css={css`
              display: inline-flex;
              vertical-align: middle;
              flex-direction: row;
              flex-wrap: nowrap;

              &[disabled] {
                cursor: default;
                opacity: 0.5;
              }
            `}
          >
            <span
              css={css`
                flex: 0 1 auto;
              `}
            >
              <Button
                isIcon
                size="small"
                onClick={onDecrement}
                disabled={disabled}
                className={cx(
                  className,
                  css`
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                  `
                )}
              >
                <Icon size="inherit">
                  <IconMinus />
                </Icon>
              </Button>
            </span>
            <input
              className={className}
              css={css`
                appearance: none;
                box-sizing: content-box;
                position: relative;
                z-index: 1;
                display: inline-flex;
                flex: 0 1 3ch;
                min-width: 3ch;
                max-width: 0;
                height: calc(
                  ${theme.fontSizeM} * ${theme.lineHeightN} + ${theme.spaceHalf} *
                    2
                );

                padding: 0 ${theme.spaceHalf};
                margin-left: calc(-1 * ${theme.borderSizeRegular});
                margin-right: calc(-1 * ${theme.borderSizeRegular});
                border: ${theme.borderSizeRegular} solid;

                font-family: ${theme.fontFamily};
                font-size: ${theme.fontSizeN};
                text-align: right;
                color: ${theme.colorDarkTemp};
                background: ${theme.colorLightTemp};

                &[disabled] {
                  cursor: default;
                  opacity: 0.5;
                }
              `}
              disabled={disabled}
              readOnly
              value={value}
              type="input"
            />
            <span
              css={css`
                flex: 0 1 auto;
              `}
            >
              <Button
                isIcon
                size="small"
                onClick={onIncrement}
                disabled={disabled}
                className={cx(
                  className,
                  css`
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                  `
                )}
              >
                <Icon size="inherit">
                  <IconPlus />
                </Icon>
              </Button>
            </span>
          </div>
        );
      }}
    </ClassNames>
  );
};

Numeric.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
};

export default Numeric;
