'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const TeachersTrainingCollege = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fade in animation
    setIsVisible(true);
    
    // Progress bar animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-indigo-100 p-4">
      <Head>
        <title>Teachers Training College - Under Construction</title>
      </Head>
      
      <div className={`max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center">
          {/* College Logo/Badge */}
          <div className="relative mx-auto w-28 h-28 mb-6">
            <div className="absolute inset-0 bg-teal-600 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <svg 
                  className="w-14 h-14 text-teal-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* College Name */}
          <h1 className="text-2xl font-bold text-teal-800 mb-2">
            Teachers Training College
          </h1>
          
          {/* Title with typing animation */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4 overflow-hidden whitespace-nowrap border-r-4 border-r-teal-500 animate-typing">
            Page Under Construction
          </h2>
          
          {/* Message with fade-in */}
          <p className="text-gray-600 mb-6 mt-4">
            We're developing an enhanced learning platform for future educators. Please check back soon for updates!
          </p>
          
          {/* Animated progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-teal-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Animated educational elements */}
          <div className="flex justify-center space-x-4 my-6">
            {['📚', '✏️', '🎓'].map((item, i) => (
              <div 
                key={i}
                className="text-2xl animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {item}
              </div>
            ))}
          </div>
          
          {/* Contact information */}
          <div className="text-sm text-gray-500 mt-8 p-4 bg-teal-50 rounded-lg">
            <p className="font-semibold text-teal-700">For inquiries, please contact:</p>
            <p>Email: info@leedspremierschools.sc.ke</p>
            <p>Phone: +254 729 027278</p>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #3b82f6; }
        }
        .animate-typing {
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
          white-space: nowrap;
          overflow: hidden;
          border-right: .15em solid #3b82f6;
          width: 0;
          max-width: max-content;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default TeachersTrainingCollege;