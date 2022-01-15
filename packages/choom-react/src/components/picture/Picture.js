import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Image } from "react-feather";

import theme, { ASPECT_RATIO_TYPES, IMG_FIT_TYPES } from "choom-theme";

import Hold from '../hold/Hold';
import Icon from '../icon/Icon';

const getUnit = (strValue) => strValue.match(/[a-z, %]+$/)[0] || "";
const parseAspectRatio = (strValue) => {
  const [wx, hx] = strValue.split(":");

  return [Number(wx), Number(hx)];
};

const Picture = ({
  className,
  alt = "",
  src,
  width = "auto",
  height = "auto",
  aspectRatio = "",
  fill = "cover",
}) => {
  let widthValue = "";
  let heightValue = "";

  if (width !== undefined) widthValue = width;
  if (height !== undefined) heightValue = height;

  if (aspectRatio) {
    const [wx, hx] = parseAspectRatio(aspectRatio);

    if (widthValue && heightValue === "auto") {
      let unit = getUnit(widthValue);

      heightValue = (parseInt(widthValue, 10) / wx) * hx;
      heightValue = `${Math.round(heightValue)}${unit}`;
    } else if (heightValue && widthValue === "auto") {
      let unit = getUnit(heightValue);

      widthValue = (parseInt(heightValue, 10) / hx) * wx;
      widthValue = `${Math.round(widthValue)}${unit}`;
    }
  }

  return (
    <figure
      className={className}
      css={css`
        display: inline-flex;
        box-sizing: border-box;
        margin: 0;

        border: ${theme.borderSizeRegular} solid ${theme.colorLightTemp};
        border-radius: ${theme.radiusRegular};
        overflow: hidden;
        width: ${widthValue};
        height: ${heightValue};

        background: ${theme.colorLightTemp};

        line-height: 0;
        font-size: 0;

        cursor: default;
        user-select: none;
      `}
    >
      {!!src ? (
        <img
          alt={alt}
          css={css`
            object-fit: ${fill};
            width: 100%;
            height: 100%;
          `}
          src={src}
        />
      ) : (
        <Hold>
          <span
            css={css`
            opacity: 0.25;
            color: ${theme.colorDarkTemp};
          `}
          >
            <Icon>
              <Image />
            </Icon>
          </span>
        </Hold>
      )}
    </figure>
  );
};

Picture.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  aspectRatio: PropTypes.oneOf(ASPECT_RATIO_TYPES),
  fill: PropTypes.oneOf(IMG_FIT_TYPES),
};

export default Picture;
