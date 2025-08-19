import Head from 'next/head';

const Cbc_Campus = () => {
    return (
        <>
            <Head>
                <title>Leeds School CBC Campus | Quality CBC Education in Bungoma County</title>
                <meta name="description" content="Leeds School CBC Campus offers Kenya's Competency-Based Curriculum (CBC) with modern facilities, experienced teachers, and holistic development programs in Bungoma County." />
                <meta name="keywords" content="CBC school Bungoma, best CBC school Kenya, Leeds School Tongaren, quality education Bungoma, CBC curriculum Kenya" />
                <meta property="og:title" content="Leeds School CBC Campus | Quality CBC Education" />
                <meta property="og:description" content="Nurturing competencies, values, and talents through Kenya's CBC curriculum in Bungoma County." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.leedsschool.edu/cbc-campus" />
                <meta property="og:image" content="https://www.leedsschool.edu/images/cbc-campus-hero.jpg" />
                <link rel="canonical" href="https://www.leedsschool.edu/cbc-campus" />
            </Head>

            <main className="max-w-6xl mx-auto px-6 py-12 mt-20">
                {/* Hero Section with Image */}
                <header className="relative mb-12 rounded-xl overflow-hidden">
                    <div className="bg-green-800 h-96 flex items-center justify-center">
                        <img 
                            src="/images/cbc-campus-hero.jpg" 
                            alt="Leeds School CBC Campus - Happy students in classroom"
                            className="w-full h-full object-cover"
                            loading="eager"
                            width={1200}
                            height={600}
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
                </header>

                {/* Quick Facts */}
                <section aria-labelledby="quick-facts-heading" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
                    <h2 id="quick-facts-heading" className="sr-only">Quick Facts About Our CBC Campus</h2>
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
                </section>

                {/* About Our CBC Campus with Image */}
                <section aria-labelledby="about-campus-heading" className="mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <img 
                                src="/gallery/cbc/gate.jpg" 
                                alt="Aerial view of Leeds CBC Campus along Tongaren-Matunda Road"
                                className="w-full h-auto rounded-lg shadow-md"
                                loading="lazy"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 id="about-campus-heading" className="text-3xl font-bold text-green-800 mb-4">About Our CBC Campus</h2>
                            <p className="text-gray-700 mb-4">
                                Located along the Tongaren-Matunda Road in Bungoma County, Soysambu Mitua Ward, our CBC Campus provides quality education in line with Kenya's Competency-Based Curriculum. We serve the local community while maintaining national education standards.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our campus features modern CBC-appropriate learning spaces designed to nurture every child's potential through hands-on learning and personalized attention.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                                <p className="font-semibold text-green-800">Our Vision:</p>
                                <p className="text-gray-700">To be a center of excellence in CBC implementation, developing well-rounded learners who excel academically and contribute positively to society.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CBC Structure with Images */}
                <section aria-labelledby="cbc-structure-heading" className="mb-16 bg-green-50 p-8 rounded-xl">
                    <h2 id="cbc-structure-heading" className="text-3xl font-bold text-green-800 mb-6 text-center">Our CBC Structure</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* ECDE */}
                        <article className="bg-white rounded-lg shadow-sm border border-green-100 overflow-hidden">
                            <img 
                                src="/banner-images/early-years.jpeg" 
                                alt="Happy ECDE children in classroom engaging in play-based learning"
                                className="w-full h-48 object-cover"
                                loading="lazy"
                                width={400}
                                height={300}
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
                        </article>

                        {/* Lower Primary */}
                        <article className="bg-white rounded-lg shadow-sm border border-green-100 overflow-hidden">
                            <img 
                                src="/banner-images/lower-primary.jpeg" 
                                alt="Lower primary students learning literacy and numeracy skills"
                                className="w-full h-48 object-cover"
                                loading="lazy"
                                width={400}
                                height={300}
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
                        </article>

                        {/* Upper Primary */}
                        <article className="bg-white rounded-lg shadow-sm border border-green-100 overflow-hidden">
                            <img 
                                src="/banner-images/upper-primary.jpeg" 
                                alt="Upper primary students conducting science experiments in class"
                                className="w-full h-48 object-cover"
                                loading="lazy"
                                width={400}
                                height={300}
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
                        </article>
                    </div>
                </section>

                {/* Core Competencies Gallery */}
                <section aria-labelledby="core-competencies-heading" className="mb-16">
                    <h2 id="core-competencies-heading" className="text-3xl font-bold text-green-800 mb-6">Developing Kenya's 7 Core Competencies</h2>
                    
                    {/* Competency 1 */}
                    <article className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="md:w-1/3">
                            <img 
                                src="/banner-images/project.jpeg" 
                                alt="Students working together on a collaborative project"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                                width={400}
                                height={300}
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
                    </article>

                    {/* Competency 2 */}
                    <article className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="md:w-1/3 order-2 md:order-1">
                            <img 
                                src="/banner-images/solving-puzzles.jpeg" 
                                alt="Students solving math puzzles and critical thinking challenges"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                                width={400}
                                height={300}
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
                    </article>

                    {/* Competency 3 */}
                    <article className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="md:w-1/3">
                            <img 
                                src="/banner-images/creative-thinking.jpeg" 
                                alt="Students expressing creativity in art class"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                                width={400}
                                height={300}
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
                    </article>
                </section>

                {/* Scouts and Community Impact Section */}
                <section aria-labelledby="scouts-impact-heading" className="mb-16 bg-green-800 text-white p-8 rounded-xl">
                    <h2 id="scouts-impact-heading" className="text-3xl font-bold mb-6">Scouting for a Better Bungoma</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <img 
                                src="/gallery/cbc/scouts.jpg" 
                                alt="Leeds School scouts engaging in local community activities"
                                className="w-full h-auto rounded-lg mb-4"
                                loading="lazy"
                                width={600}
                                height={400}
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
                                alt="Scouts participating in community service activities"
                                className="w-full h-auto rounded-lg mb-4"
                                loading="lazy"
                                width={600}
                                height={400}
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
                <section aria-labelledby="co-curricular-heading" className="mb-16">
                    <h2 id="co-curricular-heading" className="text-3xl font-bold text-green-800 mb-6">Co-Curricular Activities</h2>
                    
                    {/* Sports Gallery */}
                    <article className="mb-8">
                        <h3 className="text-2xl font-semibold text-green-700 mb-4">Sports Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <img 
                                src="/gallery/cbc/football.jpg" 
                                alt="Leeds School football team in action" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                            <img 
                                src="/gallery/cbc/pool.jpg" 
                                alt="Students practicing netball skills" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                            <img 
                                src="/gallery/cbc/swimming.jpg" 
                                alt="Students participating in swimming lessons" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                            <img 
                                src="/gallery/cbc/chess.jpg" 
                                alt="Students engaged in chess competition" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                        </div>
                        <p className="text-gray-700">
                            Our sports program develops physical skills, teamwork, and discipline. We compete in county tournaments and have produced several regional champions in football, netball, and athletics.
                        </p>
                    </article>

                    {/* Performing Arts Gallery */}
                    <article className="mb-8">
                        <h3 className="text-2xl font-semibold text-green-700 mb-4">Performing Arts</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <img 
                                src="/gallery/cbc/drama.jpg" 
                                alt="Students performing in drama festival" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                            <img 
                                src="/gallery/cbc/drama-2.jpg" 
                                alt="Students performing traditional Bukusu dance" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                            <img 
                                src="/gallery/cbc/drama-3.jpg" 
                                alt="Leeds School choir performing" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                            <img 
                                src="/gallery/cbc/sing.jpg" 
                                alt="Students learning music instruments in class" 
                                className="w-full h-48 object-cover rounded-lg"
                                loading="lazy"
                                width={300}
                                height={200}
                            />
                        </div>
                        <p className="text-gray-700">
                            Our performing arts program celebrates both local traditions and global artistic expressions, with annual performances that showcase student talent in music, dance, and drama.
                        </p>
                    </article> 
                </section>

                {/* Facilities Gallery */}
                <section aria-labelledby="facilities-heading" className="mb-16">
                    <h2 id="facilities-heading" className="text-3xl font-bold text-green-800 mb-6">Our World-Class CBC Facilities</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <article>
                            <h3 className="text-xl font-semibold text-green-700 mb-4">Learning Environment</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <img 
                                    src="/gallery/cbc/environment.jpg" 
                                    alt="Modern CBC classroom at Leeds School" 
                                    className="w-full h-48 object-cover rounded-lg"
                                    loading="lazy"
                                    width={300}
                                    height={200}
                                />
                                <img 
                                    src="/gallery/cbc/class.jpg" 
                                    alt="Students in science corner conducting experiments" 
                                    className="w-full h-48 object-cover rounded-lg"
                                    loading="lazy"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                <li>Spacious CBC-designed classrooms with learning corners</li>
                                <li>Modern computer lab with internet access</li>
                                <li>Science corner for practical experiments</li>
                                <li>Interactive whiteboards in all classrooms</li>
                            </ul>
                        </article>
                        <article>
                            <h3 className="text-xl font-semibold text-green-700 mb-4">All Round Development</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <img 
                                    src="/gallery/cbc/computer-lab.jpg" 
                                    alt="Students in computer lab learning digital skills" 
                                    className="w-full h-48 object-cover rounded-lg"
                                    loading="lazy"
                                    width={300}
                                    height={200}
                                />
                                <img 
                                    src="/gallery/cbc/garden.jpg"  
                                    alt="Students tending to school garden for agriculture lessons" 
                                    className="w-full h-48 object-cover rounded-lg"
                                    loading="lazy"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                <li>Safe playground with age-appropriate equipment</li>
                                <li>Agricultural plot for practical farming lessons</li>
                                <li>Multi-purpose hall for indoor activities</li>
                                <li>Sports field for football, athletics and games</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Testimonials with Images */}
                <section aria-labelledby="testimonials-heading" className="mb-16 bg-green-50 p-8 rounded-xl">
                    <h2 id="testimonials-heading" className="text-3xl font-bold text-green-800 mb-6 text-center">What Our Community Says</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <article className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <img 
                                    src="/home-page/male-avatar.png" 
                                    alt="Happy parent Mr. Wanyama" 
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                    loading="lazy"
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <p className="font-semibold text-green-700">Mr. Wanyama</p>
                                    <p className="text-sm text-gray-600">Parent</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "The CBC approach at Leeds has made my child love learning. She's not just memorizing facts but developing real skills she uses every day."
                            </p>
                        </article>
                        <article className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <img 
                                    src="/home-page/female-avatar.png" 
                                    alt="Happy student Wanjiku K." 
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                    loading="lazy"
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <p className="font-semibold text-green-700">Wanjiku K.</p>
                                    <p className="text-sm text-gray-600">Grade 5 Student</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "I love coming to school because we get to do so many fun activities. My favorite is the agriculture class where we grow vegetables."
                            </p>
                        </article>
                        <article className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <img 
                                    src="/home-page/female-avatar.png"
                                    alt="ECDE teacher Madam Atieno" 
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                    loading="lazy"
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <p className="font-semibold text-green-700">Madam Atieno</p>
                                    <p className="text-sm text-gray-600">ECDE Teacher</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "Teaching the CBC curriculum is rewarding because I see children developing holistically - not just academically but in all aspects of life."
                            </p>
                        </article>
                    </div>
                </section>

                {/* Admissions with Image */}
                <section aria-labelledby="admissions-heading" className="mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <img 
                                src="/gallery/cbc/admission.jpg" 
                                alt="Friendly admissions process at Leeds School CBC Campus"
                                className="w-full h-auto rounded-lg shadow-md"
                                loading="lazy"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 id="admissions-heading" className="text-3xl font-bold text-green-800 mb-4">Admissions Process</h2>
                            <p className="text-gray-700 mb-6">
                                We welcome applications throughout the year for our CBC program. Our admissions team will guide you through every step of the process to ensure a smooth transition for your child.
                            </p>
                            <div className="bg-white border border-green-200 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-green-700 mb-3">Requirements</h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                    <li>Completed application form (available online or at school)</li>
                                    <li>Birth certificate (copy)</li>
                                    <li>Previous school report (if transferring)</li>
                                    <li>2 recent passport photos</li>
                                    <li>Completed medical form</li>
                                    <li>KCPE results (for Grade 7 applicants)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact with Map */}
                <section aria-labelledby="contact-heading" className="bg-green-800 text-white rounded-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <h2 id="contact-heading" className="text-3xl font-bold mb-4">Visit Our Campus</h2>
                            <p className="mb-6 text-green-100">
                                Located along Tongaren-Matunda Road, Bungoma County, Soysambu Mitua Ward. Easily accessible from major towns in Western Kenya.
                            </p>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start">
                                    <svg className="h-6 w-6 text-green-300 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <p className="text-green-200">0112282923</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="h-6 w-6 text-green-300 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-green-200">info@leedspremierschools.sc.ke</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="h-6 w-6 text-green-300 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold">Address</p>
                                        <p className="text-green-200">Tongaren-Matunda Road, Bungoma County<br />Soysambu Mitua Ward, Brigadier Market</p>
                                        <p className="text-green-200">P.O. Box 4175, Kitale</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-700 p-8 flex items-center justify-center h-full">
                            <img 
                                src="/gallery/cbc/last-image.jpg" 
                                alt="Map showing location of Leeds CBC Campus in Bungoma County"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Cbc_Campus;