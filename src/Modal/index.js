import './Modal.css';
import ReactDOM from 'react-dom';

function Modal({ children }) {
    // ReactDom tiene este método para crear portales
    return ReactDOM.createPortal(
      <div className="ModalBackground">
        {children}
      </div>,
      document.getElementById('modal')
    );
  }

export {Modal} 