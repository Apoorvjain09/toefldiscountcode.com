"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface ImageItem {
    id: number
    src: string
    alt: string
    caption?: string
}

export default function ToeflVoucherImageGallery() {

    // Sample images - replace with your actual images
    const images: ImageItem[] = [
        // {
        //     id: 1,
        //     src: "https://www.dropbox.com/scl/fi/j146ctl1scmlvczaqtwfj/1.png?rlkey=2tfhj1o8570tex9p5h0uoxsg8&st=7krhsna5&raw=1",
        //     alt: "Image 1",
        //     caption: "Step1 ➡️ Click 'My Account'",
        // },
        // {
        //     id: 2,
        //     src: "https://www.dropbox.com/scl/fi/n76h31wik61lexqlhdalp/2.png?rlkey=kiz8m84ap0bbzog1fp3jy41k1&st=ahsvrway&raw=1",
        //     alt: "Image 2",
        //     caption: "Step2 ➡️ Click 'Manage My Account'",
        // },
        // {
        //     id: 3,
        //     src: "https://www.dropbox.com/scl/fi/7cd4af5so4qsrc64kg70t/video_with_Voice.mp4?rlkey=5hhlzwhbap8keiwtxqd98gcxj&st=pnty4uh4&raw=1",
        //     alt: "Video 2",
        //     caption: "Step3 ➡️ Do What is Told in the VIDEO ☺️",
        // },
        // {
        //     id: 4,
        //     src: "https://www.dropbox.com/scl/fi/niwrkkppyuyog8kyxz0pj/4_final.png?rlkey=vklyydemqmgbqqemkkoyyko5i&st=mdgmwej7&raw=1",
        //     alt: "Image 3",
        //     caption: "Step4 ➡️ Write What you wrote in the AGENT CODE section. ENJOY YOUR DISCOUNT 😀🎉",
        // }
        {
            id: 1,
            src: "https://www.dropbox.com/scl/fi/db3wmhncilkab185jv2i8/voucher-1200off.mp4?rlkey=2kx5kcl3ajipplbhop1gsrocf&st=prdpesi4&raw=1",
            alt: "Video 2",
            caption: "Follow Steps Told in the VIDEO ☺️",
        },
    ]




    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Toefl Discount Method</h2>

            <div className="grid grid-cols-1 gap-6">
                {images.map((image) => (
                    <Card key={image.id} className="overflow-hidden group">
                        {image.caption && (
                            <p className="text-sm text-muted-foreground p-2 ml-2 mt-2">{image.caption}</p>
                        )}
                        <CardContent className="p-2 relative">
                            <div className="relative aspect-[4/2] rounded-md">
                                {image.src.includes(".mp4") ? (
                                    <video
                                        src={image.src}
                                        controls
                                        poster="/toefl-voucher/play-video-thumbnail.jpg"
                                        className="min-w-full min-h-full object-cover rounded-lg"
                                    />
                                ) : (
                                    <>
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            width={5000}
                                            height={5000}
                                            unoptimized
                                            className="object-cover border rounded-lg"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </>
                                )}


                            </div>
                        </CardContent>

                    </Card>
                ))}
            </div>
        </div>
    )
}
