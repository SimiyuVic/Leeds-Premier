
import Head from 'next/head';

const CambridgeCampus = () => {
  return (
    <>
      <Head>
        <title>Cambridge International School in Kitale, Kenya | Leeds School Cambridge Campus</title>
        <meta name="description" content="Leeds School Cambridge Campus offers complete Cambridge Pathway education from Early Years through A-Levels in Kitale, Kenya. Internationally accredited curriculum with outstanding facilities." />
        <meta name="keywords" content="Cambridge school Kenya, international school Kitale, British curriculum Kenya, IGCSE school, A-Levels Kenya, Cambridge Pathway, Leeds School Kenya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Leeds School - Cambridge Campus | International Education in Kitale, Kenya" />
        <meta property="og:description" content="Premier Cambridge Pathway school in Kenya offering Early Years through A-Levels education with world-class facilities and outstanding academic results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leeds-premier-schools.co.ke/cambridge-campus" />
        <meta property="og:image" content="https://www.leeds-premier-schools.co.ke/images/cambridge-campus-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leeds School Cambridge Campus | International School Kenya" />
        <meta name="twitter:description" content="Premier Cambridge Pathway school in Kenya offering complete international education." />
        <meta name="twitter:image" content="https://www.leeds-premier-schools.co.ke/images/cambridge-campus-twitter.jpg" />
        <link rel="canonical" href="https://www.leeds-premier-schools.co.ke/cambridge-campus" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": "Leeds School Cambridge Campus",
            "description": "A premier international education institution in Kitale Kenya offering the complete Cambridge Pathway from Early Years through A-Levels",
            "url": "https://www.leeds-premier-schools.co.ke/cambridge-campus",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Along Kitale Webuye road at Sister Fridah junction",
              "addressLocality": "Kitale",
              "addressCountry": "Kenya"
            },
            "telephone": "+254 718 012797",
            "email": "info@leedspremierschools.sc.ke",
            "foundingDate": "2019",
            "curriculum": "Cambridge Assessment International Education",
            "teacherStudentRatio": "1:8",
            "image": "https://www.leeds-premier-schools.co.ke/images/cambridge-campus.jpg",
            "priceRange": "$$"
          })}
        </script>
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
        {/* Hero Section with Image */}
        <header className="relative mb-12 rounded-xl overflow-hidden">
          <img 
            src="/campus-hero-image.jpg" 
            alt="Leeds School Cambridge Campus exterior view with students" 
            className="w-full h-96 object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Leeds School - Cambridge Campus</h1>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                A premier international education institution in Kitale Kenya offering the complete Cambridge Pathway from Early Years through A-Levels
              </p>
            </div>
          </div>
        </header>

        {/* Quick Facts Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12 text-center">
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <p className="text-teal-800 font-bold text-2xl">6+</p>
            <p className="text-teal-600">Years of Excellence</p>
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
            <div className="md:w-1/2 overflow-hidden h-80 md:h-[400px] rounded-lg">
              <img 
                src="/banner-images/about-cambridge.jpeg" 
                alt="Cambridge Campus building and facilities at Leeds School in Kitale" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">About Our Cambridge Campus</h2>
              <p className="text-gray-700 mb-4">
                As one of Leeds Premier Schools' three distinguished institutions, our Cambridge Campus provides an internationally accredited education under the Cambridge Assessment International Education system. Established in 2019 located along Kitale Webuye road at Sister Fridah junction, we've grown to become a benchmark for excellence in international education.
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
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Cambridge Curriculum at Leeds-Kitale</h2>
          
          <div className="space-y-12">
            {/* Early Years */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/banner-images/3-5.jpeg" 
                  alt="Early years students at Leeds Cambridge Campus engaging in Montessori activities" 
                  className="h-60 w-full object-cover rounded-lg" 
                  loading="lazy"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">Early Years (Ages 3–5)</h3>
                <p className="text-gray-700 mb-3">
                  Our Early Years Foundation Stage (Creche, Foundation Stage 1, Foundation Stage 2) program nurtures natural curiosity through Montesori and play-based learning while developing essential early literacy, numeracy, and social skills.
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
                <img 
                  src="/banner-images/5-11.jpeg" 
                  alt="Primary students at Leeds Cambridge Campus participating in classroom activities" 
                  className="h-60 w-full object-cover rounded-lg" 
                  loading="lazy"
                />
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
                      <li>Computing</li>
                      <li>Art & Design</li>
                      <li>Physical Education</li>
                      <li>Modern Languages (French/Chinese)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Secondary */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/banner-images/11-14.jpeg" 
                  alt="Lower secondary students conducting science experiments at Leeds Cambridge Campus" 
                  className="h-60 w-full object-cover rounded-lg" 
                  loading="lazy"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">Lower Secondary (Ages 11–14)</h3>
                <p className="text-gray-700 mb-3">
                  Our Lower Secondary program prepares students for IGCSEs with a broad curriculum that maintains core subject focus while introducing subject specialization.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-teal-600 mb-1">Key Features:</h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Cambridge Checkpoint assessments in Year 6</li>
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
                <img 
                  src="/banner-images/14-16.jpeg" 
                  alt="IGCSE students studying at Leeds Cambridge Campus in Kenya" 
                  className="h-60 w-full object-cover rounded-lg" 
                  loading="lazy"
                />
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
                  <span>Modern classrooms with interactive whiteboards</span>
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
                  <span>STEAM innovation hub</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Well-stocked libraries with quiet study areas</span>
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
                  <span>Swimming pool</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Well-sized sports field</span>
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
          
          {/* Facilities Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="h-40 rounded-lg overflow-hidden">
                <img src="/banner-images/art-room.jpeg" alt="Art room at Leeds Cambridge Campus" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="h-40 rounded-lg overflow-hidden">
                <img src="/gallery/cambridge/games-outside.jpeg" alt="Students playing games outdoors at Leeds Cambridge Campus" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="h-40 rounded-lg overflow-hidden">
                <img src="/gallery/cambridge/kids-in-class.jpeg" alt="Students learning in classroom at Leeds Cambridge Campus" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="h-40 rounded-lg overflow-hidden">
                <img src="/banner-images/swimming.jpeg" alt="Swimming pool at Leeds Cambridge Campus in Kenya" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Academic Excellence */}
        <section className="mb-16 bg-teal-800 text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">A Learning Environment That Inspires</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-teal-100">
                At Leeds Cambridge, our classrooms are more than just places of instruction — they are vibrant spaces where creativity thrives, curiosity is welcomed, and students feel empowered to explore the world around them.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-teal-300 mr-2 mt-0.5">🎨</span>
                  <span>Hands-on learning through art, music, and STEM projects</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-teal-300 mr-2 mt-0.5">🧠</span>
                  <span>Inquiry-based lessons that promote critical thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-teal-300 mr-2 mt-0.5">🤝</span>
                  <span>Collaborative group work that encourages teamwork and leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-teal-300 mr-2 mt-0.5">📖</span>
                  <span>Reading corners, experiments, and tech-enabled classes</span>
                </li>
              </ul>
            </div>

            <div className="bg-teal-700 p-1 rounded-xl flex items-center justify-center">
              <img 
                src="/gallery/cambridge/students-learning.jpeg" 
                alt="Students engaged in collaborative learning at Leeds Cambridge Campus" 
                className="rounded-lg w-full h-64 object-cover" 
                loading="lazy"
              />
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
                <p className="text-gray-700 italic mb-4">"I enjoy everyday at school and learn more and more. I have grown personally and enjoy what our teachers teach as well as the extra curricullar activities that we do keep me healthy."</p>
                <p className="font-semibold text-teal-700">— Jude Nabwera</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-4">"As an expat family, we valued the international perspective combined with strong academic rigor. Our children thrived both academically and socially."</p>
                <p className="font-semibold text-teal-700">— The J. Omondi's Family</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-4">"Teaching the Cambridge curriculum here is rewarding because of the engaged students and excellent resources. We're able to really stretch our top students."</p>
                <p className="font-semibold text-teal-700">— Mr. Wafula, English & Music</p>
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
                  <span className="font-semibold text-teal-700">Year through</span>
                </li>
                <li className="flex justify-between border-b border-teal-100 pb-2">
                  <span className="text-gray-700">Academic Year Begins</span>
                  <span className="font-semibold text-teal-700">Early September</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-3">Why Choose Us</h3>
              <div className="bg-teal-50 p-4 rounded-lg mb-3">
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Experienced and passionate teachers</li>
                  <li>Modern, well-equipped classrooms and labs</li>
                  <li>Global curriculum with local relevance</li>
                  <li>Vibrant co-curricular program</li>
                  <li>Focus on character, creativity, and critical thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Meet Part of Our Team</h2>
          
         <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-teal-100 rounded-lg overflow-hidden">
            <img 
              src="/banner-images/headteacher.jpeg" 
              alt="Ms. Wambui, Head of Institution at Leeds Cambridge Campus" 
              className="w-full h-72 object-cover" 
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-1">Ms. Wambui</h3>
              <p className="text-teal-600 mb-3">Head of Institution</p>
              <p className="text-gray-700 text-sm">Leading with purpose and vision to help your child grow.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-teal-100 rounded-lg overflow-hidden">
            <img 
              src="/gallery/cambridge/Ms-Luciana.jpg" 
              alt="Ms. Luciana, Head of Primary at Leeds Cambridge Campus" 
              className="w-full h-72 object-cover" 
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-1">Ms. Luciana</h3>
              <p className="text-teal-600 mb-3">Head of Primary</p>
              <p className="text-gray-700 text-sm">Teaching incoperated with care and good up-bringing.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-teal-100 rounded-lg overflow-hidden">
            <img 
              src="/gallery/cambridge/Ms-Linda.jpg" 
              alt="Ms. Linda Rob, Creche specialist at Leeds Cambridge Campus" 
              className="w-full h-72 object-cover" 
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-1">Ms. Linda Rob</h3>
              <p className="text-teal-600 mb-3">Creche</p>
              <p className="text-gray-700 text-sm">Specialist in early childhood</p>
            </div>
          </div>
        </div>
        </section>
        {/* Contact & CTA */}
        <section className="bg-teal-800 text-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 h-[300px] sm:h-[350px] md:h-[450px] lg:h-[400px]">
            
            {/* Left: Message */}
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
              <p className="mb-6 text-teal-100 text-sm sm:text-base">
                Join a vibrant community where academic excellence meets personal growth. Whether you're seeking admission information or just have questions — we’re here to help.
              </p>
              <a href="/contact" className="inline-block bg-white text-teal-800 px-6 py-3 rounded-lg font-semibold hover:bg-teal-100 transition w-fit">
                Contact Us
              </a>
            </div>

            {/* Right: Full Cover Image */}
            <div className="relative w-full h-full">
              <img 
                src="/gallery/cambridge/final-image.jpeg" 
                alt="School Campus" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>

          </div>
        </section>
      </div>
    </>
    );
  };
  
  export default CambridgeCampus;