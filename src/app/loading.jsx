export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC]/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#244D3F] rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-500">Loading...</p>
      </div>
    </div>
  );
}