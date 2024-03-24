import React from 'react';
import { FiPlus } from 'react-icons/fi'; // Import the plus icon from Feather icons
import { me } from '../assets/images';

const ChallengeMembers = () => {
  // Example array representing current members (could be fetched from an API)
  const members = [
    { id: 1, name: 'Member 1', avatar: me },
    { id: 2, name: 'Member 2', avatar: 'https://i.pravatar.cc/300?img=16' },
    { id: 3, name: 'Member 3', avatar: 'https://i.pravatar.cc/300?img=11' },
  ];

  const totalSlots = 4; // Total number of slots including empty ones

  return (
    <div className="learning-progress bg-white shadow-sm w-full px-4 py-4 h-full rounded-2xl">
      <h1 className='text-lg font-semibold'>RHB Syariah Challenge</h1>
      <p className='text-slate-gray text-xs'>You Need 1 more member to start the challenge</p>
      
      <div className="flex items-center justify-start gap-4 mt-4">
        {members.map(member => (
          <div key={member.id} className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
            <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
          </div>
        ))}

        {members.length < totalSlots && (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <FiPlus className="text-2xl text-gray-600" /> {/* Adjust the icon size and color as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeMembers;
