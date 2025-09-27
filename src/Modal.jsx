import React, { useEffect, useRef } from 'react';

const Modal = ({ 
    isOpen, 
    message, 
    onClose, 
    customClass = '', 
    position = 'center', 
    children,
    preventClose = false,
    forceClose,
    backdropColor = 'rgba(0, 0, 0, 0.5)',
    title
}) => {
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
            if (e.key === 'Escape' && !preventClose) {
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
    }, [isOpen, onClose, preventClose]);

    // Gestion de la fermeture forcée
    useEffect(() => {
        if (forceClose) {
            forceClose();
        }
    }, [forceClose]);

    // Fonction de fermeture qui respecte preventClose
    const handleClose = () => {
        if (!preventClose) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div 
                className="modal-backdrop" 
                style={{ backgroundColor: backdropColor }}
                onClick={handleClose}
            ></div>
            <div
                className={`modal${customClass ? ' ' + customClass : ''} modal-${position}`}
                role="dialog"
                aria-modal="true"
                {...(title && !children ? { 'aria-labelledby': 'modal-title' } : {})}
                ref={dialogRef}
            >
                <div className="modal-dialog">
                    {!preventClose && (
                        <button
                            className="modal-close"
                            onClick={handleClose}
                            aria-label="Fermer la modale"
                            ref={closeBtnRef}
                        >
                            &times;
                        </button>
                    )}
                    {children ? (
                        children
                    ) : (
                        <>
                            {title && (
                                <h2 id="modal-title" style={{fontSize: '1.2em', margin: 0}}>
                                    {title}
                                </h2>
                            )}
                            <p>{message ? message : "No message available"}</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
export default Modal;