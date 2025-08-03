import React from 'react';

const Admissions = () => {
    const steps = [
        {
            id: 1,
            title: "Step 1: Application",
            description: "Fill out our online or physical application form. Ensure you include accurate parent/guardian and learner details."
        },
        {
            id: 2,
            title: "Step 2: Documentation",
            description: "Submit required documents including a birth certificate, most recent report form, transfer letter (if applicable), and passport photos."
        },
        {
            id: 3,
            title: "Step 3: Interview & Academic Assessment",
            description: "Learners may be assessed for appropriate placement, especially for Grades 4–8 and Junior Secondary School (JSS)."
        },
        {
            id: 4,
            title: "Step 4: Admission & Orientation",
            description: "Upon approval, you'll receive an official admission letter. Orientation is provided for both learners and parents."
        }
    ];

    const requirements = [
        "Completed application form",
        "Copy of birth certificate",
        "Two recent passport-size photos",
        "Latest academic report",
        "Transfer letter (if applicable)"
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen mt-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">
                    School Admissions – Cambridge International, CBC & Teacher Training College
                </h1>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                    Enroll your child in a school that offers both the Cambridge International Curriculum and the Kenyan Competency-Based Curriculum (CBC).
                    We also welcome applications to our accredited Teacher Training College for aspiring educators.
                    Discover a holistic academic environment that fosters global excellence and practical learning.
                </p>

                {/* Admission Steps */}
                <div className="grid gap-8 md:grid-cols-2">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-teal-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-teal-700 mb-2">{step.title}</h2>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Requirements */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-teal-800 mb-4">Admission Requirements</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Call to Action */}
                {/* <div className="mt-16 text-center">
                    <p className="text-lg text-gray-700 mb-4">
                        Ready to join our diverse learning community? Start your application today or reach out for more information on enrolling in our school or teacher training college.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-300">
                            Apply Now
                        </button>
                        <button className="bg-transparent border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-100 transition duration-300">
                            Contact Admissions
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Admissions;
