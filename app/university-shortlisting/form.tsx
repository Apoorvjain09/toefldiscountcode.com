"use client";
import { useEffect, useState } from 'react';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { useUser, useSession } from '@clerk/nextjs';
import Alert from '@/components/ui/AlertNotification';
import { getCountry } from "countries-and-timezones";
import { FaSpinner } from 'react-icons/fa';

const formSchema = z.object({
  abroadPlan: z.enum(["May 2025", "September 2025", "January 2026", "May 2026", "September 2026", "Other"]),
  studyCountry: z.enum(["USA", "Canada", "UK", "Australia", "Ireland", "Other"]),
  homeCountry: z.string().min(1),
  name: z.string().min(1),
  contactNumber: z.string().min(1),
  email: z.string().email(),
  educationLevel: z.enum(["High School", "Bachelor's Degree", "Master's Degree", "Ph.D. or higher", "Other"]),
  cgpa: z.enum(["Below 70% or 7 CGPA", "70% to 80% or 7 to 8 CGPA", "Above 80% or 8 CGPA", "Above 90% or 9 CGPA"]),
  profileDescription: z.string().min(1),
  nextLevel: z.enum(["Master's Degree", "Ph.D.", "Post-Doctoral Studies", "Bachelor's Degree", "Other"]),
  programPreference: z.string().min(1),
  eligibilityExams: z.enum(["Not yet, planning to", "Yes, TOEFL/IELTS/PTE/Duolingo", "Yes, GRE/GMAT"]),
  examScores: z.string().optional(),
  examPlan: z.string().optional(),
});

export default function AIUniversityShortlistingForm({ onFormSubmit }: { onFormSubmit: () => void }) {
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'loading' | 'warning' } | null>(null);
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      abroadPlan: undefined,
      studyCountry: undefined,
      homeCountry: "",
      name: "",
      contactNumber: "",
      email: "",
      educationLevel: undefined,
      cgpa: undefined,
      profileDescription: "",
      nextLevel: undefined,
      programPreference: "",
      eligibilityExams: undefined,
      examScores: "",
      examPlan: "",
    },
  });

  const eligibilityExams = form.watch("eligibilityExams");

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    console.log("Form submitted with values:", values);
    // try {
    //   const response = await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ values }),
    //   });

    //   if (response.ok) {
    //     console.log('Email sent successfully');
    //     setAlert({ message: 'Form submitted successfully!', type: 'success' });
    //   } else {
    //     const errorData = await response.json();
    //     console.error('Failed to send email(page.tsx)', errorData);
    //     setAlert({ message: 'Failed to submit the form. Please try again.', type: 'error' });
    //   }
    // } catch (error) {
    //   console.error('Error sending email(page.tsx)', error);
    //   setAlert({ message: 'An error occurred. Please try again.', type: 'error' });
    // }

    try {
      // Send data to ChatGPT via OpenAI API
      const chatGptResponse = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `
            Given the following student profile:
            ${JSON.stringify(values, null, 2)},
            Provide a JSON response with the following:
            1. A list of 10 shortlisted universities that best match the student's preferences, including fields like "universityName", "location", "ranking", and "acceptanceRate".
            2. A rating of the student's profile on a scale of 1 to 10, based on their academic achievements and compatibility with their chosen program.
            3. Suggestions for improvements that the student can make to enhance their profile.

            Use the following JSON format for the response:
            {
              "shortlistedUniversities": [
                {
                  "universityName": "University of Example",
                  "location": "City, Country",
                  "ranking": 25,
                  "acceptanceRate": "20%"
                },
                ...
              ],
              "profileRating": 7.5,
              "improvements": [
                "Improve GRE scores to at least 320.",
                "Gain relevant work experience in the field of data science.",
                "Participate in academic conferences to strengthen research background."
              ]
            }
           `,
        }),
      });

      const data = await chatGptResponse.json();
      if (data.success) {
        console.log("Shortlisted Universities:", data.result);
        setAlert({
          message: "Universities have been shortlisted successfully!",
          type: "success",
        });
        const responseData = JSON.parse(data.result);

        // Store the data in localStorage
        localStorage.setItem("universityShortlistingResponse-shortlistedUniversities", JSON.stringify(responseData.shortlistedUniversities));
        localStorage.setItem("universityShortlistingResponse-profileRating", JSON.stringify(responseData.profileRating));
        localStorage.setItem("universityShortlistingResponse-improvements", JSON.stringify(responseData.improvements));

        setSubmitted(true)

        setTimeout(() => {
          onFormSubmit();
        }, 1000);

      } else {
        console.error("Failed to get a response from ChatGPT:", data.error);
        setAlert({
          message: "Failed to shortlist universities. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error sending data to ChatGPT:", error);
      setAlert({
        message: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false)
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    const fetchUserCountry = async () => {
      if (user?.getSessions) {
        try {
          const sessions = await user.getSessions();
          if (sessions.length > 0) {
            const countryCode = sessions[0]?.latestActivity?.country;
            if (countryCode) {
              const countryInfo = getCountry(countryCode);
              const countryName = countryInfo?.name || "Select country";
              form.setValue("homeCountry", countryName);
              form.setValue("name", user?.fullName || "");
              form.setValue("email", user?.emailAddresses[0]?.emailAddress || "");
            } else {
              console.log("Country information not available");
            }
          } else {
            console.log("No active sessions found");
          }
        } catch (error) {
          console.error("Error fetching sessions:", error);
        }
      }
    };

    fetchUserCountry();
  }, [user]);


  return (
    <>
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <Form {...form}>
        <form
          onSubmit={(e) => {
            console.log("Form is being submitted");
            form.handleSubmit(handleSubmit)(e);
          }}
          className="max-w-md w-[80vw] flex flex-col gap-4"
        >
          {step === 1 && (
            <>
              <FormField control={form.control}
                name="abroadPlan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>When are you planning to go abroad?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a date" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent >
                        <SelectItem value="May 2025">May 2025</SelectItem>
                        <SelectItem value="September 2025">September 2025</SelectItem>
                        <SelectItem value="January 2026">January 2026</SelectItem>
                        <SelectItem value="May 2026">May 2026</SelectItem>
                        <SelectItem value="September 2026">September 2026</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control={form.control}
                name="studyCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Which country are you aiming to study in?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                        <SelectItem value="Ireland">Ireland</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="homeCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your home country?</FormLabel>
                    <FormControl>
                      <Input placeholder="Home country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your name?</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {step === 2 && (
            <>
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your contact number and WhatsApp number:</FormLabel>
                    <FormControl>
                      <Input placeholder="Contact number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your email address:</FormLabel>
                    <FormControl>
                      <Input placeholder="Email address" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="educationLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your highest education level?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="High School">High School</SelectItem>
                        <SelectItem value="Bachelor's Degree">Bachelor&apos;s Degree</SelectItem>
                        <SelectItem value="Master's Degree">Master&apos;s Degree</SelectItem>
                        <SelectItem value="Ph.D. or higher">Ph.D. or higher</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cgpa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your college CGPA or percentage?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select CGPA or percentage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Below 70% or 7 CGPA">Below 70% or 7 CGPA</SelectItem>
                        <SelectItem value="70% to 80% or 7 to 8 CGPA">70% to 80% or 7 to 8 CGPA</SelectItem>
                        <SelectItem value="Above 80% or 8 CGPA">Above 80% or 8 CGPA</SelectItem>
                        <SelectItem value="Above 90% or 9 CGPA">Above 90% or 9 CGPA</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {step === 3 && (
            <>
              <FormField
                control={form.control}
                name="profileDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Briefly explain your profile (your achievements & job experience, if any):</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Profile description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nextLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Which level do you wish to pursue next?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select next level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Master's Degree">Master&apos;s Degree</SelectItem>
                        <SelectItem value="Ph.D.">Ph.D.</SelectItem>
                        <SelectItem value="Post-Doctoral Studies">Post-Doctoral Studies</SelectItem>
                        <SelectItem value="Bachelor's Degree">Bachelor&apos;s Degree</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="programPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What&apos;s your program preference? (e.g., MS in Computer Science, Data Science, Mechanical, etc.)</FormLabel>
                    <FormControl>
                      <Input placeholder="Program preference" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eligibilityExams"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Have you appeared for any eligibility exams?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Not yet, planning to">Not yet, planning to</SelectItem>
                        <SelectItem value="Yes, TOEFL/IELTS/PTE/Duolingo">Yes, TOEFL/IELTS/PTE/Duolingo</SelectItem>
                        <SelectItem value="Yes, GRE/GMAT">Yes, GRE/GMAT</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {eligibilityExams !== "Not yet, planning to" && (
                <FormField
                  control={form.control}
                  name="examScores"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>If yes, what is your score in TOEFL/IELTS/PTE/Duolingo and GRE/GMAT (with split scores)?</FormLabel>
                      <FormControl>
                        <Input placeholder="Exam scores" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {eligibilityExams === "Not yet, planning to" && (
                <FormField
                  control={form.control}
                  name="examPlan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>If not, when are you planning to write the exams?</FormLabel>
                      <FormControl>
                        <Input placeholder="Exam plan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </>
          )}

          <div className="flex justify-between gap-10">
            {step > 1 && (
              <Button type="button" className="w-full bg-black text-white" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step <= 2 && (
              <Button type="button" className="w-full bg-black text-white" onClick={nextStep}>
                Next
              </Button>
            )}
            {step === 3 && (
              <Button disabled={loading || submitted} type="submit" className="w-full bg-black text-white">
                {loading ? (
                  <div className="animate-spin">
                    <FaSpinner />
                  </div>
                ) : submitted ? (
                  "Hold on..."
                ) : (
                  "Submit"
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </>
  );
}
