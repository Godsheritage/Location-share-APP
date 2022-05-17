import "./modal.css";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";

const ModalOverlay: React.FC<any> = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        action=""
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.querySelector("modal-hook")!);
};

const Modal: React.FC<any> = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      //todo add css transitions
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
