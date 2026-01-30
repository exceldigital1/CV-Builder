export default function Experience({ cvData, setCvData }) {

  function handleChange(i, e) {
    const updated = [...cvData.experience];
    updated[i][e.target.name] = e.target.value;
    setCvData({ ...cvData, experience: updated });
  }

  function handleRoleChange(expIndex, roleIndex, value) {
    const updated = [...cvData.experience];
    updated[expIndex].roles[roleIndex] = value;
    setCvData({ ...cvData, experience: updated });
  }

  function addRole(expIndex) {
    const updated = [...cvData.experience];
    updated[expIndex].roles.push("");
    setCvData({ ...cvData, experience: updated });
  }

  function removeRole(expIndex, roleIndex) {
    const updated = [...cvData.experience];
    updated[expIndex].roles.splice(roleIndex, 1);
    setCvData({ ...cvData, experience: updated });
  }

  function addExperience() {
    const lastExp = cvData.experience[cvData.experience.length - 1];
    const isEmpty = Object.values(lastExp).flat().every(v => v === "");
    if (isEmpty) return;

    setCvData({
      ...cvData,
      experience: [
        ...cvData.experience,
        {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          roles: [""],
          achievements: ""
        }
      ]
    });
  }

  return (
    <section>
      <h2 className="text-xl mb-4">Experience</h2>

      {cvData.experience.map((exp, i) => (
        <div key={i} className="mb-6 border-b pb-4">
          <input name="title" placeholder="Job Title" value={exp.title} onChange={e => handleChange(i, e)} />
          <input name="company" placeholder="Company" value={exp.company} onChange={e => handleChange(i, e)} />
          <input name="startDate" type="date" value={exp.startDate} onChange={e => handleChange(i, e)} />
          <input name="endDate" type="date" value={exp.endDate} onChange={e => handleChange(i, e)} />

          {exp.roles.map((role, r) => (
            <div key={r} className="flex gap-2 mb-2">
              <input
                placeholder={`Role ${r + 1}`}
                value={role}
                onChange={e => handleRoleChange(i, r, e.target.value)}
              />
              {exp.roles.length > 1 && (
                <button type="button" onClick={() => removeRole(i, r)}>✕</button>
              )}
            </div>
          ))}

          <button type="button" onClick={() => addRole(i)}>+ Add role</button>
        </div>
      ))}

      <button type="button" onClick={addExperience}>Add Experience</button>
    </section>
  );
}
