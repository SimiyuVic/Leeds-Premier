'use client';

import { useState } from 'react';

const BookTourPopup = ({ onClose, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    campus: 'CBC Campus', // Default selection
    message: ''
  });

  const campuses = [
    'CBC Campus',
    'Teachers Training College',
    'Cambridge Campus'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Book a Campus Tour</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="campus" className="block text-sm font-medium text-gray-700 mb-1">Select Campus *</label>
            <select
              id="campus"
              name="campus"
              required
              value={formData.campus}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {campuses.map((campus) => (
                <option key={campus} value={campus}>{campus}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Visit Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50 flex justify-center items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : 'Submit Booking'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTourPopup;