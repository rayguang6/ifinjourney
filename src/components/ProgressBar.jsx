// ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
  const containerStyles = {
    height: 24,
    width: '100%',
    backgroundColor: "#DCE3DE",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#4ACD85',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
