import MainBanner from "../components/MainBanner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ===== HERO BANNER SECTION ===== */}
      <MainBanner />

      {/* ===== ABOUT THE GROUP SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Our School Community</h2>
          <p className="text-lg text-gray-700">
            We are a group of forward-thinking institutions offering CBC, Cambridge International Curriculum, 
            and Teacher Training programs. Our mission is to empower students and educators through a nurturing, 
            innovative, and globally-minded learning environment.
          </p>
        </div>
      </section>

      {/* ===== EXPLORE OUR SCHOOLS SECTION ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CBC School",
                description: "Offering competency-based curriculum from pre-primary to junior secondary levels.",
                href: "/schools/cbc-campus",
                image: "/home-page/cbc-campus.jpeg",
                buttonLabel: "More About CBC School"
              },
              {
                title: "Cambridge Campus",
                description: "Delivering the British curriculum with a global perspective for primary and secondary education.",
                href: "/schools/cambridge-campus",
                image: "/home-page/cambridge-campus.jpeg",
                buttonLabel: "More About Cambridge Campus"
              },
              {
                title: "Teacher Training College",
                description: "Accredited programs for future educators in ECDE, P1, and Diploma in Education.",
                href: "/schools/teachers-training-college",
                image: "/home-page/ttc-campus-1.jpeg",
                buttonLabel: "More About TTC"
              }
            ].map((school, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <div className="h-48 relative">
                  <Image
                    src={school.image}
                    alt={school.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{school.title}</h3>
                  <p className="text-gray-600">{school.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={school.href}
                    className="inline-block mt-4 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
                  >
                    {school.buttonLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                name: "Mr. Richard Otieno",
                title: "Headteacher, CBC School",
                image: "/images/leaders/grace.jpg",
                message: "We nurture each child to be competent, confident and curious — ready to thrive in today's world."
              },
              {
                name: "Mrs. Wambui",
                title: "Head of Institution, Cambridge Campus",
                image: "/images/leaders/richard.jpg",
                message: "Our global curriculum equips learners with critical thinking, collaboration and innovation skills."
              },
              {
                name: "Dr. Naomi Mwikali",
                title: "Principal, Teacher Training College",
                image: "/images/leaders/naomi.jpg",
                message: "We’re committed to producing exceptional educators who will inspire the next generation."
              }
            ].map((leader, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-blue-600 text-sm mb-3">{leader.title}</p>
                <p className="text-gray-600 text-sm italic">"{leader.message}"</p>
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
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              <div key={index}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
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
                author: "James Victor, Parent"
              },
              {
                quote: "My child has flourished both academically and socially.",
                author: "Michael Kijana, Parent"
              },
              {
                quote: "The community here is unlike any other school.",
                author: "Nafula Moraa, Parent"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                <p className="text-gray-600">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CALL-TO-ACTION SECTION ===== */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a visit or begin the application process today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/visit"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Book a Tour
            </Link>
            <Link
              href="/apply"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
