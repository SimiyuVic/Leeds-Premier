const TeachersTrainingCollege = () => {
  return (
      <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
          {/* Hero Section with Image */}
          <div className="relative mb-12 rounded-xl overflow-hidden">
              <div className="bg-teal-800 h-96 flex items-center justify-center">
                  <img 
                      src="/images/ttc-hero.jpg" 
                      alt="Kenyan Teachers Training College - Student teachers in class"
                      className="w-full h-full object-cover"
                  />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-center p-6">
                      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Teachers Training College</h1>
                      <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                          Shaping Kenya's Future Educators with Excellence and Professionalism
                      </p>
                  </div>
              </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <p className="text-teal-800 font-bold text-2xl">100%</p>
                  <p className="text-teal-600">TSC Accredited</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <p className="text-teal-800 font-bold text-2xl">6+</p>
                  <p className="text-teal-600">Years Experience</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <p className="text-teal-800 font-bold text-2xl">1:10</p>
                  <p className="text-teal-600">Tutor-Student Ratio</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <p className="text-teal-800 font-bold text-2xl">95%</p>
                  <p className="text-teal-600">Graduate Employment</p>
              </div>
          </div>

          {/* About Our TTC */}
          <section className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                      <img 
                          src="/home-page/ttc-campus-1.jpeg" 
                          alt="Aerial view of Teachers Training College"
                          className="w-full h-auto rounded-lg shadow-md"
                      />
                  </div>
                  <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold text-teal-800 mb-4">About Our College</h2>
                      <p className="text-gray-700 mb-4">
                          Established in 2019, our Teachers Training College is a premier institution accredited by the Teachers Service Commission (TSC) to train primary school teachers in Kenya. We offer both Diploma in Primary Teacher Education (DPTE) and Early Childhood Development Education (ECDE) programs.
                      </p>
                      <p className="text-gray-700 mb-4">
                          Our college is committed to producing competent, innovative and ethical teachers who can effectively implement the Competency Based Curriculum (CBC) in Kenyan schools.
                      </p>
                      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                          <p className="font-semibold text-teal-800">Our Mission:</p>
                          <p className="text-gray-700">To provide quality teacher education through innovative training, research and community service for holistic development of educators.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Programs Structure */}
          <section className="mb-16 bg-teal-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Our Teacher Training Programs</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* DPTE */}
                  <div className="bg-white rounded-lg shadow-sm border border-teal-100 overflow-hidden">
                      <img 
                          src="/banner-images/dpte-students.jpg" 
                          alt="DPTE students in classroom"
                          className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                          <h3 className="text-xl font-semibold text-teal-700 mb-3">Diploma in Primary Teacher Education (DPTE)</h3>
                          <p className="text-gray-700 mb-3">Duration: 3 Years (Term 1, 2, 3 system)</p>
                          <ul className="list-disc ml-6 text-gray-700 space-y-1">
                              <li>TSC-recognized qualification</li>
                              <li>CBC pedagogy training</li>
                              <li>Subject specialization options</li>
                              <li>Teaching practice in partner schools</li>
                              <li>ICT integration in teaching</li>
                          </ul>
                      </div>
                  </div>

                  {/* ECDE */}
                  <div className="bg-white rounded-lg shadow-sm border border-teal-100 overflow-hidden">
                      <img 
                          src="/banner-images/ecde-training.jpg" 
                          alt="ECDE teacher training"
                          className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                          <h3 className="text-xl font-semibold text-teal-700 mb-3">Early Childhood Development Education (ECDE)</h3>
                          <p className="text-gray-700 mb-3">Duration: 2 Years</p>
                          <ul className="list-disc ml-6 text-gray-700 space-y-1">
                              <li>Certificate and Diploma options</li>
                              <li>Play-based learning techniques</li>
                              <li>Child psychology and development</li>
                              <li>Parental engagement strategies</li>
                              <li>Special needs education basics</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>

          {/* Core Training Components */}
          <section className="mb-16">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Essential Teacher Training Components</h2>
              
              {/* Component 1 */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="md:w-1/3">
                      <img 
                          src="/banner-images/pedagogy-training.jpg" 
                          alt="Pedagogy training session"
                          className="w-full h-auto rounded-lg"
                      />
                  </div>
                  <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-teal-700 mb-2">1. Pedagogy & Curriculum Implementation</h3>
                      <p className="text-gray-700 mb-3">
                          Our comprehensive pedagogy training covers both 8-4-4 and CBC curriculum delivery methods. Trainees learn effective lesson planning, differentiated instruction, and competency-based assessment techniques.
                      </p>
                      <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="font-semibold text-teal-700">Key Focus Areas:</p>
                          <p className="text-gray-700">CBC instructional designs, learner-centered approaches, formative assessment, and digital learning tools.</p>
                      </div>
                  </div>
              </div>

              {/* Component 2 */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="md:w-1/3 order-2 md:order-1">
                      <img 
                          src="/banner-images/teaching-practice.jpg" 
                          alt="Student teacher in classroom"
                          className="w-full h-auto rounded-lg"
                      />
                  </div>
                  <div className="md:w-2/3 order-1 md:order-2">
                      <h3 className="text-2xl font-semibold text-teal-700 mb-2">2. Teaching Practice & School Attachment</h3>
                      <p className="text-gray-700 mb-3">
                          Trainees undergo supervised teaching practice in partner schools across Kenya, gaining hands-on experience in real classroom settings under mentor teachers.
                      </p>
                      <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="font-semibold text-teal-700">Structure:</p>
                          <p className="text-gray-700">Three school attachments (1 month each) progressively building classroom management and teaching skills.</p>
                      </div>
                  </div>
              </div>

              {/* Component 3 */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="md:w-1/3">
                      <img 
                          src="/banner-images/professional-development.jpg" 
                          alt="Teachers in workshop"
                          className="w-full h-auto rounded-lg"
                      />
                  </div>
                  <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-teal-700 mb-2">3. Professional Development & Ethics</h3>
                      <p className="text-gray-700 mb-3">
                          We instill the Teachers Service Commission (TSC) Code of Conduct and Ethics, preparing trainees for professional registration and career-long development.
                      </p>
                      <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="font-semibold text-teal-700">Coverage:</p>
                          <p className="text-gray-700">Teacher professionalism, legal responsibilities, continuous learning, and career progression pathways.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Accreditation & Partnerships */}
          <section className="mb-16 bg-teal-800 text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Accreditation & Partnerships</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                      <h3 className="text-xl font-semibold mb-4">Official Recognition</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-teal-700 p-4 rounded flex items-center justify-center">
                              <img src="/logos/tsc-logo.png" alt="TSC Logo" className="h-16 object-contain" />
                          </div>
                          <div className="bg-teal-700 p-4 rounded flex items-center justify-center">
                              <img src="/logos/moe-logo.png" alt="MOE Logo" className="h-16 object-contain" />
                          </div>
                      </div>
                      <ul className="space-y-3">
                          <li className="flex items-start">
                              <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Fully accredited by Teachers Service Commission (TSC)</span>
                          </li>
                          <li className="flex items-start">
                              <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Registered with Ministry of Education (MOE)</span>
                          </li>
                          <li className="flex items-start">
                              <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Affiliated with Kenya National Examinations Council (KNEC)</span>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="text-xl font-semibold mb-4">University Partnerships</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-teal-700 p-4 rounded flex items-center justify-center">
                              <img src="/logos/ku-logo.png" alt="Kenyatta University Logo" className="h-16 object-contain" />
                          </div>
                          <div className="bg-teal-700 p-4 rounded flex items-center justify-center">
                              <img src="/logos/mu-logo.png" alt="Moi University Logo" className="h-16 object-contain" />
                          </div>
                      </div>
                      <p className="mb-4 text-teal-100">
                          Our college has articulation agreements with leading Kenyan universities for degree upgrade programs:
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-teal-700 p-3 rounded text-center text-sm">Bachelor of Education (B.Ed)</div>
                          <div className="bg-teal-700 p-3 rounded text-center text-sm">Diploma Upgrading</div>
                          <div className="bg-teal-700 p-3 rounded text-center text-sm">Distance Learning</div>
                          <div className="bg-teal-700 p-3 rounded text-center text-sm">In-Service Training</div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Facilities Gallery */}
          <section className="mb-16">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Training Facilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                      <h3 className="text-xl font-semibold text-teal-700 mb-4">Academic Facilities</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                          <img src="/banner-images/ttc-library.jpg" alt="College library" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/science-lab.jpg" alt="Science lab" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/computer-lab.jpg" alt="Computer lab" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/demo-class.jpg" alt="Demonstration classroom" className="w-full h-48 object-cover rounded-lg" />
                      </div>
                      <ul className="list-disc ml-6 text-gray-700 space-y-2">
                          <li>Well-equipped demonstration classrooms for micro-teaching</li>
                          <li>Modern computer lab with educational software</li>
                          <li>Science laboratory for primary school science methods</li>
                          <li>Resource center with CBC teaching aids</li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="text-xl font-semibold text-teal-700 mb-4">Residential Facilities</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                          <img src="/images/hostels.jpg" alt="Student hostels" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/dining-hall.jpg" alt="Dining hall" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/sports-field.jpg" alt="Sports field" className="w-full h-48 object-cover rounded-lg" />
                          <img src="/images/health-center.jpg" alt="Health center" className="w-full h-48 object-cover rounded-lg" />
                      </div>
                      <ul className="list-disc ml-6 text-gray-700 space-y-2">
                          <li>Secure single-sex hostel accommodation</li>
                          <li>Spacious dining hall with balanced meals</li>
                          <li>Sports facilities for physical development</li>
                          <li>Health center with full-time nurse</li>
                      </ul>
                  </div>
              </div>
          </section>

          {/* Testimonials with Images */}
          <section className="mb-16 bg-teal-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">What Our Community Says</h2>
              <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                          <img 
                              src="/images/graduate-teacher.jpg" 
                              alt="Graduate teacher" 
                              className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                              <p className="font-semibold text-teal-700">Mr. Otieno</p>
                              <p className="text-sm text-gray-600">2019 Graduate, Now HOD</p>
                          </div>
                      </div>
                      <p className="text-gray-700 italic">
                          "The practical teaching skills I gained at this college gave me confidence to handle my first class. Within 3 years I was promoted to Head of Department."
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                          <img 
                              src="/images/current-trainee.jpg" 
                              alt="Current trainee" 
                              className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                              <p className="font-semibold text-teal-700">Wanjiru M.</p>
                              <p className="text-sm text-gray-600">DPTE Year 2 Trainee</p>
                          </div>
                      </div>
                      <p className="text-gray-700 italic">
                          "The CBC training here is exceptional. We practice making all the learning aids and our teaching practice prepares us for real classrooms."
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                          <img 
                              src="/images/principal.jpg" 
                              alt="School principal" 
                              className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                              <p className="font-semibold text-teal-700">Madam Chebet</p>
                              <p className="text-sm text-gray-600">Partner School Principal</p>
                          </div>
                      </div>
                      <p className="text-gray-700 italic">
                          "We consistently request teaching practice students from this college because they arrive classroom-ready with practical CBC implementation skills."
                      </p>
                  </div>
              </div>
          </section>

          {/* Admissions with Image */}
          <section className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                      <img 
                          src="/banner-images/ttc-admissions.jpg" 
                          alt="Admissions office"
                          className="w-full h-auto rounded-lg shadow-md"
                      />
                  </div>
                  <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold text-teal-800 mb-4">Admissions Process</h2>
                      <p className="text-gray-700 mb-6">
                          We admit students through Kenya Universities and Colleges Central Placement Service (KUCCPS) and direct entry for self-sponsored students.
                      </p>
                      <div className="bg-white border border-teal-200 rounded-xl p-6">
                          <h3 className="text-xl font-semibold text-teal-700 mb-3">DPTE Requirements</h3>
                          <ul className="list-disc ml-6 text-gray-700 space-y-2">
                              <li>KCSE mean grade C (plain) and above</li>
                              <li>C- (minus) in English and Mathematics</li>
                              <li>C- (minus) in two teaching subjects</li>
                              <li>National ID card</li>
                              <li>KCSE certificate/result slip</li>
                              <li>Passport photos (4 copies)</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}

export default TeachersTrainingCollege;