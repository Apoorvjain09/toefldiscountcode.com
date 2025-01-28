"use client";

import { DiscussionEmbed } from "disqus-react";

interface Props {
    article: {
        url: string; // Full URL of the article
        id: string; // Unique identifier for the article
        title: string; // Title of the article
    };
}

export default function ToeflVoucherCommentSection({ article }: Props) {
    const disqusConfig = {
        url: article.url, // Full URL to the article page
        identifier: article.id, // Unique identifier for the article
        title: article.title, // Title of the article
        language: "en", // Language code (e.g., 'en', 'zh_TW')
    };

    return (
        <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <DiscussionEmbed shortname="toeflgoglobal-com" config={disqusConfig} />
        </div>
    );
}
