"use client";

import React, { useState, useRef } from "react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [selectedCampus, setSelectedCampus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedCampus) {
      setSubmitStatus({ success: false, message: "Please select a campus before submitting." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string || undefined,
        campus: selectedCampus,
        message: formData.get("message") as string,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setSubmitStatus({ success: true, message: "Message sent successfully! We'll get back to you soon." });
      formRef.current?.reset();
      setSelectedCampus("");
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus({
        success: false,
        message: err instanceof Error ? err.message : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50 mt-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input type="text" id="name" name="name" required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" name="email" required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label htmlFor="campus" className="block text-sm font-medium text-gray-700">Campus *</label>
                <select id="campus" name="campus" required
                  value={selectedCampus} onChange={(e) => setSelectedCampus(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a campus</option>
                  <option value="Cambridge">Cambridge Campus Kitale</option>
                  <option value="CBC">CBC School Brigadier</option>
                  <option value="TTC">Teacher's Training College Brigadier</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea id="message" name="message" rows={4} required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info (static) */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-700">4175, Kitale, Leeds, Bungoma, Kenya</p>
              <p className="text-gray-700">+254116093086</p>
              <p className="text-gray-700">Mon-Fri: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-700">info@leedspremierschools.sc.ke</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
