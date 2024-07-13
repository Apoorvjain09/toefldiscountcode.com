  import React, { useState } from 'react';
  import { usUniversities, countryCodes, uKUniversities, canadianUniversities, australianUniversities, irishUniversities, newZealandUniversities, singaporeUniversities, switzerlandUniversities } from '@/app/university-shortlisting/UniversitiesList';

  interface UniversityShortlistingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: () => void; // Callback to handle completion of shortlisting
  }

  const UniversityShortlistingModal: React.FC<UniversityShortlistingModalProps> = ({ isOpen, onClose, onComplete }) => {
    const [step, setStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [email, setEmail] = useState('');
    const [degree, setDegree] = useState('bachelors');

    const countries = ["USA", "UK", "Canada", "Australia","Irish", "Newzeland", "Singapore", "Switzerland"] as const;
    type Country = (typeof countries)[number];

    const partnerUniversities: Record<Country, string[]> = {
      USA: usUniversities,
      UK: uKUniversities,
      Canada: canadianUniversities,
      Australia: australianUniversities,
      Irish: irishUniversities,
      Newzeland: newZealandUniversities,
      Singapore: singaporeUniversities,
      Switzerland: switzerlandUniversities
    };

    const handleCountryClick = (country: Country) => {
      setSelectedCountry(country);
      setStep(2);
    };

    const handleNext = () => {
      setStep(step + 1);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const handleUniversitySelect = (university: string) => {
      if (selectedUniversities.includes(university)) {
        setSelectedUniversities(selectedUniversities.filter(u => u !== university));
      } else if (selectedUniversities.length < 3) {
        setSelectedUniversities([...selectedUniversities, university]);
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const formData = {
        name,
        phoneNumber: `${countryCode} ${phoneNumber}`,
        email,
        degree,
        selectedUniversities
      };

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ values: formData })
        });

        if (response.ok) {
          console.log('Email sent successfully');
          onComplete();
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const filteredUniversities = partnerUniversities[selectedCountry as Country]?.filter(university =>
      university.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Check Eligibility for your dream universities</h2>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country) => (
                  <div
                    key={country}
                    onClick={() => handleCountryClick(country)}
                    className="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-700 py-4 px-6 rounded-lg flex items-center justify-center text-center transition duration-200"
                  >
                    <span className="text-lg font-semibold">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && selectedCountry && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Check Eligibility For {selectedCountry} Universities</h2>
              <input
                type="text"
                placeholder="Search universities"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full mb-4 px-3 py-2 border rounded"
              />
              <div className="max-h-64 overflow-y-auto">
                <ul className="list-none p-0">
                  {filteredUniversities?.map((university) => (
                    <li key={university} className="mb-2">
                      <label className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition duration-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedUniversities.includes(university)}
                          onChange={() => handleUniversitySelect(university)}
                          disabled={!selectedUniversities.includes(university) && selectedUniversities.length >= 3}
                          className="mr-3"
                        />
                        <span className="text-gray-800">{university}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={handleNext}
                className="bg-green-600 text-white py-2 px-4 rounded mt-4 w-full"
                disabled={selectedUniversities.length === 0}
              >
                Next
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Fill in the form to get Personalized Shortlisting</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <div className="flex">
                    <div className="flex flex-row justify-center relative w-full">
                      <div className='w-[40%]'>
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="px-3 py-2 border rounded-l w-full max-h-48 overflow-y-auto"
                        >
                          {countryCodes.map(({ code, country, flag }) => (
                            <option key={code} value={code}>
                              {country} ({code}) {flag}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-[60%] px-3 py-2 border rounded-r"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Degree</label>
                  <div className="flex">
                    <label className="mr-4">
                      <input
                        type="radio"
                        value="bachelors"
                        checked={degree === 'bachelors'}
                        onChange={() => setDegree('bachelors')}
                        className="hidden"
                      />
                      <div
                        className={`px-4 py-2 border rounded cursor-pointer transition ${
                          degree === 'bachelors' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                        }`}
                        onClick={() => setDegree('bachelors')}
                      >
                        Bachelors
                      </div>
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="masters"
                        checked={degree === 'masters'}
                        onChange={() => setDegree('masters')}
                        className="hidden"
                      />
                      <div
                        className={`px-4 py-2 border rounded cursor-pointer transition ${
                          degree === 'masters' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                        }`}
                        onClick={() => setDegree('masters')}
                      >
                        Masters
                      </div>
                    </label>
                  </div>
                </div>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded mt-4 w-full">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default UniversityShortlistingModal;
