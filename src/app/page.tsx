'use client';

import { useState } from 'react';
import Head from 'next/head';
import MainBanner from "../components/MainBanner";
import Image from "next/image";
import Link from "next/link";
import BookTourPopup from "../components/BookTourPopup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  interface FormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    message?: string;
  }

  const handleSubmit = async (formData: FormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/book-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setShowPopup(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Leading Educational Institution in Kenya | CBC & Cambridge Curriculum</title>
        <meta 
          name="description" 
          content="Premier Kenyan school offering CBC curriculum along Kitale Kiminini Road at Sister Fridah Junction, Cambridge International programs in Brigadier, and teacher training college. Modern facilities with qualified educators." 
        />
        <meta name="keywords" content="Kenya schools, CBC curriculum Kenya, Cambridge International Kenya, teacher training college, best schools in Kitale, schools in Brigadier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Leading Educational Institution in Kenya | CBC & Cambridge Curriculum" />
        <meta property="og:description" content="Premier Kenyan school offering CBC curriculum, Cambridge International programs, and teacher training across multiple campuses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leeds-premier-schools.co.ke/" />
        <link rel="canonical" href="https://leeds-premier-schools.co.ke/" />
      </Head>

      <main itemScope itemType="https://schema.org/EducationalOrganization">
        {/* ===== HERO BANNER SECTION ===== */}
        <MainBanner />

        {/* ===== ABOUT THE GROUP SECTION ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Our School Community</h1>

            <p className="text-lg text-gray-700 mb-6 text-left">
              We are a group of forward-thinking institutions based in Kenya, offering the CBC (Competency-Based Curriculum),
              Cambridge International Curriculum, and comprehensive Teacher Training programs across multiple campuses.
              Our mission is to empower learners and educators through a nurturing, innovative, and globally-minded learning environment.
            </p>

            <h2 className="text-2xl font-semibold text-green-800 mb-4">Cambridge International School – Kitale, Trans-Nzoia County</h2>
            <p className="text-lg text-gray-700 mb-6">
              As a top-rated <strong>International school in Kenya and located in Kitale, Trans-Nzoia County</strong>, we are committed to nurturing every learner's potential through individualized talent development, continuous assessment, and strong values.
              Our <strong>Cambridge Campus (International School) along Kitale–Kiminini Road at Sister Fridah junction</strong> delivers world-class, internationally recognized education based on the <strong>Cambridge curriculum</strong>, preparing students for <strong>IGCSE and A-Level examinations</strong> with direct pathways to prestigious universities worldwide.
            </p>

            <h2 className="text-2xl font-semibold text-green-800 mb-4">CBC Center – Brigadier, Bungoma County</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our <strong>Competency-Based Curriculum (CBC) Center in Brigadier in Bungoma County</strong>, conveniently located along <strong>Matunda–Misikhu Road</strong>, offers a holistic learning experience focused on creativity, critical thinking, and practical life skills.
              As a leading <strong>CBC school in Bungoma and Kenya at large</strong>, we combine modern teaching methods, qualified educators, and digital tools to ensure our learners are equipped for the 21st century.
            </p>

            <h2 className="text-2xl font-semibold text-green-800 mb-4">Teacher Training College – Brigadier, Bungoma County</h2>
            <p className="text-lg text-gray-700 mb-6">
              The <strong>Teacher Training College (TTC) in Brigadier also in Bungoma County</strong>, also situated along <strong>Matunda–Misikhu Road</strong>, ranked as one of the best in Bungoma County, trains the next generation of educators with excellence.
              We offer fully accredited programs in <strong>ECDE, P1, and Diploma in Education</strong>, blending strong academic foundations with hands-on teaching practice—ideal for those looking to join the teaching profession in Kenya.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Join our vibrant school community today and be part of an educational journey that promotes excellence, inclusivity, and lifelong learning.
              Enroll now and experience the difference in quality education tailored for today's learners.
            </p>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule a visit to any of our campuses.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                aria-label="Book a school tour"
              >
                Book a Tour
              </button>
            </div>
          </div>
        </section>


        {/* ===== EXPLORE OUR SCHOOLS SECTION ===== */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Schools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "CBC Campus",
                  description: "Located in Brigadier along Matunda–Misikhu Road, our CBC Campus offers the best Competency-Based Curriculum from pre-primary to junior secondary levels in Bungoma County and Kenya at large. It features modern facilities, technology-enhanced learning, and a focus on creativity and life skills.",
                  href: "/schools/cbc-campus",
                  image: "/home-page/cbc-campus.jpeg",
                  buttonLabel: "More About CBC Campus",
                  location: "Brigadier – Matunda–Misikhu Road"
                },
                {
                  title: "Cambridge Campus (International School)",
                  description: "Situated along Kitale–Kiminini Road at Sister Fridah Junction, our Cambridge Campus delivers the internationally acclaimed British curriculum, preparing learners for IGCSE and A-Level examinations with global university opportunities.",
                  href: "/schools/cambridge-campus",
                  image: "/home-page/cambridge-campus.jpeg",
                  buttonLabel: "More About Cambridge Campus",
                  location: "Kitale–Kiminini Road at Sister Fridah Junction"
                },
                {
                  title: "Teacher Training College",
                  description: "Located in Brigadier along Matunda–Misikhu Road, our Teacher Training College (TTC) offers accredited programs in ECDE, P1, and Diploma in Education. We blend theory with real classroom practice to prepare competent and passionate educators.",
                  href: "/schools/teachers-training-college",
                  image: "/home-page/ttc-campus-1.jpeg",
                  buttonLabel: "More About TTC",
                  location: "Brigadier – Matunda–Misikhu Road"
                }

              ].map((school, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  <div className="h-48 relative">
                    <Image
                      src={school.image}
                      alt={`${school.title} at ${school.location}`}
                      fill
                      className="object-cover w-full h-full"
                      itemProp="image"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2" itemProp="name">{school.title}</h3>
                    <p className="text-gray-600 mb-2" itemProp="description">{school.description}</p>
                    <p className="text-sm text-gray-500" itemProp="address"><strong>Location:</strong> {school.location}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href={school.href}
                      className="inline-block mt-4 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
                      aria-label={`Learn more about ${school.title}`}
                    >
                      {school.buttonLabel}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CURRICULUM DETAILS SECTION ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Curriculum Offerings</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">Leeds Premier International School - Kitale</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Our Cambridge program in Brigadier follows the renowned British curriculum, offering:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Internationally recognized IGCSE and A-Level qualifications</li>
                    <li>Rigorous academic standards with global benchmarking</li>
                    <li>Emphasis on critical thinking and independent learning</li>
                    <li>University preparation with international recognition</li>
                    <li>English as first language curriculum</li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Students benefit from small class sizes, experienced Cambridge-trained teachers, and a curriculum that develops:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Deep subject knowledge</li>
                    <li>Research and analytical skills</li>
                    <li>International perspective</li>
                    <li>Preparation for global universities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">Leeds Premier School (CBC Curicullum)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Our CBC program implements Kenya's competency-based curriculum with excellence:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Holistic development from pre-primary to junior secondary</li>
                    <li>Focus on 7 core competencies as per Kenyan guidelines</li>
                    <li>Continuous assessment over examinations</li>
                    <li>Integration of digital literacy and innovation</li>
                    <li>Emphasis on values and community service</li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Our CBC campus features:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Modern classrooms with technology integration</li>
                    <li>Specialized learning areas for practical activities</li>
                    <li>Comprehensive guidance and counseling</li>
                    <li>Parental engagement programs</li>
                    <li>Seamless transition to senior school</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">Teacher Training College</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Our accredited teacher training programs include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Certificate in ECDE (Early Childhood Development Education)</li>
                    <li>Primary Teacher Education (P1)</li>
                    <li>Diploma in Education</li>
                    <li>Continuous professional development courses</li>
                    <li>Special needs education training</li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    TTC students benefit from:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Modern teaching methodologies</li>
                    <li>Practical teaching experience in our partner schools</li>
                    <li>Mentorship from experienced educators</li>
                    <li>Technology integration training</li>
                    <li>Career placement assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-semibold text-center text-teal-700 mb-8">
              Glimpses of Our Learning Environment
            </h3>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              loop
              className="w-full"
            >
              {[
                "/gallery/cbc/cbc-campus-1.jpeg",
                "/gallery/cbc/cbc-5.jpeg",
                "/gallery/cambridge/students-learning.jpeg",
                "/gallery/ttc/ttc-campus-1.jpeg",
                "/gallery/cambridge/games-outside.jpeg",
                "/gallery/cambridge/swimming.jpeg",
              ].map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-400 bg-white">
                    <img 
                      src={img} 
                      alt={`Campus life ${index + 1}`} 
                      className="object-cover w-full h-40 md:h-48"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>


        {/* ===== LEADERSHIP SECTION ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  name: "Mr. Maritim",
                  title: "Headteacher, CBC School",
                  image: "/images/leaders/grace.jpg",
                  message: "We nurture each child to be competent, confident and curious — ready to thrive in today's world."
                },
                {
                  name: "Ms. Wambui",
                  title: "Head of Institution, Cambridge Campus",
                  image: "/images/leaders/richard.jpg",
                  message: "Our global curriculum equips learners with critical thinking, collaboration and innovation skills."
                },
                {
                  name: "Dr. Naomi Mwikali",
                  title: "Principal, Teacher Training College",
                  image: "/images/leaders/naomi.jpg", 
                  message: "We're committed to producing exceptional educators who will inspire the next generation."
                }
              ].map((leader, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={`Portrait of ${leader.name}`}
                      fill
                      className="object-cover"
                      itemProp="image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold" itemProp="name">{leader.name}</h3>
                  <p className="text-green-600 text-sm mb-3" itemProp="jobTitle">{leader.title}</p>
                  <p className="text-gray-600 text-sm italic" itemProp="description">"{leader.message}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURED VALUES SECTION ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Pillars of Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏫",
                  title: "Academic Rigor",
                  description: "Challenging curriculum with advanced placement options"
                },
                {
                  icon: "🎨",
                  title: "Arts & Creativity",
                  description: "Vibrant programs in visual and performing arts"
                },
                {
                  icon: "⚽",
                  title: "Athletics",
                  description: "Competitive sports fostering teamwork and discipline"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  <span className="text-4xl mb-4 block" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-xl font-semibold mb-2" itemProp="feature">{item.title}</h3>
                  <p className="text-gray-600" itemProp="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "100%", label: "Parent Satisfaction" },
                { number: "20+", label: "Co-curricular Clubs" },
                { number: "1:12", label: "Student-Teacher Ratio" },
                { number: "10+", label: "Years of Impact" }
              ].map((stat, index) => (
                <div key={index} itemScope itemType="https://schema.org/QuantitativeValue">
                  <p className="text-4xl font-bold mb-2" itemProp="value">{stat.number}</p>
                  <p className="text-gray-300" itemProp="name">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Parents Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The teachers genuinely care about each student's growth.",
                  author: "James Victor",
                  role: "CBC Parent (Brigadier)",
                  reviewedItem: "CBC Campus",
                  date: "2023-05-15"
                },
                {
                  quote: "My child has flourished both academically and socially at the Cambridge campus.",
                  author: "Michael Kijana",
                  role: "Cambridge Parent (Brigadier)",
                  reviewedItem: "Cambridge Campus",
                  date: "2023-06-20"
                },
                {
                  quote: "The teacher training program gave me practical skills I use every day in my classroom.",
                  author: "Nafula Moraa",
                  role: "TTC Graduate",
                  reviewedItem: "Teacher Training College",
                  date: "2023-04-10"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization">
                    <meta itemProp="name" content={testimonial.reviewedItem} />
                    {/* Add more properties if available:
                    <meta itemProp="address" content="..." />
                    <link itemProp="url" href="https://your-school-website.com" /> */}
                  </div>

                  <blockquote 
                    className="text-lg italic mb-4" 
                    itemProp="reviewBody"
                    cite={testimonial.date}
                  >
                    "{testimonial.quote}"
                  </blockquote>

                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <p className="text-gray-600">
                      <span itemProp="name">{testimonial.author}</span>, <span itemProp="jobTitle">{testimonial.role}</span>
                    </p>
                  </div>
                  
                  <meta itemProp="datePublished" content={testimonial.date} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CALL-TO-ACTION SECTION ===== */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule a visit to any of our campuses.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                aria-label="Book a school tour"
              >
                Book a Tour
              </button>
            </div>
          </div>
        </section>

        {/* Book Tour Popup */}
        {showPopup && (
          <BookTourPopup 
            onClose={() => {
              setShowPopup(false);
              setSubmitStatus(null);
            }} 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}

        {/* Success/Error Notification */}
        {submitStatus && (
          <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-md shadow-lg z-50 ${
            submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}>
            {submitStatus === 'success' 
              ? 'Thank you! Your tour has been booked successfully.' 
              : 'An error occurred. Please try again later.'}
          </div>
        )}
      </main>
    </>
  );
}