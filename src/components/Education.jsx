export default function Education({ cvData, setCvData }) {
  function handleChange(i, e) {
    const { name, value } = e.target;
    const updated = [...cvData.education];
    updated[i] = { ...updated[i], [name]: value };

    setCvData({ ...cvData, education: updated });
  }

  function addEducation() {
    const lastEdu = cvData.education[cvData.education.length - 1];
    const isEmpty = Object.values(lastEdu).every(value => value === "");
    if (isEmpty) return;

    setCvData({
      ...cvData,
      education: [
        ...cvData.education,
        { school: "", year: "", course: "", grade: "", notes: "" }
      ]
    });
  }

  return (
    <div>
      <h2 className="text-gray-700 text-xl mb-4">Education</h2>

      {cvData.education.map((edu, i) => (
        <div key={i}>
          <input
            name="school"
            placeholder="School"
            value={edu.school}
            onChange={e => handleChange(i, e)}
          />

          <input
            type="date"
            name="year"
            placeholder="Year of Graduation"
            value={edu.year}
            onChange={e => handleChange(i, e)}
          />

          <input
            name="course"
            placeholder="Course"
            value={edu.course}
            onChange={e => handleChange(i, e)}
          />

          {/* ✅ Grade as SELECT */}
          <select
            name="grade"
            value={edu.grade}
            onChange={e => handleChange(i, e)}
          >
            <option value="">Select Grade</option>
            <option value="First Class">First Class</option>
            <option value="Second Class Upper">Second Class Upper</option>
            <option value="Second Class Lower">Second Class Lower</option>
            <option value="Third Class">Third Class</option>
            <option value="Pass">Pass</option>
          </select>

          <textarea
            name="notes"
            placeholder="Highlights"
            value={edu.notes}
            onChange={e => handleChange(i, e)}
          />
        </div>
      ))}

      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}
