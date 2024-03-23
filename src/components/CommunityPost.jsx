import React from 'react';

function CommunityPost({ post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-2">Author: {post.author}</span>
          ·
          <span className="ml-2">Posted on: {new Date(post.timestamp).toLocaleDateString()}</span>
        </div>
        {post.image && (
          <img src={post.image} alt="Post" className="w-full max-h-[300px] mb-4 rounded-lg object-cover object-center" />
        )}
        <p className="text-gray-700 mb-4">{post.content}</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
          <span>Share</span>
        </button>
      </div>
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Comments ({post.comments.length}):</h3>
        <ul>
          {post.comments.map((comment, index) => (
            <li key={index} className="mb-4 last:mb-0">
              <p className="text-sm font-semibold text-gray-800">{comment.author}</p>
              <p className="text-sm text-gray-600">{comment.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommunityPost;
