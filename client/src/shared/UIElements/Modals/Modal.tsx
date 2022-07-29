import "./modal.css";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";

const ModalOverlay: React.FC<any> = (props) => {
  const content = (
    <motion.div
      style={props.style}
      className={`modal ${props.className}`}
      initial={{ opacity: 0, y: "-100vw" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook")!);
};

const Modal: React.FC<any> = (props) => {
  return (
    <>
      {props.show && (
        <div>
          {" "}
          <ModalOverlay {...props} /> <Backdrop onClick={props.onCancel} />
        </div>
      )}
    </>
  );
};

export default Modal;
