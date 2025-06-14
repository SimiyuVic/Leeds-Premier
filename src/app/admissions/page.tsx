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
            title: "Step 3: Interview/Assessment",
            description: "Learners may be assessed for placement purposes, particularly for Grades 4 to 8 and JSS (Grades 7–9)."
        },
        {
            id: 4,
            title: "Step 4: Admission & Orientation",
            description: "Once approved, you will receive an admission letter. An orientation session is held for parents and learners."
        }
    ];

    const requirements = [
        "Completed application form",
        "Copy of birth certificate",
        "Recent passport-size photos (2)",
        "Most recent academic report",
        "Transfer letter (if applicable)"
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Admissions & Enrollment</h2>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                    We welcome applications for learners in both the Primary and Junior Secondary School levels under the Competency-Based Curriculum (CBC).
                </p>

                {/* Admission Steps */}
                <div className="grid gap-8 md:grid-cols-2">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Requirements */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Admission Requirements</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-600 mb-4">
                        Ready to join our school community? Click below to start your application or contact us for assistance.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                            Apply Now
                        </button>
                        <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300">
                            Contact Admissions Office
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
