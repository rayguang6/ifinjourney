// CommunityFriends.js
import React from 'react';

const CommunityFriends = () => {
  // Updated dummy data to include profileImage URLs
  const friends = [
    { id: 1, name: 'Ahmed Khan', status: 'online', profileImage: 'https://i.pravatar.cc/300?img=1' },
    { id: 2, name: 'Aisha Zaman', status: 'offline', profileImage: 'https://i.pravatar.cc/300?img=2' },
    { id: 3, name: 'Mohamed Al Farsi', status: 'online', profileImage: 'https://i.pravatar.cc/300?img=3' },
    // Add more friends as needed
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="flex items-center justify-between mb-2 p-2 hover:bg-gray-100 cursor-pointer rounded">
            <div className="flex items-center">
              <img
                src={friend.profileImage}
                alt={`${friend.name}'s profile`}
                className="w-10 h-10 rounded-full mr-2 object-cover"
              />
              <div>
                <h4 className="font-semibold">{friend.name}</h4>
                <span className={`text-sm ${friend.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
                  {friend.status}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CommunityFriends;
