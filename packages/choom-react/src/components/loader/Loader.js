import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme, {
  DISPLAY_TYPES,
  ELEVATION_TYPES,
  SIZES_TYPES,
} from "choom-theme";

const Loader = ({
  className,
  size = "regular",
  display = "block",
  elevation = 0,
}) => {
  elevation = Number(elevation);

  let dim = theme.spaceThree;

  if (size === "small") {
    dim = theme.spaceOneAndHalf;
  }

  if (size === "big") {
    dim = theme.spaceFour;
  }

  return (
    <div
      className={className}
      css={css`
        box-sizing: border-box;
        display: ${display};
        position: relative;
        width: ${dim};
        height: ${dim};

        @keyframes rotate {
          0% {
            transform: scale(1) rotate(0deg);
          }

          25% {
            transform: scale(1) rotate(90deg);
          }

          50% {
            transform: scale(1) rotate(180deg);
          }

          75% {
            transform: scale(1) rotate(270deg);
          }

          100% {
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes shape {
          0% {
            border-radius: ${theme.radiusRegular};
          }

          12.5% {
            border-radius: 40%;
          }

          25% {
            border-radius: ${theme.radiusRegular};
          }

          37.5% {
            border-radius: 40%;
          }

          50% {
            border-radius: ${theme.radiusRegular};
          }

          67.5% {
            border-radius: 40%;
          }

          75% {
            border-radius: ${theme.radiusRegular};
          }

          87.5% {
            border-radius: 40%;
          }

          100% {
            border-radius: ${theme.radiusRegular};
          }
        }
      `}
    >
      <span
        css={css`
          box-sizing: border-box;
          display: block;

          width: 100%;
          height: 100%;

          background: ${theme.colorThemeTemp};
          border-radius: ${theme.radiusRegular};
          border: ${theme.borderSizeRegular} solid ${theme.colorDarkTemp};

          box-shadow: ${elevation ? "0 0 7px -2px rgba(0, 0, 0, 0.6)" : ""};

          transform: scale(1) rotate(0deg);
          transform-origin: center center;
          animation: rotate 2.6s cubic-bezier(0.15, -0.35, 0.45, 1.25) 0s
              infinite,
            shape 2.6s cubic-bezier(0.1, 0.15, 0.35, 1.1) 0s infinite;
        `}
      />
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES_TYPES),
  display: PropTypes.oneOf(DISPLAY_TYPES),
  elevation: PropTypes.oneOf(ELEVATION_TYPES),
};

export default Loader;
