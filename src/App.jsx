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

  const [cvData, setCvData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      summary: ""
    },

    experience: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        roles: [""],
        achievements: ""
      }
    ],

    education: [
      {
        school: "",
        year: "",
        course: "",
        grade: "",
        notes: [""]
      }
    ],

    skills: [],
    references: [
      {
        name: "",
        title: "",
        phone: "" 
      }
    ]
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-blue-500 text-2xl mb-4 text-center">
        CV Builder App
      </h1>

      {step <= 5 && (
        <form>
          {step === 1 && <PersonalData cvData={cvData} setCvData={setCvData} />}
          {step === 2 && <Experience cvData={cvData} setCvData={setCvData} />}
          {step === 3 && <Education cvData={cvData} setCvData={setCvData} />}
          {step === 4 && <Skills cvData={cvData} setCvData={setCvData} />}
          {step === 5 && <References cvData={cvData} setCvData={setCvData} />}

          <div className="flex justify-center gap-4 items-center mt-6 p-4 border-t">
            {step > 1 && (
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}

            <button
              type="button"
              className="bg-blue-500 text-white px-6 py-2 rounded"
              onClick={() => setStep(step + 1)}
            >
              {step === 5 ? "Preview CV" : "Next"}
            </button>
          </div>
        </form>
      )}

      {step === 6 && (
        <div>
          <CVPreview cvData={cvData} />
          <div className="flex justify-center mt-6">
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded"
              onClick={() => setStep(5)}
            >
              Edit CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
