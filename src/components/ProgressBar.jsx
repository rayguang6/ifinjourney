// ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-4 bg-gray-300 rounded-full overflow-hidden relative">
      <div
        className="h-full bg-green-500 transition-all duration-1000 ease-in-out flex items-center justify-end"
        style={{ width: `${progress}%` }}
      >
        <span className="text-white font-bold text-xs px-2 absolute top-0 left-0 bottom-0 flex items-center">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
