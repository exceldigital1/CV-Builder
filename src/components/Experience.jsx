export default function Experience({ cvData, setCvData }) {
  // Handle changes to any input
  function handleChange(i, e) {
    const updated = [...cvData.experience];
    updated[i][e.target.name] = e.target.value;
    setCvData({ ...cvData, experience: updated });
  }

  // Add a new experience only if the last one has at least one field filled
  function addExperience() {
    const lastExp = cvData.experience[cvData.experience.length - 1];
    const isEmpty = Object.values(lastExp).every(value => value === "");
    if (isEmpty) return; // Do nothing if last experience is empty

    setCvData({
      ...cvData,
      experience: [
        ...cvData.experience,
        { title: "", company: "", date: "", roles: "", achievements: "" }
      ]
    });
  }

  return (
    <section className="p-4 rounded bg-white">
      <h2 className="text-gray-700 text-xl mb-4">Experience</h2>
      {cvData.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <input
            name="title"
            placeholder="Job Title"
            value={exp.title}
            onChange={e => handleChange(i, e)}
          />
          <input
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={e => handleChange(i, e)}
          />
          <input
            name="date"
            type="date"
            placeholder="Start Date"
            value={exp.date}
            onChange={e => handleChange(i, e)}
          />
          <input
            name="date"
            type="date"
            placeholder="end Date"
            value={exp.date}
            onChange={e => handleChange(i, e)}
          />
          <textarea
            name="roles"
            placeholder="Roles"
            value={exp.roles}
            onChange={e => handleChange(i, e)}
          />
        </div>
      ))}

      <button type="button" onClick={addExperience}>
        Add Experience
      </button>
    </section>
  );
}
