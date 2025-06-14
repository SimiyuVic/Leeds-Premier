export default function TeachersTraining() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 p-6 text-center">
      <div className="max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <div className="text-6xl mb-4">👩‍🏫</div>
        <h1 className="text-3xl font-bold text-teal-800 mb-4">
          Teachers Training College
        </h1>
        <p className="text-gray-600 text-lg">
          This section is currently under development. We're working hard to bring you 
          the best resources for teacher training. Please check back soon!
        </p>
        <div className="mt-6 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500 animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}