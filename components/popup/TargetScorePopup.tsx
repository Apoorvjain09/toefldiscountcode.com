"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { CheckCircle, Info, Target, Trophy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ToeflTargetScoreModal({ onSubmit }: { onSubmit?: (score: number) => void }) {
  const [open, setOpen] = useState(false)
  const [score, setScore] = useState(100)
  const [selectedSection, setSelectedSection] = useState<string | undefined>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    // Handle the submission logic here
    setSubmitted(true)

    // 🔔 Notify parent
    onSubmit?.(score)

    setTimeout(() => {
      setOpen(false)
      // Reset after closing
      setTimeout(() => {
        setSubmitted(false)
      }, 300)
    }, 1500)
  }

  const scoreRanges = {
    reading: { min: 0, max: 30 },
    listening: { min: 0, max: 30 },
    speaking: { min: 0, max: 30 },
    writing: { min: 0, max: 30 },
    total: { min: 0, max: 120 },
  }

  const getScoreColor = () => {
    if (score >= 100) return "text-green-500"
    if (score >= 80) return "text-blue-500"
    if (score >= 60) return "text-amber-500"
    return "text-red-500"
  }

  const getScoreDescription = () => {
    if (score >= 110) return "Exceptional - Competitive for top universities"
    if (score >= 100) return "Excellent - Meets requirements for most programs"
    if (score >= 90) return "Very Good - Acceptable for many universities"
    if (score >= 80) return "Good - Meets minimum for many programs"
    if (score >= 70) return "Fair - May need improvement for some programs"
    if (score < 70) return "Needs improvement for most academic programs"
  }

  const handleScoreChange = (value: number[]) => {
    setScore(value[0])
  }

  const handleSectionChange = (value: string) => {
    setSelectedSection(value)

    // Adjust score range based on selected section
    if (value === "total") {
      setScore(100)
    } else {
      setScore(25)
    }
  }

  const currentRange = selectedSection ? scoreRanges[selectedSection as keyof typeof scoreRanges] : scoreRanges.total

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Target className="mr-2 h-5 w-5" />
                Set Your TOEFL Goal
              </Button>
            </motion.button>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md md:max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-0">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6 text-amber-500" />
                  <span>What's Your Target TOEFL Score?</span>
                </DialogTitle>
                <DialogDescription className="text-center pt-2 max-w-sm mx-auto">
                  Set your goal score to personalize your study plan and track your progress effectively.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="section" className="text-sm font-medium">
                    Select Section or Total Score
                  </Label>
                  <Select onValueChange={handleSectionChange} defaultValue="total">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>TOEFL Sections</SelectLabel>
                        <SelectItem value="reading">Reading (0-30)</SelectItem>
                        <SelectItem value="listening">Listening (0-30)</SelectItem>
                        <SelectItem value="speaking">Speaking (0-30)</SelectItem>
                        <SelectItem value="writing">Writing (0-30)</SelectItem>
                        <SelectItem value="total">Total Score (0-120)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="score" className="text-sm font-medium">
                      Target Score
                    </Label>
                    <div className={`text-2xl font-bold ${getScoreColor()}`}>{score}</div>
                  </div>

                  <Slider
                    id="score"
                    min={currentRange.min}
                    max={currentRange.max}
                    step={1}
                    value={[score]}
                    onValueChange={handleScoreChange}
                    className="py-4"
                  />

                  <div className="bg-blue-50 dark:bg-blue-950/40 p-3 rounded-lg flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{getScoreDescription()}</p>
                  </div>
                </div>
              </div>

              <DialogFooter className="sm:justify-between flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={() => setOpen(false)} className="sm:w-auto w-full">
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 sm:w-auto w-full"
                >
                  Save Target Score
                </Button>
              </DialogFooter>
            </>
          ) : (
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Target Score Saved!</h3>
              <p className="text-center text-muted-foreground">
                Your personalized study plan is being created based on your target score of{" "}
                <span className={`font-medium ${getScoreColor()}`}>{score}</span>.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

