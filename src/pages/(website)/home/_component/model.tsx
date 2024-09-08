import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="flex justify-center mb-4 relative w-32 h-32 overflow-hidden rounded-full border-2 border-gray-300">
          {/* Add your animated content here if needed */}
        </div>
        {/* Example content */}
        <h2 className="text-xl font-bold mb-4 text-center">
          Your modal content goes here.
        </h2>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
