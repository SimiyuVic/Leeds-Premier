import MainBanner from "../components/MainBanner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ===== HERO BANNER SECTION ===== */}
      <MainBanner />

      {/* ===== FEATURED PROGRAMS/VALUES SECTION ===== */}
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

      {/* ===== STATS COUNTER SECTION ===== */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100%", label: "School Satisfaction" },
              { number: "20+", label: "Sports Teams" },
              { number: "1:12", label: "Student-Teacher Ratio" },
              { number: "35+", label: "Clubs & Societies" }
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
                author: "Elephant Man, Parent"
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

      {/* ===== UPCOMING EVENTS SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="space-y-6">
            {[
              {
                date: "June 15",
                title: "Open House Day",
                description: "Tour our campus and meet the faculty"
              },
              {
                date: "July 2",
                title: "STEM Fair",
                description: "Student projects showcase"
              },
              {
                date: "August 10",
                title: "Enrollment Deadline",
                description: "Applications due for fall term"
              }
            ].map((event, index) => (
              <div key={index} className="flex items-start border-b pb-4">
                <div className="bg-gray-900 text-white px-4 py-2 rounded mr-6">
                  <p className="font-bold">{event.date}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
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
            Schedule a visit or begin the application process today
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