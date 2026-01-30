export default function Skills({ cvData, setCvData }) {
    const skills = cvData.skills || [];

    const handleChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setCvData({ ...cvData, skills: updatedSkills });
    };

    const addSkill = () => {
        setCvData({
            ...cvData,
            skills: [...skills, ""],
        });
    };

    const removeSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setCvData({ ...cvData, skills: updatedSkills });
    };

    return (
        <div>
            <h2>Skills</h2>

            {skills.map((skill, index) => (
                <div key={index} style={{ marginBottom: "0.5rem" }}>
                    <input
                        type="text"
                        placeholder="Skill"
                        value={skill}
                        onChange={(e) =>
                            handleChange(index, e.target.value)
                        }
                    />

                    {skills.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeSkill(index)}
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}

            <button type="button" onClick={addSkill}>
                Add Skill
            </button>
        </div>
    );
}
