import { useEffect, useRef } from "react";
import Button from "./Button";
import "./Modal.css";

export default function Modal({ isOpen, onClose, title, children, size = "md", buttonLabel, onButtonClick }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && dialogRef.current) {
            const focusable = dialogRef.current.querySelectorAll(
                '[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length) focusable[0].focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="modal-backdrop"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            role="presentation"
        >
            <div
                ref={dialogRef}
                className={`modal-panel modal-${size}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
            >
                {/* ── Header ── */}
                <div className="modal-header">
                    {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <span aria-hidden="true">✕</span>
                    </button>
                </div>

                {/* ── Body ── */}
                <div className="modal-body">{children}</div>

                {/* ── Footer ── */}
                {buttonLabel && (
                    <div className="modal-footer">
                        <Button onClick={onButtonClick ?? onClose}>
                            {buttonLabel}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}