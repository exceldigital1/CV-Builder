export default function Skills({ cvData, setCvData }) {
    return (
        <div>
            <h2>Skills</h2>
            <textarea
                placeholder="List your skills"
                onChange={(e) => setCvData({ ...cvData, skills: e.target.value })}
            />
        </div>
    );
}