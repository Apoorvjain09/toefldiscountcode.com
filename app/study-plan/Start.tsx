
interface StartProps {
    onNext: () => void;
  }
  

const Start: React.FC<StartProps> = ({ onNext }) => {
    return (
        <>
            <section className="rounded-t-lg bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Generate your own

                            <span className="sm:block"> Toefl Study Plan </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Let ToeflGoGlobal's Artificial inteligence help you in your journey by suggesting lectures and personalized Mock tests.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                onClick={onNext}
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt=""
                                    src="https://www.dropbox.com/scl/fi/bqqpex40dlb75v0lmowu5/BGStudyPlanTGG.webp?rlkey=cv8s6li6rp375x53w6m00j45v&raw=1"
                                    className="rounded-lg absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Get Personalized TOEFL Study Plans
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    Our AI-powered platform provides personalized study plans and mock tests tailored to your TOEFL preparation needs. Join our community and let us help you succeed in your TOEFL journey.
                                </p>

                                <a
                                    href="#"
                                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                            <div className="mx-auto max-w-md text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">TOEFL Preparation Resources</h2>

                                    <p className="mt-4 text-gray-500">
                                        Explore a range of TOEFL preparation resources including study guides, practice tests, and more to help you achieve your best score.
                                    </p>
                                </header>
                                
                                <a
                                    href="/book"
                                    className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                                >
                                    Browse Resources
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <a href="/study-plan" className="group block">
                                        <img
                                            src="https://www.dropbox.com/scl/fi/2kdlu9e0gfzn3tyc4c1jj/TOEFLStudyGuide.webp?rlkey=0paed4tbmg0i3krl536i7b0lj&raw=1"
                                            alt=""
                                            className="aspect-square w-full rounded object-cover"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                TOEFL Study Guide
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">Free</p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="/study-plan" className="group block">
                                        <img
                                            src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy-reading_23-2150797622.jpg?t=st=1719321935~exp=1719325535~hmac=baaf5649865cfac46bf09ede7a817968036938021ab0dc0ed8bef91bd00db79a&w=740"
                                            alt=""
                                            className="aspect-square w-full rounded object-cover"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Get Study Plan
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">Free</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Start;