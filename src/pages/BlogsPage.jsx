import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import blogs from '../components/data/blogs';
import { useAuth } from '../context/AuthContext';

const BlogsPage = () => {
  const { isAuthenticated, loading } = useAuth();
  const [blogPosts, setBlogPosts] = useState(blogs);
  const [newComment, setNewComment] = useState('');
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [activeSorting, setActiveSorting] = useState('newest'); // newest, popular, comments

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

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
  const getTotalReactions = (blog) => {
    return Object.values(blog.reactions).reduce((total, count) => total + count, 0);
  };

  // Sort blogs based on active sorting
  const getSortedBlogs = () => {
    switch (activeSorting) {
      case 'popular':
        return [...blogPosts].sort((a, b) => getTotalReactions(b) - getTotalReactions(a));
      case 'comments':
        return [...blogPosts].sort((a, b) => b.comments.length - a.comments.length);
      case 'newest':
      default:
        // Assuming newest based on ID (higher ID = newer)
        return [...blogPosts].sort((a, b) => b.id - a.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}

      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-36 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Travel Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover amazing destinations, travel tips, and experiences from around Morocco</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 pt-16">
        {/* Create New Blog */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Create New Blog</h3>
            <div className="flex items-center gap-2">
              <span className="text-indigo-700 font-medium">TravelGeek</span>
              <div className="rounded-full bg-indigo-500 w-10 h-10 flex items-center justify-center text-white font-bold">
                <span>Y</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2 space-y-3">
              <input 
                type="text" 
                placeholder="Blog title" 
                className="bg-indigo-50 text-indigo-900 border border-indigo-100 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder-indigo-300"
              />
              
              <textarea
                placeholder="Write a short description..."
                className="bg-indigo-50 text-indigo-900 border border-indigo-100 rounded-lg py-2 px-4 w-full h-24 focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder-indigo-300"
              ></textarea>
            </div>
            
       
          </div>
          
          <div className="flex justify-end">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Post Blog
            </button>
          </div>
        </div>

        {/* Sorting Options */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button 
                onClick={() => setActiveSorting('newest')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSorting === 'newest' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Newest
              </button>
              <button 
                onClick={() => setActiveSorting('popular')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSorting === 'popular' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Popular
              </button>
              <button 
                onClick={() => setActiveSorting('comments')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSorting === 'comments' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Most Discussed
              </button>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {getSortedBlogs().map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col md:flex-row">
                {/* Blog Image */}
                <div className="h-64 md:h-[400px] md:w-1/2 relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                {/* Blog Content */}
                <div className="md:w-1/2 p-6 flex flex-col">
                  {/* Author Info */}
                  <div className="flex items-center mb-3">
                    <div className="rounded-full bg-indigo-500 w-10 h-10 flex items-center justify-center text-white font-bold mr-3">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-indigo-700">{blog.author}</p>
                      <p className="text-gray-500 text-xs">{blog.date}</p>
                    </div>
                  </div>
                  
                  <div>
                    <a href="#" className="block group">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-indigo-700 transition-colors">{blog.title}</h3>
                    </a>
                    <p className="text-gray-700 mb-6">{blog.description}</p>
                  </div>
                    
                  <div className="mt-auto">
                    {/* Reactions */}
                    <div className="flex mb-3">
                      <button 
                        onClick={() => handleReaction(blog.id, 'like')}
                        className="flex items-center mr-2 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-full transition-colors"
                      >
                        <span className="text-xl mr-1">👍</span>
                        <span className="font-medium text-blue-800">{blog.reactions.like}</span>
                      </button>
                      <button 
                        onClick={() => handleReaction(blog.id, 'love')}
                        className="flex items-center mr-2 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-full transition-colors"
                      >
                        <span className="text-xl mr-1">❤️</span>
                        <span className="font-medium text-red-800">{blog.reactions.love}</span>
                      </button>
                      <button 
                        onClick={() => handleReaction(blog.id, 'wow')}
                        className="flex items-center mr-2 bg-yellow-100 hover:bg-yellow-200 px-3 py-1 rounded-full transition-colors"
                      >
                        <span className="text-xl mr-1">😮</span>
                        <span className="font-medium text-yellow-800">{blog.reactions.wow}</span>
                      </button>
                      <button 
                        onClick={() => handleReaction(blog.id, 'laugh')}
                        className="flex items-center bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors"
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
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl p-8 mt-12 max-w-5xl mx-auto">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Share Your Travel Story</h3>
              <p className="text-blue-100">Join our community and share your amazing adventures with fellow travelers</p>
            </div>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-colors">
              Start Writing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
