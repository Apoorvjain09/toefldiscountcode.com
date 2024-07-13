"use client";

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Lock, ThumbsUp } from 'lucide-react';
import { FaComment } from 'react-icons/fa';

type Comment = {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
};

type Post = {
  id?: string;
  title: string;
  content: string;
  userId: string;
  createdAt: Date;
  likes: number;
  comments: Comment[];
};

type NewPost = Omit<Post, 'createdAt' | 'likes' | 'comments'>;

export default function Forum() {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<NewPost>({ title: '', content: '', userId: '' });
  const [commentContent, setCommentContent] = useState<{ [key: string]: string }>({});
  const [showComments, setShowComments] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get<Post[]>('/api/posts');
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postToSubmit: Post = {
      ...newPost,
      userId: user?.id || 'Guest',
      createdAt: new Date(),
      likes: 0,
      comments: [],
    };
    const response = await axios.post('/api/posts', postToSubmit);
    setPosts([...posts, response.data]);
    setNewPost({ title: '', content: '', userId: '' });
  };

  const handleLike = async (postId: string) => {
    const response = await axios.patch('/api/posts', { id: postId, action: 'like' });
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, likes: response.data.likes } : post
    );
    setPosts(updatedPosts);
  };

  const handleCommentChange = (postId: string, content: string) => {
    setCommentContent(prevState => ({
      ...prevState,
      [postId]: content,
    }));
  };

  const handleCommentSubmit = async (e: React.FormEvent, postId: string) => {
    e.preventDefault();
    const content = commentContent[postId];
    if (!content) return;

    const response = await axios.patch('/api/posts', {
      id: postId,
      action: 'comment',
      userId: user?.id || 'Guest',
      content,
    });
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, comments: response.data.comments } : post
    );
    setPosts(updatedPosts);
    setCommentContent(prevState => ({
      ...prevState,
      [postId]: '',
    }));
  };

  const toggleComments = (postId: string) => {
    setShowComments(prevState => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <div className='bg-gray-200'>
      <h1 className='flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-400 rounded-t-lg w-full text-center h-[20vh] font-extrabold text-3xl text-white'>
        Toefl iBt Study Group
      </h1>
      <div className='bg-white text-sm flex items-center justify-evenly h-[50px]'>
        <div className='font-bold flex flex-row gap-1 '><Lock />Public group</div>
        <div className='font-bold'>1200+ <span className='text-gray-500'>members</span></div>
        <span className='font-bold text-gray-500'>For batch 2024-25</span>
      </div>
      <div className='flex items-center justify-center my-4'>
        <form onSubmit={handlePostSubmit} className='w-full max-w-lg'>
          <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
            <img
              src="assets/guest-account-logo.jpg"
              alt="User Avatar"
              className="rounded-full w-10 h-10 mr-4"
            />
            <input
              type="text"
              placeholder="Write something..."
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full bg-gray-100 rounded-full p-3 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Post
          </button>
        </form>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {posts.map(post => (
          <div key={post.id} className='bg-white p-4 my-4 rounded-lg shadow-md w-[60%]'>
            <div className='flex items-center mb-2'>
              <img
                src="assets/guest-account-logo.jpg"
                alt="User Avatar"
                className="rounded-full w-8 h-8 mr-2"
              />
              <div>
                <p className='font-bold'>{post.userId}</p>
                {/* <p className='text-xs text-gray-500'>{new Date(post.createdAt).toLocaleString()}</p> */}
              </div>
            </div>
            <h2 className='font-bold text-lg'>{post.title}</h2>
            <p className='mt-2'>{post.content}</p>
            <div className='flex items-center justify-evenly gap-2'>
              <button onClick={() => handleLike(post.id!)} className='flex items-center gap-1'>
                <ThumbsUp /> {post.likes} Like
              </button>
              <button onClick={() => toggleComments(post.id!)} className='flex items-center gap-1'>
                <FaComment /> {post.comments.length} Comment{post.comments.length !== 1 && 's'}
              </button>
            </div>
            {showComments[post.id!] && (
              <>
                <form onSubmit={(e) => handleCommentSubmit(e, post.id!)} className='mt-2'>
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentContent[post.id!] || ''}
                    onChange={(e) => handleCommentChange(post.id!, e.target.value)}
                    className="w-full bg-gray-100 rounded-full p-3 focus:outline-none"
                  />
                  <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Post Comment
                  </button>
                </form>
                <div className='mt-4'>
                  {post.comments.map(comment => (
                    <div key={comment.id} className='bg-gray-100 p-2 rounded-lg mt-2'>
                      <p className='font-bold'>{comment.userId}</p>
                      <p className='text-sm'>{comment.content}</p>
                      {/* <p className='text-xs text-gray-500'>{new Date(comment.createdAt).toLocaleString()}</p> */}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
