const LoadingForumSkeleton = () => {
    return (
        <div className='flex flex-row justify-evenly p-5'>
            <div className='lg:w-[70%] flex flex-col'>
                <div className='flex items-center justify-center my-4'>
                    <form className='w-full max-w-lg'>
                        <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                            <img
                                src="assets/guest-account-logo.jpg"
                                alt="User Avatar"
                                className="rounded-full w-10 h-10 mr-4"
                            />
                            <input
                                type="text"
                                placeholder="Write something..."
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
                    <div className='bg-gray-500 animate-pulse p-4 my-4 rounded-lg shadow-md w-[100%] lg:w-[90%]'>
                        <div className='flex items-center mb-2'>
                            <img
                                src="assets/guest-account-logo.jpg"
                                alt="User Avatar"
                                className="rounded-full w-8 h-8 mr-2"
                            />
                            <div>
                                <p className='font-bold'></p>
                            </div>
                        </div>
                        <h2 className='text-lg'></h2>
                        <p className='mt-2'></p>
                        <span className="flex items-center mb-3">
                            <span className="h-px flex-1 bg-gray-500"></span>
                            <span className="h-px flex-1 bg-gray-500"></span>
                        </span>
                        <div className='flex items-center justify-evenly gap-2'>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-gray-500 animate-pulse p-4 my-4 rounded-lg shadow-md w-[100%] lg:w-[90%]'>
                        <div className='flex items-center mb-2'>
                            <img
                                src="assets/guest-account-logo.jpg"
                                alt="User Avatar"
                                className="rounded-full w-8 h-8 mr-2"
                            />
                            <div>
                                <p className='font-bold'></p>
                            </div>
                        </div>
                        <h2 className='text-lg'></h2>
                        <p className='mt-2'></p>
                        <span className="flex items-center mb-3">
                            <span className="h-px flex-1 bg-gray-500"></span>
                            <span className="h-px flex-1 bg-gray-500"></span>
                        </span>
                        <div className='flex items-center justify-evenly gap-2'>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-gray-500 animate-pulse p-4 my-4 rounded-lg shadow-md w-[100%] lg:w-[90%]'>
                        <div className='flex items-center mb-2'>
                            <img
                                src="assets/guest-account-logo.jpg"
                                alt="User Avatar"
                                className="rounded-full w-8 h-8 mr-2"
                            />
                            <div>
                                <p className='font-bold'></p>
                            </div>
                        </div>
                        <h2 className='text-lg'></h2>
                        <p className='mt-2'></p>
                        <span className="flex items-center mb-3">
                            <span className="h-px flex-1 bg-gray-500"></span>
                            <span className="h-px flex-1 bg-gray-500"></span>
                        </span>
                        <div className='flex items-center justify-evenly gap-2'>

                        </div>
                    </div>
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
                    <button className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
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

export default LoadingForumSkeleton;