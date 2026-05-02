"use client";

// import courses from "@/data/courses.json";
import courses from "../../data/courses.json";
import Link from "next/link";

export default function PopularCourses() {
  const popular = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="bg-[#F8FAFC] py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-10 mt-8">
          <h2 className="text-3xl text-center font-bold text-gray-800">
            Popular Courses
          </h2>
        </div>

        {/* Cards */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popular.map((course) => (
            
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-200 p-4 
              hover:shadow-lg transition-all duration-500 
              transform hover:-translate-y-1 animate-fadeIn"
            >
              
              {/* Image (framed style) */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-gray-500 mt-1">
                  {course.instructor}
                </p>

                {/* 🔥 Rating Row (exact like image) */}
                <div className="flex flex-wrap gap-2 mt-3 text-sm">
                  
                  <span className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                    ⭐ {course.rating}
                  </span>

                  

                  <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">
                    {course.duration}
                  </span>

                </div>

                {/* Price */}
                <p className="mt-3 text-lg font-bold text-gray-800">
                  ${course.price}
                </p>

                {/* 🔥 Full Button */}
                <Link href={`/courses/${course.id}`}>
                   <button className="mt-4 w-full border border-[#244D3F] text-[#244D3F] py-2 rounded-lg hover:bg-[#244D3F] hover:text-white transition">
  View Details
</button>
                </Link>

              </div>
            </div>

          ))}
        </div>

        {/* Show More */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 border border-[#244D3F] text-[#244D3F] rounded-full hover:bg-[#244D3F] hover:text-white transition">
            All Courses
          </button>
        </div>
      </div>
    </section>
  );
}