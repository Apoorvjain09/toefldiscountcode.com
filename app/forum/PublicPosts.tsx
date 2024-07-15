import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Lock, ThumbsUp } from 'lucide-react';
import { FaComment } from 'react-icons/fa';
import UniversityShortlistingModal from '../university-shortlisting/UniversityShortlistingModal';


export default function PublicPosts() {


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

    const { user } = useUser();
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState<NewPost>({ title: '', content: '', userId: '' });
    const [commentContent, setCommentContent] = useState<{ [key: string]: string }>({});
    const [showComments, setShowComments] = useState<{ [key: string]: boolean }>({});
    const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
    const [showShortlistingModal, setShowShortlistingModal] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get<Post[]>('/api/posts');
            setPosts(response.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
        }
        fetchPosts();
    }, []);

    const handlePostSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const postToSubmit: Post = {
            ...newPost,
            userId: user?.firstName || 'Guest',
            createdAt: new Date(),
            likes: 0,
            comments: [],
        };
        const response = await axios.post('/api/posts', postToSubmit);
        setPosts([response.data, ...posts]);
        setNewPost({ title: '', content: '', userId: '' });
    };

    const handleLike = async (postId: string) => {
        if (likedPosts[postId]) return; // Prevent multiple likes

        const response = await axios.patch('/api/posts', { id: postId, action: 'like' });
        const updatedPosts = posts.map(post =>
            post.id === postId ? { ...post, likes: response.data.likes } : post
        );
        setPosts(updatedPosts);
        setLikedPosts(prevState => ({
            ...prevState,
            [postId]: true,
        }));
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
            userId: user?.firstName || 'Guest',
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
        <div className='flex flex-row justify-evenly p-5'>
            <div className='lg:w-[70%] flex flex-col'>
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
                        <div key={post.id} className='bg-white p-4 my-4 rounded-lg shadow-md w-[100%] lg:w-[90%]'>
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
                            <h2 className='text-lg'>{post.title}</h2>
                            <p className='mt-2'>{post.content}</p>
                            <span className="flex items-center mb-3">
                                <span className="h-px flex-1 bg-gray-500"></span>
                                <span className="h-px flex-1 bg-gray-500"></span>
                            </span>
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

            <div className='hidden lg:flex flex-col w-[30%] gap-5'>
                <div className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow xl:p-8 lg:p-5 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Universities</h5>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Harvard University
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            United State of America
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        4.7%
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center ">
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Stanford University
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            United State of America
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        4.3%
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            University of Cambridge
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            United Kingdoms
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        21%
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center ">
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            University of Oxford
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            United Kingdoms
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        17.5%
                                    </div>
                                </div>
                            </li>
                            <li className="pt-3 pb-0 sm:pt-4">
                                <div className="flex items-center ">
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Massachusetts (MIT)
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            United State of America
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        6.7%
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <UniversityShortlistingModal
                        isOpen={showShortlistingModal}
                        onClose={() => setShowShortlistingModal(false)}
                        onComplete={() => { setShowShortlistingModal(false) }}
                    />

                    <button onClick={() => setShowShortlistingModal(true)} className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="space-y-6">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Get Personalized Shortlisting</h5>
                            <div>
                                <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <div className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check Eligibility</div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}