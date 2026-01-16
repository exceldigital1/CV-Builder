export default function CVPreview({ cvData }) {
    return (
        <div id="cv-preview">
            <h1>{cvData.personal.fullName}</h1>
            <p>{cvData.personal.email} | {cvData.personal.phone}</p>
            <h3>Experience</h3>
            {cvData.experience.map((exp, i) => (
                <div key={i}>
                    <strong>{exp.title}</strong> – {exp.company} ({exp.date})
                    <p>{exp.roles}</p>
                    <em>{exp.achievements}</em>
                </div>
            ))}
            <h3>Education</h3>
            {cvData.education.map((edu, i) => (
                <div key={i}>
                    <strong>{edu.school}</strong> – {edu.course}
                    <p>{edu.year} | {edu.grade}</p>
                    <p>{edu.notes}</p>
                </div>
            ))}
            <h3>Skills</h3>
            <p>{cvData.skills}</p>
            <h3>References</h3>
            <p>{cvData.references}</p>
        </div>
    );
}