import React, { useState } from 'react';
import { posts, groups } from '../constants';
import { CommunityFriends, CommunityNews, CommunityPost } from '../components';

const Community = () => {


  return (
    <div className="container mx-auto p-4 flex overflow-hidden">
      {/* Left Side Content - Friends List */}
      <div className="fixed left-0 h-full overflow-auto w-3/12">
        <CommunityFriends />
      </div>
    
      {/* Main Content Area */}
      <div className=" ml-64 mr-64 pt-4 w-6/12">      
        {posts.map((post) => (
            <CommunityPost key={post.id} post={post} />
          ))}
      </div>

      {/* Right Side Content */}
      <div className="mr-8 w-3/12 flex-shrink-0 bg-white p-4 rounded-lg shadow fixed right-0 h-3/4 overflow-auto" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <CommunityNews/>
      </div>

      {/* Chat Rectangle at Bottom Right */}
      <div className="fixed left-4 bottom-4 bg-white p-3 rounded-lg shadow flex items-center cursor-pointer" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <span className="font-semibold">Chats</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </div>
  );
};

export default Community;
