import React from "react";
import { CheckCircle, XCircle, AlertTriangle, Loader2, X } from "lucide-react"; // Import Lucide icons

interface AlertProps {
  message: string;
  type: "success" | "error" | "loading" | "warning";
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "error":
        return <XCircle className="h-6 w-6 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-yellow-600" />;
      case "loading":
        return <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />;
      default:
        return null;
    }
  };

  return (
    <div
      role="alert"
      className="fixed top-4 right-4 z-50 rounded-xl border border-gray-200 bg-white p-4 shadow-lg flex items-center gap-4 animate-fade-in"
    >
      {getIcon()}
      <div className="flex-1 text-gray-900 font-medium">{message}</div>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-600">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Alert;
