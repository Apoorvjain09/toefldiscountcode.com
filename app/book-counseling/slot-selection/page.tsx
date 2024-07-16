"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { countryCodes } from '@/app/university-shortlisting/UniversitiesList';
import BookCallWithExperts from "@/public/assets/Book_1-1with_Experts.png"
import Image from 'next/image';

const courses = [
    "Computer Science",
    "Data Science and Data Analytics",
    "Business Analytics",
    "Mechanical Engineering",
    "Management Information Systems",
    "Electrical and Electronics Engineering",
    "Computer and Information Systems",
    "Electrical and Computer Engineering",
    "Engineering Management Mem",
    "Industrial Engineering",
    "Civil Engineering",
    "Computer Engineering",
    "Information Technology",
    "Cybersecurity",
    "Mba"
];

const stages = [
    "Just starting, research phase",
    "Shortlisting colleges, planning tests",
    "Tests done, finalising shortlist",
    "Applied to a few colleges",
    "Applications done, awaiting admit",
    "Admits Received"
];

const timeSlots = [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM"
];

const BookCall = () => {
    const [degree, setDegree] = useState<string | null>(null);
    const [studyYear, setStudyYear] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState<string>('+91');
    const [step, setStep] = useState<number>(1);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [stage, setStage] = useState<string>('');

    const handleDegreeClick = (selectedDegree: string) => {
        setDegree(selectedDegree);
    };

    const handleStudyYearClick = (year: string) => {
        setStudyYear(year);
    };

    const slotBooking = () => {
        setStep(2);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 5);


    const handleFinishBooking = async () => {
        const values = {
            degree,
            studyYear,
            countryCode,
            selectedDate,
            selectedTime,
            firstName,
            lastName,
            course,
            stage
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ values })
            });

            const data = await response.json();
            if (response.ok) {
                // alert('Email sent successfully');
            } else {
                // console.error('Failed to send email:', data.error);
                // alert('Failed to send email');
            }
        } catch (error) {
            // console.error('Error sending email:', error);
            // alert('Error sending email');
        }

        setStep(3);
    };

    return (
        <div className="bg-gray-100  flex justify-center items-center">
            <div className="mx-auto bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg shadow-md flex flex-col lg:flex-row p-6">
                {/* Left Section */}
                <div className="lg:w-1/2 p-6">
                    <div className="relative w-full">
                        <Image
                            src={BookCallWithExperts}
                            height = {1200}
                            width ={700}
                            alt="Banner"
                            className='rounded-lg'
                        />
                    </div>
                </div>

                {/* Right Section */}
                {step === 1 && (
                    <div className=" lg:w-1/2 p-6">
                        <form onSubmit={(e) => e.preventDefault()} className='border-2 p-8 rounded-lg shadow-lg bg-white'>
                            <div className="mb-4">
                                <label className="block text-gray-700">Degree you’re planning to study</label>
                                <div className="flex space-x-4 mt-2">
                                    <button
                                        type="button"
                                        className={`border-2 px-4 py-2 rounded-md ${degree === "Bachelor's" ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-500'}`}
                                        onClick={() => handleDegreeClick("Bachelor's")}
                                    >
                                        Bachelor's
                                    </button>
                                    <button
                                        type="button"
                                        className={`border-2 px-4 py-2 rounded-md ${degree === "Master's" ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-500'}`}
                                        onClick={() => handleDegreeClick("Master's")}
                                    >
                                        Master's
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">When are you going to study abroad?</label>
                                <div className="flex space-x-4 mt-2">
                                    {['2024', '2025', '2026'].map((year) => (
                                        <button
                                            key={year}
                                            type="button"
                                            className={`border-2 px-4 py-2 rounded-md ${studyYear === year ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-500'}`}
                                            onClick={() => handleStudyYearClick(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">How are you planning your study abroad process?</label>
                                <select className="w-full mt-2 px-4 py-2 border rounded-md shadow-md">
                                    <option>Select</option>
                                    <option>I’m doing it myself</option>
                                    <option>Joined another consultancy</option>
                                    <option>Need professional counselling</option>
                                    <option>Don’t know, I’m not sure</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email ID</label>
                                <input
                                    type="email"
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholder="eg: example@gmail.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mobile number</label>
                                <div className="flex mt-2">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="border rounded-l-md px-4 py-2"
                                    >
                                        {countryCodes.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.flag} {country.code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border rounded-r-md"
                                        placeholder="eg. 12345 78901"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <button onClick={slotBooking} className="block w-full bg-orange-500 text-white text-center py-2 px-4 rounded hover:bg-orange-600">
                                    Book a Slot
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {step === 2 && (
                    <div className="lg:w-1/2 p-6">
                        <form onSubmit={(e) => e.preventDefault()} className='border-2 p-8 rounded-lg shadow-lg bg-white'>
                            <div className="mb-4">
                                <label className="block text-gray-700">Select date</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    minDate={new Date()}
                                    maxDate={maxDate}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholderText="Select a date"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Select time</label>
                                <select
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                >
                                    <option>Select a slot</option>
                                    {timeSlots.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">First name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholder="First name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Last name</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholder="Last name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Course you’re interested in</label>
                                <input
                                    type="text"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholder="Search your course"
                                    list="courses"
                                />
                                <datalist id="courses">
                                    {courses.map((course) => (
                                        <option key={course} value={course} />
                                    ))}
                                </datalist>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Where are you in your study abroad journey?</label>
                                <select
                                    value={stage}
                                    onChange={(e) => setStage(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                >
                                    <option>Select Stage</option>
                                    {stages.map((stage) => (
                                        <option key={stage} value={stage}>{stage}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <button onClick={handleFinishBooking} className="block w-full bg-orange-500 text-white text-center py-2 px-4 rounded hover:bg-orange-600">
                                    Finish Booking
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {step === 3 && (
                    <div className="lg:w-1/2 p-6">
                        <div className="text-center w-full">
                            <h2 className="text-3xl mb-2 text-white font-extrabold">Your Call is Booked!</h2>
                            <p className="text-2xl mb-2">
                                <span className="font-bold">{selectedDate?.toLocaleDateString()}</span> at <span className="font-bold">{selectedTime}</span>
                            </p>
                            <p className="text-lg mb-4 bg-white text-gray-500 p-6 rounded-lg">
                                You will Recieve Meeting Link from one of our expert Couselors on your registred <span className='font-bold text-green-500'>Whatsapp Number</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookCall;
