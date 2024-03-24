import React from 'react';

function CommunityPost({ post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <img className='rounded-full object-cover' src={post.authorAvatar} alt="" width={64} height={64} />
          <div className="flex flex-col ml-4">
            <span className="text-lg font-bold">{post.author}</span>
            <span className="text-slate-gray">Posted on: {new Date(post.timestamp).toLocaleDateString()}</span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
        {post.image && (
          <img src={post.image} alt="Post" className="w-full max-h-[300px] mb-4 rounded-lg object-cover object-center" />
        )}
        <p className="text-gray-700 mb-4">{post.content}</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        {/* Interaction buttons */}
      </div>
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Comments ({post.comments.length}):</h3>
        <ul>
          {post.comments.map((comment, index) => (
            <li key={index} className="mb-4 last:mb-0 flex">
              <img src={comment.avatar} alt={comment.author} className="rounded-full object-cover w-10 h-10 mr-4" />
              <div>
                <p className="text-sm font-semibold text-gray-800">{comment.author}</p>
                <p className="text-sm text-gray-600">{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommunityPost;
