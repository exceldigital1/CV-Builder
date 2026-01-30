export default function References({ cvData, setCvData }) {
    const references = cvData.references || [];

    const handleChange = (index, field, value) => {
        const updatedReferences = [...references];
        updatedReferences[index] = {
            ...updatedReferences[index],
            [field]: value,
        };

        setCvData({ ...cvData, references: updatedReferences });
    };

    const addReference = () => {
        setCvData({
            ...cvData,
            references: [
                ...references,
                { name: "", title: "", phone: "" },
            ],
        });
    };

    const removeReference = (index) => {
        const updatedReferences = references.filter((_, i) => i !== index);
        setCvData({ ...cvData, references: updatedReferences });
    };

    return (
        <div>
            <h2>References</h2>

            {references.map((ref, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={ref.name}
                        onChange={(e) =>
                            handleChange(index, "name", e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Job Title"
                        value={ref.title}
                        onChange={(e) =>
                            handleChange(index, "title", e.target.value)
                        }
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={ref.phone}
                        onChange={(e) =>
                            handleChange(index, "phone", e.target.value)
                        }
                    />

                    {references.length > 1 && (
                        <button
                            className=""
                            type="button"
                            onClick={() => removeReference(index)}
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}

            <button type="button" onClick={addReference}>
                Add Reference
            </button>



        </div>
    );
}
