import { useState } from "react";
import PersonalData from "./components/PersonalData";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import References from "./components/References";
import CVPreview from "./components/CvPreview";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);

  // Initialize CV data with empty fields
  const [cvData, setCvData] = useState({
    personal: { fullName: "", email: "", phone: "", address: "" },
    experience: [{ title: "", company: "", date: "", roles: "", achievements: "" }],
    education: [{ school: "", year: "", course: "", grade: "", notes: "" }],
    skills: "",
    references: ""
  });

  return (
    <form>
      <h1 className="text-blue-500 text-2xl mb-4">CV Builder App</h1>

      {/* Only render the current step */}
      {step === 1 && <PersonalData cvData={cvData} setCvData={setCvData} />}
      {step === 2 && <Experience cvData={cvData} setCvData={setCvData} />}
      {step === 3 && <Education cvData={cvData} setCvData={setCvData} />}
      {step === 4 && <Skills cvData={cvData} setCvData={setCvData} />}
      {step === 5 && <References cvData={cvData} setCvData={setCvData} />}

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 items-center mt-4 p-2 border-t text-gray-700">
        {step > 1 && (
          <button
            type="button"
            className="bg-blue-500 w-20 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
        {step < 5 && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        )}
      </div>

      {/* CV Preview */}
      {step === 5 && <CVPreview cvData={cvData} />}
    </form>
  );
}
