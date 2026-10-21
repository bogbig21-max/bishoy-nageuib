import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <i className="fa-solid fa-circle-check"></i>
      <span>{message}</span>
    </div>
  );
};
