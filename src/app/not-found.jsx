import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] px-4">
      
      <h1 className="text-6xl font-bold text-gray-800 mb-4">
        404
      </h1>

      <p className="text-gray-500 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link href="/">
        <button className="bg-[#244D3F] text-white px-6 py-2 rounded-full hover:bg-[#3f8570d0] transition">
          Go back to Home
        </button>
      </Link>

    </div>
  );
};

export default NotFoundPage;