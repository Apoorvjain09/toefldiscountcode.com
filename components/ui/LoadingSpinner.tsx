import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
      <div className="bg-white dark:bg-gray-800 flex justify-center items-center w-[90vw] sm:w-full h-[95vh] p-5">
        <div className="border border-gray-200 p-2 rounded-md shadow-lg shadow-orange-300">
          <div className="flex items-end gap-1">
            <span className="text-5xl sm:text-6xl font-semibold dark:text-white">T</span>
            <div className="loader"></div> {/* Simple CSS loader */}
            <span className="text-5xl sm:text-6xl font-semibold dark:text-white">efl</span>
            <span className="text-5xl sm:text-6xl font-semibold dark:text-white">Gl</span>
            <div className="loader"></div> {/* Simple CSS loader */}
            <span className="text-5xl sm:text-6xl font-semibold text-orange-500">Bal</span>
          </div>
        </div>
      </div>
  );
};

export default LoadingSpinner;
