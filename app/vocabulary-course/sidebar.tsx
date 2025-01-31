"use client";
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

interface Lecture {
  id: number;
  title: string;
  videoUrl: string;
}

interface Chapter {
  title: string;
  lectures: Lecture[];
}

interface Section {
  title: string;
  chapters: Chapter[];
}

interface SidebarProps {
  sections: Section[];
  setCurrentLecture: (lecture: Lecture) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, setCurrentLecture }) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const { isSignedIn, user } = useUser();
  const [filteredSections, setFilteredSections] = useState<Section[]>(sections);

  const toggleSection = (index: number) => {
    setActiveSection(index === activeSection ? null : index);
  };

  const toggleChapter = (index: number) => {
    setActiveChapter(index === activeChapter ? null : index);
  };

  useEffect(() => {
    if (isSignedIn) {
      const access = user?.publicMetadata?.["Vocabulary_Course2_3"] === "true";
      setHasAccess(access);

      // Filter out Vocabulary Sessions 1 if user has access to Course 2 & 3
      if (access) {
        setFilteredSections(sections.filter(section => section.title !== "Vocabulary Sessions 1"));
      } else {
        setFilteredSections(sections);
      }
    }
  }, [isSignedIn, user, sections]);

  return (
    <div className="flex z-[4000]">
      <div className={`fixed inset-0 bg-black opacity-50 z-10 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:flex md:relative md:translate-x-0 transition-transform duration-200 ease-in-out w-64 z-20 bg-white`}>
        <div className="p-2 h-screen overflow-y-auto border-r border-gray-300">
          {filteredSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <h3
                onClick={() => toggleSection(sectionIndex)}
                className="flex justify-between cursor-pointer text-md font-semibold border-black border rounded-lg py-3 px-2"
              >
                {section.title} <span>{activeSection === sectionIndex ? "☝️" : "👇"}</span>
              </h3>
              <div className={`${activeSection === sectionIndex ? 'block' : 'hidden'} mt-2 pl-4`}>
                {section.chapters.map((chapter, chapterIndex) => (
                  <div key={chapterIndex} className="mb-2">
                    <h4
                      onClick={() => toggleChapter(chapterIndex)}
                      className="flex justify-between gap-3 cursor-pointer text-sm font-semibold border-black border rounded-lg p-3"
                    >
                      {chapter.title} <span>{activeChapter === chapterIndex ? "▲" : "▼"}</span>
                    </h4>
                    <ul className={`${activeChapter === chapterIndex ? 'block' : 'hidden'} mt-2 pl-4`}>
                      {chapter.lectures.map((lecture, lectureIndex) => (
                        <li key={lectureIndex} className="py-1">
                          <a
                            href="#"
                            onClick={() => {
                              setCurrentLecture(lecture);
                              setIsSidebarOpen(false); // Close sidebar on mobile after selecting a lecture
                            }}
                            className="text-blue-500 hover:underline"
                          >
                            {lecture.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="md:hidden fixed bottom-4 right-4 z-30 p-2 rounded-md bg-black text-white font-bold"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰ View Lectures
      </button>
    </div>
  );
};

export default Sidebar;
