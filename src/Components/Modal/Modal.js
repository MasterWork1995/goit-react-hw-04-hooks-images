import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={onBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
};
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.onKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.onKeyDown);
//   }

//   onKeyDown = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   onBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={s.overlay} onClick={this.onBackdropClick}>
//         <div className={s.modal}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;
