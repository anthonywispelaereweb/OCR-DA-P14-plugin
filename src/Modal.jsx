import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, message, onClose, customClass = '', position = 'center' }) => {
    const dialogRef = useRef(null);
    const closeBtnRef = useRef(null);

    // Focus le bouton de fermeture à l'ouverture
    useEffect(() => {
        if (isOpen && closeBtnRef.current) {
            closeBtnRef.current.focus();
        }
    }, [isOpen]);

    // Gestion touche Échap et focus trap basique
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
            // Focus trap basique : tab reste dans la modale
            if (e.key === 'Tab' && dialogRef.current) {
                const focusableEls = dialogRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstEl = focusableEls[0];
                const lastEl = focusableEls[focusableEls.length - 1];
                if (!e.shiftKey && document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                } else if (e.shiftKey && document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <span className="modal-overlay" onClick={onClose}></span>
            <div
                className={`modal${customClass ? ' ' + customClass : ''} modal-${position}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                ref={dialogRef}
            >
                <div className="modal-dialog">
                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Fermer la modale"
                        ref={closeBtnRef}
                    >
                        &times;
                    </button>
                    <h2 id="modal-title" style={{fontSize: '1.2em', margin: 0}}>Notification</h2>
                    <p>{message ? message : "No message available"}</p>
                </div>
            </div>
        </>
    );
}
export default Modal;