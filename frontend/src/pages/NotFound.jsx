import { Link, useNavigate } from 'react-router-dom'; // Remove if not using React Router

export default function NotFound() {
  const navigate = useNavigate(); // Remove if not using React Router

  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Error Code */}
        <p className="text-base font-semibold text-indigo-600">404</p>
        
        {/* Main Heading */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        
        {/* Subtext */}
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        
        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            Go back home
          </Link>
          
          <button
            onClick={() => navigate(-1)}
            className="rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
          >
            &larr; Previous page
          </button>
        </div>
      </div>
    </main>
  );
}
