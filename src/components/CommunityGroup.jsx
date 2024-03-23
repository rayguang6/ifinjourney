// Group.js
import React from 'react';

function CommunityGroup({ group, isActive, onClick }) {
  return (
    <div
      className={`bg-white p-4 rounded shadow mb-4 cursor-pointer ${
        isActive ? 'bg-blue-200' : ''
      }`}
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold mb-2">{group.name}</h2>
      {/* Additional information about the group can be added here */}
    </div>
  );
}

export default CommunityGroup;
