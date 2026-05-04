"use client";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 min-h-[700px] bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a] text-white rounded-b-[60px] flex items-center">
      
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT */}
        <div className="flex-1 text-center md:text-left animate-fadeIn">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn from Industry Experts
          </h1>

          <p className="mt-5 text-gray-300 max-w-lg mx-auto md:mx-0 text-base md:text-lg">
            Work with top instructors and upgrade your skills with practical,
            real-world courses designed to boost your career.
          </p>

          {/* Search */}
          <div className="mt-8 flex justify-center md:justify-start">
            <div className="flex bg-white rounded-full overflow-hidden w-full max-w-xl shadow-lg">
              
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 px-5 py-3 text-black outline-none"
              />

              <button className="bg-green-500 px-6 py-3 text-white font-semibold hover:bg-green-400 transition-all duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-10 mt-10 text-sm">
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">834M</h2>
              <p className="text-gray-300">Learners</p>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">732M</h2>
              <p className="text-gray-300">Reviews</p>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">236M</h2>
              <p className="text-gray-300">Courses</p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1  flex justify-center md:justify-end">
  
  <div className="relative">
    
    <img
      src="https://media.istockphoto.com/id/2080511636/vector/mobile-edtech-or-education-technology-for-online-learning-tiny-person-concept.jpg?s=2048x2048&w=is&k=20&c=hJDA-Q-Yrthrsn_fJ0RV-g3ycs43b3cnBKWtOxpefgs="
      alt="hero"
      className="w-[600px] h-[320px] md:w-[520px] md:h-[360px] lg:w-[600px] lg:h-[420px] object-cover rounded-3xl shadow-2xl animate-float"
    />

    {/* glow */}
    {/* <div className="absolute inset-0 rounded-3xl bg-[#244D3F]/20 blur-2xl -z-10"></div> */}

  </div>
</div>

      </div>
    </section>
  );
}