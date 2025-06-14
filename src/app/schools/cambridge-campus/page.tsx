const CambridgeCampus = () => {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 mt-20    ">
        {/* Hero Section with Image */}
        <div className="relative mb-12 rounded-xl overflow-hidden">
          {/* Image placeholder - replace with actual campus image */}
          <div className="bg-teal-800 h-96 flex items-center justify-center text-white text-5xl">
            [Campus Hero Image]
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Leeds School – Cambridge Campus</h1>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                A premier international education institution offering the complete Cambridge Pathway from Early Years through A-Levels
              </p>
            </div>
          </div>
        </div>
  
        {/* Quick Facts Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <p className="text-teal-800 font-bold text-2xl">6+</p>
            <p className="text-teal-600">Since 2019</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <p className="text-teal-800 font-bold text-2xl">100%</p>
            <p className="text-teal-600">University Acceptance</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <p className="text-teal-800 font-bold text-2xl">1:8</p>
            <p className="text-teal-600">Teacher-Student Ratio</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <p className="text-teal-800 font-bold text-2xl">50+</p>
            <p className="text-teal-600">IGCSE Subject Options</p>
          </div>
        </div>
  
        {/* About the Campus */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
                <img src="/banner-images/about-school.jpeg" alt="Description of your image" className="h-90 w-full object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">About Our Cambridge Campus</h2>
              <p className="text-gray-700 mb-4">
                As one of Leeds Premier Schools' three distinguished institutions, our Cambridge Campus provides an internationally accredited education under the Cambridge Assessment International Education system. Established in 2019, we've grown to become a benchmark for excellence in international education.
              </p>
              <p className="text-gray-700 mb-4">
                Our 15-acre campus combines historic architecture with cutting-edge learning facilities, creating an environment that inspires academic achievement and personal growth.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                <p className="font-semibold text-teal-800">Mission:</p>
                <p className="text-gray-700">To develop inquiring, knowledgeable and caring young people who help create a better world through intercultural understanding and respect.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* School Hierarchy */}
        <section className="mb-16 bg-teal-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Our School Structure</h2>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
              <h3 className="font-bold text-teal-700 mb-2">Early Years</h3>
              <p className="text-sm text-gray-600">Ages 3-5</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
              <h3 className="font-bold text-teal-700 mb-2">Primary School</h3>
              <p className="text-sm text-gray-600">Years 1-6 (Ages 5-11)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
              <h3 className="font-bold text-teal-700 mb-2">Lower Secondary</h3>
              <p className="text-sm text-gray-600">Years 7-9 (Ages 11-14)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
              <h3 className="font-bold text-teal-700 mb-2">Upper Secondary</h3>
              <p className="text-sm text-gray-600">Years 10-11 (Ages 14-16)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
              <h3 className="font-bold text-teal-700 mb-2">Sixth Form</h3>
              <p className="text-sm text-gray-600">Years 12-13 (Ages 16-18)</p>
            </div>
          </div>
        </section>
  
        {/* Detailed Curriculum Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Cambridge Curriculum at Leeds</h2>
          
          <div className="space-y-12">
            {/* Early Years */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img src="/banner-images/3-5.jpeg" alt="Description of your image" className="h-60 w-full object-cover rounded-lg" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">Early Years (Ages 3–5)</h3>
                <p className="text-gray-700 mb-3">
                  Our Early Years Foundation Stage (EYFS) program nurtures natural curiosity through play-based learning while developing essential early literacy, numeracy, and social skills.
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Specialized phonics and early reading programs</li>
                  <li>Hands-on mathematics with concrete materials</li>
                  <li>Weekly specialist classes in music, PE, and library</li>
                  <li>Outdoor learning in our dedicated Early Years garden</li>
                  <li>Progress tracking through the Cambridge Early Years curriculum</li>
                </ul>
              </div>
            </div>
  
            {/* Primary */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 order-2 md:order-1">
                <img src="/banner-images/5-11.jpeg" alt="Description of your image" className="h-60 w-full object-cover rounded-lg" />
              </div>
              <div className="md:w-2/3 order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">Primary (Ages 5–11)</h3>
                <p className="text-gray-700 mb-3">
                  The Cambridge Primary program builds strong foundations in core subjects while encouraging inquiry-based learning and creative thinking.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Core Subjects:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                      <li>English (First Language or ESL)</li>
                      <li>Mathematics</li>
                      <li>Science</li>
                      <li>Global Perspectives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Specialist Subjects:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                      <li>ICT & Digital Literacy</li>
                      <li>Art & Design</li>
                      <li>Physical Education</li>
                      <li>Modern Languages (French/Spanish)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Lower Secondary */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img src="/banner-images/11-14.jpeg" alt="Description of your image" className="h-60 w-full object-cover rounded-lg" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">Lower Secondary (Ages 11–14)</h3>
                <p className="text-gray-700 mb-3">
                  Our Lower Secondary program prepares students for IGCSEs with a broad curriculum that maintains core subject focus while introducing subject specialization.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-teal-600 mb-1">Key Features:</h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Cambridge Checkpoint assessments in Year 9</li>
                    <li>Introduction to subject specialist teachers</li>
                    <li>Expanded STEAM curriculum with robotics and coding</li>
                    <li>Personal learning portfolios and progress tracking</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Students take 12-14 subjects including core academics, two modern languages, and three elective subjects.
                </p>
              </div>
            </div>
  
            {/* IGCSE */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 order-2 md:order-1">
                <img src="/banner-images/14-16.jpeg" alt="Description of your image" className="h-60 w-full object-cover rounded-lg" />
              </div>
              <div className="md:w-2/3 order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">IGCSE (Ages 14–16)</h3>
                <p className="text-gray-700 mb-3">
                  The International General Certificate of Secondary Education offers rigorous academic preparation with flexible subject choices.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Compulsory:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                      <li>English Language</li>
                      <li>Mathematics</li>
                      <li>Combined Science</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Popular Options:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                      <li>Business Studies</li>
                      <li>Computer Science</li>
                      <li>Geography</li>
                      <li>History</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Additional Options:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                      <li>Art & Design</li>
                      <li>Music</li>
                      <li>Physical Education</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Students typically take 8-10 IGCSE subjects, including at least one modern language.
                </p>
              </div>
            </div>
  
            {/* A-Level */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img src="/banner-images/16-18.jpeg" alt="A-level" className="h-60 w-full object-cover rounded-lg" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">A-Level (Ages 16–18)</h3>
                <p className="text-gray-700 mb-3">
                  Our Sixth Form offers the gold standard Cambridge International A-Levels, preparing students for top universities worldwide.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-teal-600 mb-1">Program Structure:</h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Students choose 3-4 A-Level subjects</li>
                    <li>Option for Extended Project Qualification (EPQ)</li>
                    <li>University preparation program including UCAS/Common App support</li>
                    <li>Leadership opportunities through prefect system</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Science Stream:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                      <li>Mathematics</li>
                      <li>Further Mathematics</li>
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Biology</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Arts/Humanities:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                      <li>English Literature</li>
                      <li>History</li>
                      <li>Geography</li>
                      <li>Psychology</li>
                      <li>Economics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-1">Professional:</h4>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                      <li>Business</li>
                      <li>Accounting</li>
                      <li>Computer Science</li>
                      <li>Art & Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Facilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Our World-Class Facilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Academic Facilities */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Academic Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>30+ modern classrooms with interactive whiteboards</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Specialist science labs for biology, chemistry, and physics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Dedicated computer labs with programming workstations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>STEAM innovation hub with 3D printers and robotics equipment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Two well-stocked libraries with quiet study areas</span>
                </li>
              </ul>
            </div>
            
            {/* Sports & Arts */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Sports & Arts Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Olympic-sized swimming pool</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Full-sized sports field for football, rugby, and athletics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Indoor sports hall for basketball, badminton, and gymnastics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Performing arts theatre with 300-seat capacity</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Music rooms with practice studios and recording facilities</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Facilities Gallery Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-teal-100 h-40 rounded-lg flex items-center justify-center text-teal-800">
                <img src="/banner-images/art-room.jpeg" alt="art room" className="h-50 w-full object-cover rounded-lg" />
            </div>
            <div className="bg-teal-100 h-40 rounded-lg flex items-center justify-center text-teal-800">
                <img src="/banner-images/outdoor.jpeg" alt="Outdoors" className="h-50 w-full object-cover rounded-lg" />
            </div>
            <div className="bg-teal-100 h-40 rounded-lg flex items-center justify-center">
                <img src="/banner-images/bus.jpeg" alt="School bus" className="h-50 w-full object-cover rounded-lg" />
            </div>
            <div className="bg-teal-100 h-40 rounded-lg flex items-center justify-center text-teal-800">
                <img src="/banner-images/swimming.jpeg" alt="swimming pool" className="h-50 w-full object-cover rounded-lg" />
            </div>
          </div>
        </section>
  
        {/* Academic Excellence */}
        <section className="mb-16 bg-teal-800 text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Academic Excellence</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Track Record</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>98% pass rate in Cambridge IGCSE examinations (2023)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>45% of A-Level grades at A* or A (2023)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Top 10% worldwide for Cambridge English results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% university acceptance rate for Sixth Form leavers</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">University Destinations</h3>
              <p className="mb-4">Our graduates have been accepted to prestigious universities worldwide, including:</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-teal-700 p-2 rounded text-center text-sm">University of Oxford</div>
                <div className="bg-teal-700 p-2 rounded text-center text-sm">Imperial College</div>
                <div className="bg-teal-700 p-2 rounded text-center text-sm">UCL</div>
                <div className="bg-teal-700 p-2 rounded text-center text-sm">Harvard</div>
                <div className="bg-teal-700 p-2 rounded text-center text-sm">MIT</div>
                <div className="bg-teal-700 p-2 rounded text-center text-sm">University of Toronto</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Student Life */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Student Life at Leeds Cambridge</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Co-Curricular */}
            <div className="border border-teal-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-3">Co-Curricular Activities</h3>
              <p className="text-gray-700 mb-3">We offer over 50 clubs and activities to develop talents beyond the classroom:</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Debate & Model United Nations</li>
                <li>Robotics & Coding Club</li>
                <li>Young Entrepreneurs Program</li>
                <li>Drama & Musical Productions</li>
                <li>Sports Academies (Swimming, Football, Basketball)</li>
              </ul>
            </div>
            
            {/* House System */}
            <div className="border border-teal-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-3">House System</h3>
              <p className="text-gray-700 mb-3">All students belong to one of four houses, fostering community and healthy competition:</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-red-100 text-red-800 p-2 rounded text-center text-sm">Newton</div>
                <div className="bg-blue-100 text-blue-800 p-2 rounded text-center text-sm">Darwin</div>
                <div className="bg-yellow-100 text-yellow-800 p-2 rounded text-center text-sm">Curie</div>
                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">Einstein</div>
              </div>
              <p className="text-gray-700 text-sm">Houses compete in academic, sporting, and artistic events throughout the year.</p>
            </div>
            
            {/* Student Support */}
            <div className="border border-teal-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-3">Student Support</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Dedicated pastoral care team</li>
                <li>University and career counseling from Year 9</li>
                <li>Learning support for students with additional needs</li>
                <li>EAL program for non-native English speakers</li>
                <li>Mental health and wellbeing program</li>
              </ul>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="bg-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-teal-800 mb-6 text-center">What Our Community Says</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-4">"The Cambridge curriculum at Leeds prepared me perfectly for studying Medicine at university. The small class sizes meant I got the attention I needed to excel."</p>
                <p className="font-semibold text-teal-700">— Sarah K., Alumni</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-4">"As an expat family, we valued the international perspective combined with strong academic rigor. Our children thrived both academically and socially."</p>
                <p className="font-semibold text-teal-700">— The J. Omondi's Family</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-4">"Teaching the Cambridge curriculum here is rewarding because of the engaged students and excellent resources. We're able to really stretch our top students."</p>
                <p className="font-semibold text-teal-700">— Mr. Davies, Head of Science</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Admissions Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Admissions Process</h2>
          
          <div className="bg-white border border-teal-100 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-teal-100">
              <div className="p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center text-teal-800 font-bold mb-3">1</div>
                <h3 className="font-semibold text-teal-700 mb-2">Inquiry</h3>
                <p className="text-gray-700 text-sm">Submit online inquiry or attend an open day</p>
              </div>
              <div className="p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center text-teal-800 font-bold mb-3">2</div>
                <h3 className="font-semibold text-teal-700 mb-2">Assessment</h3>
                <p className="text-gray-700 text-sm">Age-appropriate academic assessment</p>
              </div>
              <div className="p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center text-teal-800 font-bold mb-3">3</div>
                <h3 className="font-semibold text-teal-700 mb-2">Interview</h3>
                <p className="text-gray-700 text-sm">Meeting with academic staff</p>
              </div>
              <div className="p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center text-teal-800 font-bold mb-3">4</div>
                <h3 className="font-semibold text-teal-700 mb-2">Offer</h3>
                <p className="text-gray-700 text-sm">Admission decision communicated</p>
              </div>
              <div className="p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center text-teal-800 font-bold mb-3">5</div>
                <h3 className="font-semibold text-teal-700 mb-2">Enrollment</h3>
                <p className="text-gray-700 text-sm">Complete paperwork and payment</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-3">Key Dates</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-teal-100 pb-2">
                  <span className="text-gray-700">September Intake Applications Open</span>
                  <span className="font-semibold text-teal-700">1st January</span>
                </li>
                <li className="flex justify-between border-b border-teal-100 pb-2">
                  <span className="text-gray-700">Scholarship Deadline</span>
                  <span className="font-semibold text-teal-700">1st March</span>
                </li>
                <li className="flex justify-between border-b border-teal-100 pb-2">
                  <span className="text-gray-700">Entrance Exams</span>
                  <span className="font-semibold text-teal-700">April-May</span>
                </li>
                <li className="flex justify-between border-b border-teal-100 pb-2">
                  <span className="text-gray-700">Academic Year Begins</span>
                  <span className="font-semibold text-teal-700">Early September</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-3">Fees & Scholarships</h3>
              <div className="bg-teal-50 p-4 rounded-lg mb-3">
                <p className="font-semibold text-teal-800 mb-1">Annual Tuition Fees:</p>
                <p className="text-gray-700">Early Years: KES 250,000 | Primary: KES 450,000 | Secondary: KES 600,000 | Sixth Form: KES 700,000</p>
              </div>
              <p className="text-gray-700 mb-3">We offer merit-based scholarships and need-based financial aid:</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Academic Excellence Scholarships (up to 50% tuition)</li>
                <li>Sports & Arts Scholarships</li>
                <li>Sibling Discounts</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Meet Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-teal-100 rounded-lg overflow-hidden">
              <div className="bg-teal-100 h-48 flex items-center justify-center text-teal-800">
                <img src="/banner-images/headteacher.jpeg" alt="headteacher" className="h-50 w-full object-cover rounded-lg" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-1">Dr. Jonathan Whitmore</h3>
                <p className="text-teal-600 mb-3">Headmaster</p>
                <p className="text-gray-700 text-sm">PhD in Education (Cambridge), 20+ years experience in international schools</p>
              </div>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg overflow-hidden">
              <div className="bg-teal-100 h-48 flex items-center justify-center text-teal-800">
                <img src="/banner-images/elizabeth.jpeg" alt="Mrs Elizabeth" className="h-50 w-full object-cover rounded-lg" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-1">Mrs. Elizabeth Ng</h3>
                <p className="text-teal-600 mb-3">Head of Primary</p>
                <p className="text-gray-700 text-sm">Specialist in early childhood education, trained at the Institute of Education London</p>
              </div>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg overflow-hidden">
              <div className="bg-teal-100 h-48 flex items-center justify-center text-teal-800">
                <img src="/banner-images/Mrs-David.jpeg" alt="Mrs david" className="h-50 w-full object-cover rounded-lg" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-1">Mrs. David </h3>
                <p className="text-teal-600 mb-3">Head of Secondary</p>
                <p className="text-gray-700 text-sm">Former Cambridge International examiner, chemistry specialist</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Comparison with Other Leeds Schools */}
        <section className="mb-16 bg-teal-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Leeds Premier Schools Comparison</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Leeds Premier Schools comprises three distinct institutions, each offering a different curriculum to meet diverse educational needs.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-teal-800 text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Cambridge Campus</th>
                  <th className="p-4 text-left">IB Campus</th>
                  <th className="p-4 text-left">National Curriculum Campus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-100">
                <tr>
                  <td className="p-4 font-semibold text-teal-700">Curriculum</td>
                  <td className="p-4">Cambridge Pathway (Early Years to A-Level)</td>
                  <td className="p-4">International Baccalaureate (PYP to DP)</td>
                  <td className="p-4">National Curriculum of England</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="p-4 font-semibold text-teal-700">Focus</td>
                  <td className="p-4">Subject specialization, exam preparation</td>
                  <td className="p-4">Inquiry-based, interdisciplinary learning</td>
                  <td className="p-4">Broad foundation with local context</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-teal-700">Assessment</td>
                  <td className="p-4">Cambridge Checkpoints, IGCSE, A-Levels</td>
                  <td className="p-4">IB PYP Exhibition, MYP ePortfolio, DP exams</td>
                  <td className="p-4">Teacher assessment, SATs, GCSEs</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="p-4 font-semibold text-teal-700">Ideal For</td>
                  <td className="p-4">Students seeking traditional academic structure with international recognition</td>
                  <td className="p-4">Students who thrive in inquiry-based, conceptual learning environments</td>
                  <td className="p-4">Families planning to transition to UK schools or prefer local context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        {/* Contact & CTA */}
        <section className="bg-teal-800 text-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Experience Leeds Cambridge</h2>
              <p className="mb-6 text-teal-100">
                Book a personalized tour to visit our campus, meet our teachers, and see our facilities in action.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 rounded text-gray-800" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded text-gray-800" />
                </div>
                <div>
                  <label htmlFor="child-age" className="block mb-1">Child's Age</label>
                  <select id="child-age" className="w-full px-4 py-2 rounded text-gray-800">
                    <option>Select age range</option>
                    <option>3-5 (Early Years)</option>
                    <option>5-11 (Primary)</option>
                    <option>11-14 (Lower Secondary)</option>
                    <option>14-16 (IGCSE)</option>
                    <option>16-18 (A-Level)</option>
                  </select>
                </div>
                <button type="submit" className="bg-white text-teal-800 px-6 py-3 rounded-lg font-semibold hover:bg-teal-100 transition w-full">
                  Schedule Your Visit
                </button>
              </form>
            </div>
            <div className="bg-teal-700 flex items-center justify-center p-8">
              <div className="text-center">
                <svg className="h-12 w-12 text-teal-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="mb-1 text-teal-200">Leeds Premiers Schools Cambridge Campus</p>
                <p className="mb-1 text-teal-200">+254 723 456 789</p>
                <p className="mb-1 text-teal-200">admissions@leedscambridge.edu</p>
                <p className="mt-4 text-teal-200">Along Kitale - Webuye Road</p>
                <p className="text-teal-200">Sister Fridah Junction, Adjacent to Challenge Farm</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default CambridgeCampus;