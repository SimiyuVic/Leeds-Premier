import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Leeds Premier Schools - Excellence in Education in Bungoma and Transzoia Counties</title>
        <meta name="description" content="Learn about Leeds Premier Schools with campuses in Bungoma County and Transzoia County. We offer CBC, Cambridge, and Teachers Training programs with a vision for holistic education." />
        <meta name="keywords" content="Leeds Premier Schools, Bungoma schools, Transzoia schools, CBC curriculum, Cambridge curriculum, teacher training Kenya, education in Western Kenya" />
        <meta property="og:title" content="About Leeds Premier Schools - Excellence in Education" />
        <meta property="og:description" content="Three Campuses, One Vision: Excellence in Holistic Education across Bungoma and Transzoia Counties" />
        <meta property="og:image" content="/images/about-hero.jpg" />
        <meta property="og:url" content="https://leedspremierschools.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
        {/* Hero Section */}
        <header className="relative mb-12 rounded-xl overflow-hidden">
          <img 
            src="/images/about-hero.jpg" 
            alt="Leeds Premier Schools - Transforming Education in Bungoma and Transzoia Counties"
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
        </header>

        {/* Overview Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/banner-images/about-us-text-on-wooden.webp" 
                alt="Leeds School founding in Bungoma County"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2019, Leeds Premier Schools began as a single institution with a vision to provide world-class education in Bungoma County. Over the years, we've grown into a premier educational group with three distinct campuses across Bungoma and Transzoia counties, each offering specialized curricula to meet diverse learning needs.
              </p>
              <p className="text-gray-700 mb-4">
                Our CBC and TTC campuses are located along the Tongaren-Matunda Road in Soysambu Mitua Ward, Bungoma County, near Brigadier Market. Our Cambridge campus is situated in Transzoia County, Kitale along Kitale Webuye Road at Sister Fridah Junction. These strategic locations allow us to serve students from Early Years through Secondary education, preparing them for success in Kenya and beyond.
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
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            Our Three Campuses
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CBC Campus */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100 flex flex-col">
              <img
                src="/gallery/cbc/cbc-5.jpeg"
                alt="CBC Campus in Transzoia County, Kitale"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">CBC Campus</h3>
                <p className="text-gray-700 mb-3">
                  Located in Bungoma County along Tongaren-Matunda Road near Brigadier Market,
                  our CBC Campus offers the Competency-Based Curriculum from Early Years to
                  Junior Secondary, focusing on holistic, skills-based education for Kenyan learners.
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm mb-4">
                  <li>Aligned with national education goals</li>
                  <li>7 core competencies development</li>
                  <li>Community-rooted learning</li>
                  <li>Local language integration</li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="/schools/cbc-campus"
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition duration-300 w-full text-center"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            {/* Cambridge Campus */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100 flex flex-col">
              <img
                src="/gallery/cambridge/about-us-2.jpeg"
                alt="Cambridge Campus in Bungoma County"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">Cambridge Campus</h3>
                <p className="text-gray-700 mb-3">
                  Located in Transzoia County, Kitale along Kitale Webuye Road at Sister Fridah
                  Junction, our Cambridge Campus offers the complete Cambridge Pathway from
                  Early Years through A-Levels, preparing students for global opportunities and
                  international education.
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm mb-4">
                  <li>Globally recognized qualifications</li>
                  <li>IGCSE and A-Level preparation</li>
                  <li>International university pathways</li>
                  <li>British curriculum standards</li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="/schools/cambridge-campus"
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition duration-300 w-full text-center"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            {/* Teachers Training College */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-teal-100 flex flex-col">
              <img
                src="/gallery/ttc/ttc-campus-1.jpeg"
                alt="Teachers Training College in Bungoma County"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">Teachers Training College</h3>
                <p className="text-gray-700 mb-3">
                  Located in Bungoma County near Brigadier Market, equipping future educators
                  with the skills, knowledge, and methodologies needed to thrive in modern
                  classrooms across Kenya.
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm mb-4">
                  <li>Competency-based teacher training</li>
                  <li>Practical teaching practice and mentorship</li>
                  <li>Curriculum delivery for ECDE and P1 levels</li>
                  <li>Integration of pedagogy with local educational needs</li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="/schools/teachers-training-college"
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition duration-300 w-full text-center"
                  >
                    View More
                  </a>
                </div>
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
                alt="Students demonstrating values at Leeds Schools"
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
                alt="Teacher with students at Leeds Premier Schools"
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
                Since our founding in 2019, we've consistently delivered quality education to Bungoma County, Transzoia County, and beyond.
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
      </div>
    </>
  );
}

export default About;