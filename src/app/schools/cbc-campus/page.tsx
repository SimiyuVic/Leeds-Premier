const Cbc_Campus = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
            {/* Hero Section with Image */}
            <div className="relative mb-12 rounded-xl overflow-hidden">
                <div className="bg-green-800 h-96 flex items-center justify-center">
                    <img 
                        src="/images/cbc-campus-hero.jpg" 
                        alt="Leeds School CBC Campus - Happy students in classroom"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center p-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Leeds School – CBC Campus</h1>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Nurturing Competencies, Values, and Talents in line with Kenya's CBC Curriculum
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-green-800 font-bold text-2xl">100%</p>
                    <p className="text-green-600">CBC-Compliant</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-green-800 font-bold text-2xl">7+</p>
                    <p className="text-green-600">Core Competencies</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-green-800 font-bold text-2xl">1:15</p>
                    <p className="text-green-600">Teacher-Student Ratio</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-green-800 font-bold text-2xl">30+</p>
                    <p className="text-green-600">Co-Curricular Activities</p>
                </div>
            </div>

            {/* About Our CBC Campus with Image */}
            <section className="mb-16">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <img 
                            src="/banner-images/about-cbc.jpeg" 
                            alt="Aerial view of Leeds CBC Campus along Tongaren-Matunda Road"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">About Our CBC Campus</h2>
                        <p className="text-gray-700 mb-4">
                            Located along the Tongaren-Matunda Road in Bungoma County, Soysambu Mitua Ward, our CBC Campus provides quality education in line with Kenya's Competency-Based Curriculum. We serve the local community while maintaining national education standards.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our campus features modern CBC-appropriate learning spaces designed to nurture every child's potential.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                            <p className="font-semibold text-green-800">Our Vision:</p>
                            <p className="text-gray-700">To be a center of excellence in CBC implementation, developing well-rounded learners who excel academically and contribute positively to society.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CBC Structure with Images */}
            <section className="mb-16 bg-green-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Our CBC Structure</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* ECDE */}
                    <div className="bg-white rounded-lg shadow-sm border border-green-100 overflow-hidden">
                        <img 
                            src="/banner-images/early-years.jpeg" 
                            alt="Happy ECDE children in classroom"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-green-700 mb-3">Early Years Education (ECDE)</h3>
                            <p className="text-gray-700 mb-3">Ages 4-6 (PP1, PP2)</p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                <li>Play-based learning</li>
                                <li>Language activities</li>
                                <li>Environmental activities</li>
                                <li>Psychomotor activities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Lower Primary */}
                    <div className="bg-white rounded-lg shadow-sm border border-green-100 overflow-hidden">
                        <img 
                            src="/banner-images/lower-primary.jpeg" 
                            alt="Lower primary students learning"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-green-700 mb-3">Lower Primary</h3>
                            <p className="text-gray-700 mb-3">Grades 1-3 (Ages 6-9)</p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                <li>Literacy</li>
                                <li>Kiswahili</li>
                                <li>English</li>
                                <li>Mathematics</li>
                                <li>Environmental Activities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Upper Primary */}
                    <div className="bg-white rounded-lg shadow-sm border border-green-100 overflow-hidden">
                        <img 
                            src="/banner-images/upper-primary.jpeg" 
                            alt="Upper primary students in science class"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-green-700 mb-3">Upper Primary</h3>
                            <p className="text-gray-700 mb-3">Grades 4-6 (Ages 9-12)</p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                <li>English</li>
                                <li>Kiswahili</li>
                                <li>Mathematics</li>
                                <li>Science & Technology</li>
                                <li>Social Studies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies Gallery */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Developing Kenya's 7 Core Competencies</h2>
                
                {/* Competency 1 */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="md:w-1/3">
                        <img 
                            src="/banner-images/project.jpeg" 
                            alt="Students working together on project"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">1. Communication & Collaboration</h3>
                        <p className="text-gray-700 mb-3">
                            Students develop strong communication skills in both English and Kiswahili through group projects, presentations, and peer learning activities. Our collaborative learning spaces encourage teamwork and effective communication.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <p className="font-semibold text-green-700">Example Activity:</p>
                            <p className="text-gray-700">Weekly debate club where students discuss current issues in both English and Kiswahili.</p>
                        </div>
                    </div>
                </div>

                {/* Competency 2 */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="md:w-1/3 order-2 md:order-1">
                        <img 
                            src="/banner-images/solving-puzzles.jpeg" 
                            alt="Students solving puzzles"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="md:w-2/3 order-1 md:order-2">
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">2. Critical Thinking & Problem Solving</h3>
                        <p className="text-gray-700 mb-3">
                            Through STEM challenges, real-world scenario analysis, and open-ended projects, students learn to approach problems methodically and think outside the box.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <p className="font-semibold text-green-700">Example Activity:</p>
                            <p className="text-gray-700">Monthly "Innovation Day" where students design solutions to community problems.</p>
                        </div>
                    </div>
                </div>

                {/* Competency 3 */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="md:w-1/3">
                        <img 
                            src="/banner-images/creative-thinking.jpeg" 
                            alt="Students in art class"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">3. Imagination & Creativity</h3>
                        <p className="text-gray-700 mb-3">
                            Our dedicated arts program and innovative project work encourage students to express themselves creatively through visual arts, music, drama, and creative writing.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <p className="font-semibold text-green-700">Example Activity:</p>
                            <p className="text-gray-700">Annual art exhibition showcasing student work in painting, sculpture, and digital media.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scouts and Community Impact Section */}
            <section className="mb-16 bg-green-800 text-white p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6">Scouting for a Better Bungoma</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <img 
                            src="/gallery/cbc/scouts.jpg" 
                            alt="Scouts engaging in local activities"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-4">Scouts in Action</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Engaging in tree planting drives and clean-up campaigns</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Supporting local health initiatives through volunteer work</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Organizing peer mentorship and leadership workshops</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <img 
                            src="/gallery/cbc/scouts-1.jpg" 
                            alt="Scouts participating in community service"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-700 p-3 rounded text-center text-sm">Environmental Awareness</div>
                            <div className="bg-green-700 p-3 rounded text-center text-sm">Disaster Preparedness Training</div>
                            <div className="bg-green-700 p-3 rounded text-center text-sm">Youth Empowerment Projects</div>
                            <div className="bg-green-700 p-3 rounded text-center text-sm">Peace and Unity Campaigns</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Co-Curricular Activities Gallery */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Co-Curricular Activities</h2>
                
                {/* Sports Gallery */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Sports Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <img src="/gallery/cbc/football.jpg" alt="School football team" className="w-full h-48 object-cover rounded-lg" />
                        <img src="/gallery/cbc/netball.jpg" alt="Netball practice" className="w-full h-48 object-cover rounded-lg" />
                        <img src="/gallery/cbc/athletics.jpg" alt="Athletics competition" className="w-full h-48 object-cover rounded-lg" />
                        <img src="/gallery/cbc/chess.jpg" alt="Traditional games" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <p className="text-gray-700">
                        Our sports program develops physical skills, teamwork, and discipline. We compete in county tournaments and have produced several regional champions.
                    </p>
                </div>

                {/* Performing Arts Gallery */}
                {/* <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Performing Arts</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <img src="/images/drama-performance.jpg" alt="Drama performance" className="w-full h-48 object-cover rounded-lg" />
                        <img src="/images/bukusu-dance.jpg" alt="Traditional Bukusu dance" className="w-full h-48 object-cover rounded-lg" />
                        <img src="/images/choir.jpg" alt="School choir" className="w-full h-48 object-cover rounded-lg" />
                        <img src="/images/music-class.jpg" alt="Music class" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <p className="text-gray-700">
                        Our performing arts program celebrates both local traditions and global artistic expressions, with annual performances that showcase student talent.
                    </p>
                </div> */}
            </section>

            {/* Facilities Gallery */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Our World-Class CBC Facilities</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold text-green-700 mb-4">Learning Environment</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <img src="/banner-images/cbc-classroom.jpeg" alt="CBC classroom" className="w-full h-48 object-cover rounded-lg" />
                            <img src="/gallery/cbc/science-corner.webp" alt="Science corner" className="w-full h-48 object-cover rounded-lg" />
                        </div>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li>Spacious CBC-designed classrooms with learning corners</li>
                            <li>Modern computer lab with internet access</li>
                            <li>Science corner for practical experiments</li>
                            {/* <li>Well-stocked library with reading areas</li> */}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-green-700 mb-4">All Round</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <img src="/gallery/cbc/computer-lab.jpg" alt="Computer lab" className="w-full h-48 object-cover rounded-lg" />
                            <img src="/gallery/cbc/garden.jpg"  alt="Agricultural plot" className="w-full h-48 object-cover rounded-lg" />
                        </div>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li>Safe playground with age-appropriate equipment</li>
                            <li>Agricultural plot for practical farming lessons</li>
                            {/* <li>Sports field for football, athletics and games</li>
                            <li>Shaded outdoor learning spaces</li> */}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials with Images */}
            <section className="mb-16 bg-green-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">What Our Community Says</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-4">
                            <img 
                                src="/home-page/male-avatar.png" 
                                alt="Happy parent" 
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-green-700">Mr. Wanyama</p>
                                <p className="text-sm text-gray-600">Parent</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "The CBC approach at Leeds has made my child love learning. She's not just memorizing facts but developing real skills she uses every day."
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-4">
                            <img 
                                src="/home-page/female-avatar.png" 
                                alt="Happy student" 
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-green-700">Wanjiku K.</p>
                                <p className="text-sm text-gray-600">Grade 5 Student</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "I love coming to school because we get to do so many fun activities. My favorite is the agriculture class where we grow vegetables."
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-4">
                            <img 
                                src="/home-page/female-avatar.png"
                                alt="Teacher" 
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-green-700">Madam Atieno</p>
                                <p className="text-sm text-gray-600">ECDE Teacher</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "Teaching the CBC curriculum is rewarding because I see children developing holistically - not just academically but in all aspects of life."
                        </p>
                    </div>
                </div>
            </section>

            {/* Admissions with Image */}
            <section className="mb-16">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <img 
                            src="/gallery/cbc/admission.jpg" 
                            alt="Admissions Process"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Admissions Process</h2>
                        <p className="text-gray-700 mb-6">
                            We welcome applications throughout the year for our CBC program. Our admissions team will guide you through every step of the process.
                        </p>
                        <div className="bg-white border border-green-200 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-green-700 mb-3">Requirements</h3>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                <li>Completed application form</li>
                                <li>Birth certificate</li>
                                <li>Previous school report (if transferring)</li>
                                <li>2 passport photos</li>
                                <li>Medical form</li>
                                <li>KCPE results (for Grade 7)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact with Map */}
            <section className="bg-green-800 text-white rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
                        <p className="mb-6 text-green-100">
                            Located along Tongaren-Matunda Road, Bungoma County, Soysambu Mitua Ward
                        </p>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <svg className="h-6 w-6 text-green-300 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p className="text-green-200">+254 723 456 789</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-6 w-6 text-green-300 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-green-200">admissions@leeds-cbc.edu</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-6 w-6 text-green-300 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Address</p>
                                    <p className="text-green-200">Tongaren-Matunda Road, Bungoma County<br />Soysambu Mitua Ward</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-700 p-8 flex items-center justify-center h-full">
                        <img 
                            src="/banner-images/map.jpeg" 
                            alt="Map of Leeds CBC Campus location"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cbc_Campus;