export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a] text-white rounded-b-[60px]">
      {/* ✅ 1400px Container */}
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn from Industry Experts
          </h1>

          <p className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0">
            Work with top instructors and upgrade your skills with practical,
            real-world courses designed to boost your career.
          </p>

          {/* Search */}
          <div className="mt-8 flex justify-center md:justify-start">
            <div className="flex bg-white rounded-full overflow-hidden w-full max-w-xl">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 px-5 py-3 text-black outline-none"
              />
              <button className="bg-green-500 px-6 text-white font-semibold hover:bg-green-400 transition">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-10 mt-10 text-sm">
            <div>
              <h2 className="text-xl font-bold">834M</h2>
              <p className="text-gray-300">Learners</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">732M</h2>
              <p className="text-gray-300">Reviews</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">236M</h2>
              <p className="text-gray-300">Courses</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://i.postimg.cc/3x1dK6kF/marketing.jpg"
            alt="hero"
            className="w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
