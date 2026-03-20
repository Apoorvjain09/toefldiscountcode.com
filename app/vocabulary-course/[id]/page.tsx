"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

import { courseData } from "../courseData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

type CourseLecture = {
  chapterTitle: string;
  chapterIndex: number;
  lectureIndex: number;
  title: string;
  videoUrl: string;
};

const SESSION_MAP = {
  session1: "Vocabulary Sessions 1",
} as const;

function buildLectures(sectionTitle: string): CourseLecture[] {
  const section = courseData.sections.find((item) => item.title === sectionTitle);

  if (!section) {
    return [];
  }

  return section.chapters.flatMap((chapter, chapterIndex) =>
    chapter.lectures.map((lecture, lectureIndex) => ({
      chapterTitle: chapter.title,
      chapterIndex,
      lectureIndex,
      title: lecture.title,
      videoUrl: lecture.videoUrl,
    }))
  );
}

function toPreviewUrl(url: string): string {
  return url.replace("/view", "/preview");
}

export default function SessionPage({ params }: Props) {
  const { id } = use(params);
  const { isSignedIn, user } = useUser();
  const sessionTitle = SESSION_MAP[id as keyof typeof SESSION_MAP];

  const lectures = useMemo(() => {
    if (!sessionTitle) {
      return [];
    }

    return buildLectures(sessionTitle);
  }, [sessionTitle]);

  const [activeLectureIndex, setActiveLectureIndex] = useState(0);
  const hasSessionAccess = user?.publicMetadata?.["Vocabulary_Course_Session1"] === "true";

  if (!sessionTitle || lectures.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">Session not found</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Only `/vocabulary-course/session1` is available right now.
              </p>
              <Button asChild>
                <Link href="/vocabulary-course">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Vocabulary Course
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  if (!isSignedIn) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">Login required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">Please log in to access Session 1.</p>
              <Button asChild>
                <Link href="/vocabulary-course">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Vocabulary Course
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  if (!hasSessionAccess) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">Access denied</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Your account does not have access to Vocabulary Course Session 1.
              </p>
              <Button asChild>
                <Link href="/vocabulary-course">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Vocabulary Course
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  const activeLecture = lectures[activeLectureIndex] ?? lectures[0];
  const totalLectures = lectures.length;
  const totalChapters = new Set(lectures.map((item) => item.chapterTitle)).size;
  const progressValue = ((activeLectureIndex + 1) / totalLectures) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl space-y-6 lg:space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm backdrop-blur sm:p-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">Vocabulary Course</Badge>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">{sessionTitle}</h1>
              <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
                Structured chapter-wise vocabulary training with direct lecture access. Start with Lecture 1 and move chapter by chapter.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Card className="border-slate-200">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-500">Chapters</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{totalChapters}</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-500">Lectures</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{totalLectures}</p>
                </CardContent>
              </Card>
              <Card className="col-span-2 border-slate-200 sm:col-span-1">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-500">Current</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{activeLecture.chapterTitle}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Course progress</span>
              <span>
                {activeLectureIndex + 1}/{totalLectures} lectures
              </span>
            </div>
            <Progress value={progressValue} className="h-2 bg-emerald-100 [&_div]:bg-emerald-600" />
          </div>
        </motion.section>

        <section className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="lg:col-span-8"
          >
            <Card className="overflow-hidden border-slate-200">
              <CardHeader className="border-b border-slate-100 bg-slate-50/70 p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
                  <BookOpen className="h-4 w-4" />
                  <span>{activeLecture.chapterTitle}</span>
                  <span className="text-slate-400">•</span>
                  <span>
                    Lecture {activeLecture.lectureIndex + 1}: {activeLecture.title}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 p-4 sm:p-6">
                <motion.div
                  key={activeLecture.videoUrl}
                  initial={{ opacity: 0.4, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden rounded-xl border border-slate-200"
                >
                  <iframe
                    src={toPreviewUrl(activeLecture.videoUrl)}
                    title={`${activeLecture.chapterTitle} - ${activeLecture.title}`}
                    allow="autoplay"
                    allowFullScreen
                    className="h-[230px] w-full sm:h-[380px] lg:h-[480px]"
                  />
                </motion.div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-slate-600">
                    Now playing: <span className="font-medium text-slate-900">{activeLecture.title}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setActiveLectureIndex((prev) => Math.max(prev - 1, 0))}
                      disabled={activeLectureIndex === 0}
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      onClick={() => setActiveLectureIndex((prev) => Math.min(prev + 1, totalLectures - 1))}
                      disabled={activeLectureIndex === totalLectures - 1}
                    >
                      Next
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="lg:col-span-4"
          >
            <Card className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Course Curriculum</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <ScrollArea className="h-[420px] pr-2">
                  <Accordion type="single" collapsible defaultValue="chapter-0" className="w-full">
                    {courseData.sections
                      .find((section) => section.title === sessionTitle)
                      ?.chapters.map((chapter, chapterIndex) => (
                        <AccordionItem key={chapter.title} value={`chapter-${chapterIndex}`}>
                          <AccordionTrigger className="text-left text-sm font-semibold text-slate-800">
                            {chapter.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {chapter.lectures.map((lecture, lectureIndex) => {
                                const absoluteLectureIndex = lectures.findIndex(
                                  (item) =>
                                    item.chapterIndex === chapterIndex && item.lectureIndex === lectureIndex
                                );
                                const isActive = absoluteLectureIndex === activeLectureIndex;

                                return (
                                  <button
                                    key={`${chapter.title}-${lectureIndex}`}
                                    type="button"
                                    onClick={() => setActiveLectureIndex(absoluteLectureIndex)}
                                    className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition ${isActive
                                        ? "border-emerald-300 bg-emerald-50"
                                        : "border-slate-200 bg-white hover:border-slate-300"
                                      }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      {isActive ? (
                                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                      ) : (
                                        <PlayCircle className="h-4 w-4 text-slate-500" />
                                      )}
                                      <span className="text-sm text-slate-800">{lecture.title}</span>
                                    </div>
                                    <span className="text-xs text-slate-500">#{lectureIndex + 1}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.aside>
        </section>
      </div>
    </main>
  );
}
