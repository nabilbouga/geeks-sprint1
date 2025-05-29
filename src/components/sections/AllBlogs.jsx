import React, { useState } from 'react';
import blogs from '../data/blogs';

const AllBlogs = () => {
  // State for tracking updated reactions and new comments
  const [blogPosts, setBlogPosts] = useState(blogs);
  const [newComment, setNewComment] = useState('');
  const [activeCommentId, setActiveCommentId] = useState(null);

  // Handle emoji reactions
  const handleReaction = (blogId, reactionType) => {
    setBlogPosts(
      blogPosts.map(blog => {
        if (blog.id === blogId) {
          return {
            ...blog,
            reactions: {
              ...blog.reactions,
              [reactionType]: blog.reactions[reactionType] + 1
            }
          };
        }
        return blog;
      })
    );
  };

  // Handle comment submission
  const handleCommentSubmit = (blogId) => {
    if (!newComment.trim()) return;

    const updatedBlogPosts = blogPosts.map(blog => {
      if (blog.id === blogId) {
        return {
          ...blog,
          comments: [
            ...blog.comments,
            {
              id: Date.now(), // Simple unique ID
              user: "CurrentUser", // In a real app, this would be the logged-in user
              text: newComment,
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            }
          ]
        };
      }
      return blog;
    });

    setBlogPosts(updatedBlogPosts);
    setNewComment('');
    setActiveCommentId(null);
  };

  // Toggle comment form visibility
  const toggleCommentForm = (blogId) => {
    setActiveCommentId(activeCommentId === blogId ? null : blogId);
    setNewComment('');
  };

  // Get total reaction count for a blog
/*  const getTotalReactions = (blog) => {
    return Object.values(blog.reactions).reduce((total, count) => total + count, 0);
  };*/

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Blog Posts</h2>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {blogPosts.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
                {/* Blog Image */}
                <div className="h-64 md:h-[400px] md:w-1/2 relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Blog Content */}
                <div className="md:w-1/2 p-6 flex flex-col">
                  {/* Author Circle */}
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-indigo-500 w-10 h-10 flex items-center justify-center text-white font-bold mr-3">
                      {blog.author.charAt(0)}
                    </div>
                    <p className="text-gray-500 text-sm">{blog.date}</p>
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div>
                      <a href="#" className="block group">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">{blog.title}</h3>
                      </a>
                      <p className="text-gray-700 mb-6">{blog.description}</p>
                    </div>
                    
                    <div>
                      {/* Reactions */}
                      <div className="flex flex-wrap mb-4">
                        <button 
                          onClick={() => handleReaction(blog.id, 'like')}
                          className="flex items-center mr-3 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full transition-colors"
                        >
                          <span className="text-xl mr-1">👍</span>
                          <span className="font-medium text-blue-800">{blog.reactions.like}</span>
                        </button>
                        <button 
                          onClick={() => handleReaction(blog.id, 'love')}
                          className="flex items-center mr-3 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-full transition-colors"
                        >
                          <span className="text-xl mr-1">❤️</span>
                          <span className="font-medium text-red-800">{blog.reactions.love}</span>
                        </button>
                        <button 
                          onClick={() => handleReaction(blog.id, 'wow')}
                          className="flex items-center mr-3 bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-full transition-colors"
                        >
                          <span className="text-xl mr-1">😮</span>
                          <span className="font-medium text-yellow-800">{blog.reactions.wow}</span>
                        </button>
                        <button 
                          onClick={() => handleReaction(blog.id, 'laugh')}
                          className="flex items-center bg-green-100 hover:bg-green-200 px-4 py-2 rounded-full transition-colors"
                        >
                          <span className="text-xl mr-1">😂</span>
                          <span className="font-medium text-green-800">{blog.reactions.laugh}</span>
                        </button>
                      </div>
                      
                      {/* Comments Counter */}
                      <button 
                        onClick={() => toggleCommentForm(blog.id)}
                        className="text-indigo-600 hover:underline font-medium"
                      >
                        {blog.comments.length > 0 ? `${blog.comments.length} Comments` : 'Add Comment'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comments Section - Only visible when toggled */}
              {activeCommentId === blog.id && (
                <div className="p-6 border-t">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Comments</h4>
                  
                  {/* Comment Form */}
                  <div className="mb-6">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all mb-3"
                      rows="3"
                      placeholder="Share your thoughts..."
                    ></textarea>
                    <button 
                      onClick={() => handleCommentSubmit(blog.id)}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Post Comment
                    </button>
                  </div>
                  
                  {/* Comments List */}
                  <div className="space-y-4">
                    {blog.comments.length === 0 ? (
                      <p className="text-gray-500 italic">Be the first to comment!</p>
                    ) : (
                      blog.comments.map(comment => (
                        <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <div className="rounded-full bg-indigo-500 w-8 h-8 flex items-center justify-center text-white font-bold mr-2">
                              {comment.user.charAt(0)}
                            </div>
                            <span className="font-medium mr-2 text-gray-800">{comment.user}</span>
                            <span className="text-gray-500 text-sm">{comment.date}</span>
                          </div>
                          <p className="text-gray-800">{comment.text}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
