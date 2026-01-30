export default function Education({ cvData, setCvData }) {

  function handleChange(i, e) {
    const updated = [...cvData.education];
    updated[i][e.target.name] = e.target.value;
    setCvData({ ...cvData, education: updated });
  }

  function handleNoteChange(eduIndex, noteIndex, value) {
    const updated = [...cvData.education];
    updated[eduIndex].notes[noteIndex] = value;
    setCvData({ ...cvData, education: updated });
  }

  function addNote(eduIndex) {
    const updated = [...cvData.education];
    updated[eduIndex].notes.push("");
    setCvData({ ...cvData, education: updated });
  }

  function removeNote(eduIndex, noteIndex) {
    const updated = [...cvData.education];
    updated[eduIndex].notes.splice(noteIndex, 1);
    setCvData({ ...cvData, education: updated });
  }

  function addEducation() {
    const lastEdu = cvData.education[cvData.education.length - 1];
    const isEmpty = Object.values(lastEdu).flat().every(v => v === "");
    if (isEmpty) return;

    setCvData({
      ...cvData,
      education: [
        ...cvData.education,
        { school: "", year: "", course: "", grade: "", notes: [""] }
      ]
    });
  }

  return (
    <section>
      <h2 className="text-xl mb-4">Education</h2>

      {cvData.education.map((edu, i) => (
        <div key={i} className="mb-6 border-b pb-4">
          <input name="school" placeholder="School" value={edu.school} onChange={e => handleChange(i, e)} />
          <input type="date" name="year" value={edu.year} onChange={e => handleChange(i, e)} />
          <input name="course" placeholder="Course" value={edu.course} onChange={e => handleChange(i, e)} />

          <select name="grade" value={edu.grade} onChange={e => handleChange(i, e)}>
            <option value="">Select Grade</option>
            <option>First Class</option>
            <option>Second Class Upper</option>
            <option>Second Class Lower</option>
            <option>Third Class</option>
            <option>Pass</option>
          </select>

          {edu.notes.map((note, n) => (
            <div key={n} className="flex gap-2 mb-2">
              <input
                placeholder={`Highlight ${n + 1}`}
                value={note}
                onChange={e => handleNoteChange(i, n, e.target.value)}
              />
              {edu.notes.length > 1 && (
                <button type="button" onClick={() => removeNote(i, n)}>✕</button>
              )}
            </div>
          ))}

          <button type="button" onClick={() => addNote(i)}>+ Add highlight</button>
        </div>
      ))}

      <button type="button" onClick={addEducation}>Add Education</button>
    </section>
  );
}
