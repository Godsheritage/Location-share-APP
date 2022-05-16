import "./modal.css";
import ReactDOM from "react-dom";

const ModalOverlay: React.FC<any> = ({ className }) => {
  const content = <div className={`modal ${className}`}></div>;
  return ReactDOM.createPortal(content, document.querySelector("modal-hook")!);
};

const Modal: React.FC = () => {
  return <div>Modal</div>;
};

export default Modal;
