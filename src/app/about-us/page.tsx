const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-xl overflow-hidden">
        <img 
          src="/images/about-hero.jpg" 
          alt="Leeds Premier Schools - Transforming Education"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Leeds Premier Schools</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Three Campuses, One Vision: Excellence in Holistic Education
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="/banner-images/about-us-text-on-wooden.webp" 
              alt="Leeds School founding"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2019, Leeds Premier Schools began as a single institution with a vision to provide world-class education in Bungoma County. Over two decades, we've grown into a premier educational group with three distinct campuses, each offering specialized curricula to meet diverse learning needs.
            </p>
            <p className="text-gray-700 mb-4">
              Located along the Tongaren-Matunda Road in Soysambu Mitua Ward, our campuses serve students from Early Years through Secondary education, preparing them for success in Kenya and beyond.
            </p>
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
              <p className="font-semibold text-teal-800">Our Mission:</p>
              <p className="text-gray-700">To nurture intellectually curious, morally grounded, and socially responsible citizens through innovative learning experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Overview */}
      <section className="mb-16 bg-teal-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Our Three Campuses</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* CBC Campus */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100">
            <img 
              src="/gallery/cbc/cbc-5.jpeg" 
              alt="CBC Campus"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">CBC Campus</h3>
              <p className="text-gray-700 mb-3">
                Fully implementing Kenya's Competency-Based Curriculum from Pre-Primary through Grade 6, with seamless transition to Junior School.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                <li>Aligned with national education goals</li>
                <li>7 core competencies development</li>
                <li>Community-rooted learning</li>
                <li>Local language integration</li>
              </ul>
            </div>
          </div>

          {/* Cambridge Campus */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100">
            <img 
              src="/gallery/cambridge/about-us-2.jpeg" 
              alt="Cambridge Campus"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Cambridge Campus</h3>
              <p className="text-gray-700 mb-3">
                Offering the complete Cambridge Pathway from Early Years through A-Levels for international education.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                <li>Globally recognized qualifications</li>
                <li>IGCSE and A-Level preparation</li>
                <li>International university pathways</li>
                <li>British curriculum standards</li>
              </ul>
            </div>
          </div>

          {/* National Curriculum Campus */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100">
            <img 
              src="/gallery/ttc/ttc-campus-1.jpeg"
              alt="TTC"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Teachers Training College</h3>
              <p className="text-gray-700 mb-3">
                Equipping future educators with the skills, knowledge, and methodologies needed to thrive in modern classrooms across Kenya.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                <li>Competency-based teacher training</li>
                <li>Practical teaching practice and mentorship</li>
                <li>Curriculum delivery for ECDE and P1 levels</li>
                <li>Integration of pedagogy with local educational needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Educational Philosophy</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/gallery/cbc/cbc-6.jpeg" 
              alt="Students demonstrating values"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">Core Values</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>Excellence:</strong> Striving for the highest standards in all we do</li>
              <li><strong>Integrity:</strong> Fostering honesty and strong moral principles</li>
              <li><strong>Innovation:</strong> Encouraging creative thinking and problem-solving</li>
              <li><strong>Community:</strong> Building connections and social responsibility</li>
              <li><strong>Diversity:</strong> Celebrating our multicultural environment</li>
            </ul>
          </div>
          <div>
            <img 
              src="/gallery/cambridge/teacher-student.jpeg" 
              alt="Teacher with students"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">Teaching Approach</h3>
            <p className="text-gray-700 mb-4">
              At Leeds Premier Schools, we believe in learner-centered education that:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Recognizes each child's unique learning style</li>
              <li>Combines traditional knowledge with 21st century skills</li>
              <li>Uses technology to enhance learning</li>
              <li>Encourages inquiry-based and experiential learning</li>
              <li>Develops both academic and life skills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-16 bg-teal-800 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-teal-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">6+</span>
              </div>
              <h3 className="text-xl font-semibold">Years of Excellence</h3>
            </div>
            <p className="text-teal-100">
              Since our founding in 2019, we've consistently delivered quality education to Bungoma County and beyond.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-teal-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">98%</span>
              </div>
              <h3 className="text-xl font-semibold">Transition Rate</h3>
            </div>
            <p className="text-teal-100">
              Our students successfully transition to next levels of education, with many joining national schools and international universities.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-teal-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-semibold">Co-Curricular Programs</h3>
            </div>
            <p className="text-teal-100">
              From sports to arts to STEM clubs, we offer diverse activities to develop well-rounded individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-800 mb-8">Meet Our Leadership</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100">
            <img 
              src="/gallery/cambridge/director.jpeg" 
              alt="School Director"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-1">Mrs. Nelima Julia</h3>
              <p className="text-teal-600 mb-3">Founder & Director</p>
              <p className="text-gray-700 text-sm">
                PhD in Educational Leadership with 25+ years experience transforming education in Western Kenya.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100">
            <img 
              src="/images/academic-director.jpg" 
              alt="Academic Director"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-1">Mrs. Grace Wambui</h3>
              <p className="text-teal-600 mb-3">Academic Director</p>
              <p className="text-gray-700 text-sm">
                Curriculum specialist with expertise in CBC, Teacher's Trainong and international curricula implementation.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100">
            <img 
              src="/images/administrator.jpg" 
              alt="Administrator"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-1">Mr. Peter Simiyu</h3>
              <p className="text-teal-600 mb-3">Administrator</p>
              <p className="text-gray-700 text-sm">
                Operations manager ensuring smooth running of all three campuses and facilities.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Community Engagement */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-800 mb-6">Community Engagement</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src="/images/community-project.jpg" 
              alt="Students in community service"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              As a school rooted in Bungoma County, we believe in giving back to our community through:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Annual health camps with Tongaren Health Centre</li>
              <li>Adult literacy programs for parents and guardians</li>
              <li>Environmental conservation projects in Soysambu Mitua Ward</li>
              <li>Cultural preservation initiatives with Bukusu elders</li>
              <li>Scholarships for needy students from the community</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="mb-16 bg-teal-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">What People Say About Us</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img 
                src="/images/parent-1.jpg" 
                alt="Parent testimonial"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-teal-700">Mrs. Atieno</p>
                <p className="text-sm text-gray-600">Parent of Grade 3 student</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The CBC program at Leeds has transformed my child's learning experience. She's now curious, asks questions, and applies what she learns at home."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img 
                src="/images/alumni.jpg" 
                alt="Alumni testimonial"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-teal-700">David W.</p>
                <p className="text-sm text-gray-600">Alumni, Class of 2023</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The Cambridge program prepared me perfectly for university abroad. The critical thinking skills I developed at Leeds give me an edge in my studies."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img 
                src="/images/teacher.jpg" 
                alt="Teacher testimonial"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-teal-700">Mr. Omondi</p>
                <p className="text-sm text-gray-600">Mathematics Teacher</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Teaching at Leeds is rewarding because of the support for professional development and the motivated students who want to learn."
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="bg-teal-800 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience Leeds Premier Schools</h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Discover how our three campuses can provide the perfect educational pathway for your child.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-teal-800 px-6 py-3 rounded-lg font-semibold hover:bg-teal-100 transition">
            Schedule a Campus Tour
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
            Contact Admissions
          </button>
        </div>
      </section> */}
    </div>
  );
}

export default About;