export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Vedant's Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Software Developer & Creative Problem Solver
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/VedantResume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Download Resume
          </a>
          <a
            href="/vedant_headshot.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View Photo
          </a>
        </div>
      </div>
    </main>
  );
}
