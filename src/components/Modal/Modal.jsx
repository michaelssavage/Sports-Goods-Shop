import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CrossIcon } from "../Icons";
import { CSSTransition } from "react-transition-group";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, setIsOpen, title, children }) => {
  const backdrop = useRef(null);
  const container = useRef(null);
  const backdropMouseDown = useRef(false);
  const onKeydown = useCallback(
    (e) => {
      if (e.key === "Escape") setIsOpen(false);
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeydown, false);
    return () => document.removeEventListener("keydown", onKeydown, false);
  }, [onKeydown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return createPortal(
    <CSSTransition
      classNames="fade"
      nodeRef={backdrop}
      in={isOpen}
      timeout={250}
      unmountOnExit
    >
      <div
        ref={backdrop}
        onMouseDown={(e) => {
          if (e.target === backdrop.current) backdropMouseDown.current = true;
          else backdropMouseDown.current = false;
        }}
        onMouseUp={(e) => {
          if (e.target === backdrop.current && backdropMouseDown.current)
            setIsOpen(false);
        }}
        className={styles.root}
        aria-label="Modal Backdrop"
      >
        <CSSTransition
          classNames="apear"
          nodeRef={container}
          in={isOpen}
          timeout={250}
          unmountOnExit
        >
          <div className={styles.container} ref={container} role="dialog">
            <button className={styles.close} onClick={() => setIsOpen(false)}>
              <CrossIcon />
            </button>

            <h3 className={styles.title}>{title}</h3>
            <div>{children}</div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>,
    document.body
  );
};
