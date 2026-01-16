export default function References({ cvData, setCvData }) {
    return (
        <div>
            <h2>References</h2>
            <textarea
                placeholder="References"
                onChange={(e) => setCvData({ ...cvData, references: e.target.value })}
            />
        </div>
    );
}