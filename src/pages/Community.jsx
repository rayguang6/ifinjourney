import React, { useState } from 'react';
import { posts, groups } from '../constants';
import { CommunityGroup, CommunityPost } from '../components';

const Community = () => {
  const [activeGroup, setActiveGroup] = useState(groups[0]);

  const handleGroupClick = (group) => {
    setActiveGroup(group);
  };

  return (
    <div className="container mx-auto p-4 flex overflow-hidden">
      {/* Left Sidebar for Groups */}
      <div className="ml-8 w-64 flex-shrink-0 bg-white p-4 rounded-lg shadow fixed h-full overflow-auto left-0" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-lg font-semibold mb-4">Groups</h2>
        {groups.map((group) => (
          <CommunityGroup
            key={group.id}
            group={group}
            isActive={group.id === activeGroup.id}
            onClick={() => handleGroupClick(group)}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow ml-64 mr-64 pt-4">
        <h3 className="text-xl font-semibold mb-4">{activeGroup.name}</h3>
        {posts
          .filter((post) => post.groupId === activeGroup.id)
          .map((post) => (
            <CommunityPost key={post.id} post={post} />
          ))}
      </div>

      {/* Right Side Content */}
      <div className="mr-8 w-64 flex-shrink-0 bg-white p-4 rounded-lg shadow fixed right-0 h-1/2 overflow-auto" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-lg font-semibold mb-4">Islamic Finance Insights</h2>
        <p>Discover the latest in Islamic finance, explore articles, news, and resources tailored for our community members.</p>
      </div>

      {/* Chat Rectangle at Bottom Right */}
      <div className="fixed bottom-4 right-4 bg-white p-3 rounded-lg shadow flex items-center cursor-pointer" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <span className="font-semibold">Chats</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </div>
  );
};

export default Community;
