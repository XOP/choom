import PropTypes from "prop-types";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme, { SPACE_TYPES } from "../../theme/theme";

import { Card } from "../";

const Panel = ({
  className,
  children,
  padding = '1',
}) => {
  return (
    <section
      className={className}
      css={css`
        position: fixed;
        z-index: 1000;
        bottom: 0;
        left: 0;
        right: 0;

        @media screen and (min-width: 980px) {
          position: static;
          margin-top: ${theme.spaceTwo}
        }
      `}
    >
      <Card padding={padding}>
        {children}
      </Card>
    </section>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOf(SPACE_TYPES),
};

export default Panel;
