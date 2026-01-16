export default function PersonalData({ cvData, setCvData }) {
    function handleChange(e) {
        setCvData({
            ...cvData,
            personal: { ...cvData.personal, [e.target.name]: e.target.value }
        });
    }
    return (
        <section className="p-4  rounded  bg-white">
            <h2 className="text-gray-700 text-xl mb-4">Personal Information</h2>
            <input className="" name="fullName" placeholder="Full Name" onChange={handleChange} />
            <input className="" name="email" placeholder="Email" onChange={handleChange} />
            <input className="" name="phone" placeholder="Phone" onChange={handleChange} />
            <input className="" name="address" placeholder="Address" onChange={handleChange} />
            <textarea name="summary" id="" placeholder="Input your professional summary here"></textarea>
        </section>
    );
}