"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Heart, MessageCircle, MoreHorizontal, Reply, Trash, Edit2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Comment {
    id: string
    user: {
        name: string
        avatar: string
    }
    content: string
    timestamp: string
    likes: number
    replies: Comment[]
    isLiked?: boolean
}

export default function VoucherCommentComponent() {
    const [canOnlyLoadLimitedCommentsDisplay, setCanOnlyLoadLimitedCommentsDisplay] = useState(false)
    const [comments, setComments] = useState<Comment[]>([
        {
            id: "1",
            user: {
                name: "Daniel Smith",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "Thank you so much! The voucher worked, and I saved $40 on my TOEFL registration.",
            timestamp: "2 days ago",
            likes: 15,
            replies: [
                {
                    id: "2",
                    user: {
                        name: "Admin",
                        avatar: "/favicon/favicon-96x96.png",
                    },
                    content: "Glad to hear that, Daniel! Keep checking for more discounts in the future.",
                    timestamp: "1 day ago",
                    likes: 8,
                    replies: [],
                },
            ],
        },
        {
            id: "3",
            user: {
                name: "Emily Johnson",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "Wow! The 'SUMMER22' code worked perfectly for me. This was a huge help!",
            timestamp: "3 days ago",
            likes: 10,
            replies: [
                {
                    id: "4",
                    user: {
                        name: "Admin",
                        avatar: "/favicon/favicon-96x96.png",
                    },
                    content: "That’s fantastic! Make sure to share with others who might need it.",
                    timestamp: "2 days ago",
                    likes: 6,
                    replies: [],
                },
            ],
        },
        {
            id: "5",
            user: {
                name: "Carlos Mendes",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "Unfortunately, the voucher didn’t work for me. Is there any new one available?",
            timestamp: "4 days ago",
            likes: 4,
            replies: [
                {
                    id: "6",
                    user: {
                        name: "Admin",
                        avatar: "/favicon/favicon-96x96.png",
                    },
                    content: "Sorry about that, Carlos. Some codes have a limited number of uses. Keep an eye on the official pages for updates!",
                    timestamp: "3 days ago",
                    likes: 3,
                    replies: [],
                },
            ],
        },
        {
            id: "7",
            user: {
                name: "Sophia Lee",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "This is amazing! I just saved $20 with 'SOCL20'. Thank you so much!",
            timestamp: "5 days ago",
            likes: 12,
            replies: [],
        },
        {
            id: "8",
            user: {
                name: "Rajesh Kumar",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "Hey, I randomly tried 'FB20' and it worked! Thank you for sharing these codes!",
            timestamp: "6 days ago",
            likes: 9,
            replies: [
                {
                    id: "9",
                    user: {
                        name: "Admin",
                        avatar: "/favicon/favicon-96x96.png",
                    },
                    content: "Awesome! Thanks for confirming. Hope you do well on your test!",
                    timestamp: "5 days ago",
                    likes: 5,
                    replies: [],
                },
            ],
        },
        {
            id: "10",
            user: {
                name: "Lisa Brown",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "I tried multiple vouchers, but none of them worked. Are there any updates?",
            timestamp: "7 days ago",
            likes: 3,
            replies: [
                {
                    id: "11",
                    user: {
                        name: "Admin",
                        avatar: "/favicon/favicon-96x96.png",
                    },
                    content: "Sorry to hear that, Lisa. Some codes expire quickly. We’ll update as soon as we get new ones.",
                    timestamp: "6 days ago",
                    likes: 2,
                    replies: [],
                },
            ],
        },
        {
            id: "12",
            user: {
                name: "Ahmed Hossain",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "Thanks a lot! I used 'ENTRAYNTOEFL10' and got a discount.",
            timestamp: "8 days ago",
            likes: 11,
            replies: [],
        },
        {
            id: "13",
            user: {
                name: "Olivia Green",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "Does anyone know if there will be a new discount next month?",
            timestamp: "9 days ago",
            likes: 5,
            replies: [
                {
                    id: "14",
                    user: {
                        name: "Admin",
                        avatar: "/favicon/favicon-96x96.png",
                    },
                    content: "New codes are usually released every few weeks. Keep checking!",
                    timestamp: "8 days ago",
                    likes: 4,
                    replies: [],
                },
            ],
        },
        {
            id: "15",
            user: {
                name: "Jake Turner",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "It worked! I just saved $30. Thank you so much!",
            timestamp: "10 days ago",
            likes: 14,
            replies: [],
        },
        {
            id: "16",
            user: {
                name: "Megan Foster",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: "None of the vouchers seem to be working for me. Any idea why?",
            timestamp: "11 days ago",
            likes: 3,
            replies: [
                {
                    id: "17",
                    user: {
                        name: "Admin",
                        avatar: "/favicon/favicon-96x96.png",
                    },
                    content: "Hey Megan, some codes have region restrictions. Try checking if they apply in your country.",
                    timestamp: "10 days ago",
                    likes: 2,
                    replies: [],
                },
            ],
        },
    ]);

    const [newComment, setNewComment] = useState("")

    const handleAddComment = () => {
        if (!newComment.trim()) return

        const comment: Comment = {
            id: Date.now().toString(),
            user: {
                name: "You",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            content: newComment,
            timestamp: "Just now",
            likes: 0,
            replies: [],
        }

        setComments([comment, ...comments])
        setNewComment("")
    }

    const handleLike = (commentId: string, isReply = false, parentId?: string) => {
        setComments(
            comments.map((comment) => {
                if (!isReply && comment.id === commentId) {
                    return {
                        ...comment,
                        isLiked: !comment.isLiked,
                        likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                    }
                }
                if (isReply && parentId) {
                    return {
                        ...comment,
                        replies: comment.replies.map((reply) =>
                            reply.id === commentId
                                ? { ...reply, isLiked: !reply.isLiked, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 }
                                : reply,
                        ),
                    }
                }
                return comment
            }),
        )
    }

    const CommentComponent = ({
        comment,
        isReply = false,
        parentId = "",
    }: {
        comment: Comment;
        isReply?: boolean;
        parentId?: string
    }) => (
        <div className={cn("group relative space-y-4", isReply && "ml-12 mt-4")}>
            <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                    <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                        <h4 className="font-semibold">{comment.user.name}</h4>
                        <span className="text-sm text-gray-400 muted-foreground">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm text-foreground">{comment.content}</p>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                            onClick={() => handleLike(comment.id, isReply, parentId)}
                        >
                            <Heart className={cn("mr-2 h-4 w-4", comment.isLiked && "fill-current text-red-500")} />
                            <span className="text-sm">{comment.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Reply className="mr-2 h-4 w-4" />
                            <span className="text-sm">Reply</span>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Edit2 className="mr-2 h-4 w-4" />
                                    Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                    <Trash className="mr-2 h-4 w-4" />
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            {comment.replies.map((reply) => (
                <CommentComponent key={reply.id} comment={reply} isReply={true} parentId={comment.id} />
            ))}
        </div>
    )

    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardContent className="p-6">
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your Avatar" />
                            <AvatarFallback >YA</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                            <Textarea
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="min-h-[100px] resize-none"
                            />
                            <div className="flex justify-end">
                                <Button onClick={handleAddComment} className="px-6">
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Comment
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <CommentComponent key={comment.id} comment={comment} />
                        ))}
                        <div className="h-1 w-full border-t-2 border-dashed"></div>
                        <Link href="#">
                            <Button className="mt-5" disabled={canOnlyLoadLimitedCommentsDisplay} onClick={() => { setCanOnlyLoadLimitedCommentsDisplay(true) }}>{canOnlyLoadLimitedCommentsDisplay ? "Only latest 15 comments are displayed!" : "Load More"}</Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

