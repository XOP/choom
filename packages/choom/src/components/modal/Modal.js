import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { X as IconX } from "react-feather";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import theme from "../../theme/theme";

import { Button, Heading } from "..";

const modalRoot =
  typeof window === "undefined" ? null : document.getElementById("choom-modal");

const Modal = ({
  className,
  children,
  title,
  onClose = () => null,
  isOpen = false,
}) => {
  if (!modalRoot) return;

  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  useEffect(() => {
    setOpen(isOpen);

    return () => {
      setOpen(false);
    };
  }, [isOpen]);

  const content = open ? (
    <section
      className={className}
      css={css`
        position: fixed;
        z-index: 3000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        padding: ${theme.spaceOneAndHalf};

        background: ${theme.colorLightTemp};
        color: ${theme.colorDarkTemp};

        font-family: ${theme.fontFamily};
      `}
    >
      <div
        css={css`
          position: absolute;
          top: ${theme.spaceOneAndHalf};
          right: ${theme.spaceOne};
          z-index: 1000;
        `}
      >
        <Button size="small" isIcon onClick={handleClose}>
          <IconX />
        </Button>
      </div>

      {title && (
        <Heading level="3" colorInherit mb="2">
          {title}
        </Heading>
      )}
      <div
        css={css`
          position: relative;
          z-index: 0;
        `}
      >
        {children}
      </div>
    </section>
  ) : null;

  return createPortal(content, elRef.current);
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
