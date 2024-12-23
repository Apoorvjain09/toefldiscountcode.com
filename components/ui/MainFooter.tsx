import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function MainFooter() {
    return (
        <footer className="bg-gray-200">
            <div className="container px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex items-center justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text lg:justify-start">
                            <h2 className="text-3xl font-extrabold">TOEFL Go Global</h2>
                        </div>

                        <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground lg:text-left">
                            MJ Study Abroad is one of the Leading Study Abroad Consultants (as per ETS) providing education loan and visa services as well.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-primary">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="/toefl-voucher" className="text-muted-foreground transition hover:text-primary">
                                        Vouchers
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/classes" className="text-muted-foreground transition hover:text-primary">
                                        Classes
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/vocab-ladder" className="text-muted-foreground transition hover:text-primary">
                                        Vocabulary
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-primary">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="/book" className="text-muted-foreground transition hover:text-primary">
                                        Books
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/book-counseling" className="text-muted-foreground transition hover:text-primary">
                                        Counseling
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/courses" className="text-muted-foreground transition hover:text-primary">
                                        Courses
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/classes" className="text-muted-foreground transition hover:text-primary">
                                        Lectures
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-primary">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7" className="text-muted-foreground transition hover:text-primary">
                                        Join Community
                                    </Link>
                                </li>

                                <li>
                                    <Link href="https://gregoglobal.com/" className="text-muted-foreground transition hover:text-primary">
                                        GRE website
                                    </Link>
                                </li>

                                <li>
                                    <Link href="http://ieltsgoglobal.com/" className="text-muted-foreground transition hover:text-primary">
                                        IELTS website
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-primary">Newsletter</p>

                            <div className="mt-6">
                                <form className="space-y-4">
                                    <Input type="email" placeholder="Enter your email" className="w-full" />
                                    <Button type="submit" className="w-full">Subscribe</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

