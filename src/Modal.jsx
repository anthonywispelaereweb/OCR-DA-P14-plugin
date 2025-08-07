const Modal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;
    
    return (
        <>
            <span className="modal-overlay" onClick={onClose}></span>
            <div className="modal">
                <div className="modal-dialog">
                    <span className="modal-close" onClick={onClose}>&times;</span>
                    <p>{message ? message : "No message available"}</p>
                </div>
            </div>

        </>
    );
    }
export default Modal;