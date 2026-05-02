"use client";

import courses from "../../data/courses.json";
import Link from "next/link";

export default function Trending() {

  const trending = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(3, 6);

  return (
    <section className="bg-[#F8FAFC] py-16">
      
      <div className="max-w-[1400px] mx-auto px-4">

        {/* 🔥 Heading Center + Bigger */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Trending Courses
          </h2>
          <p className="text-gray-xl mt-6">
            Explore the most popular and in-demand courses
          </p>
        </div>

        {/* 🔥 Responsive Grid FIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {trending.map((course) => (
            
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-200 
              overflow-hidden hover:shadow-xl transition duration-300 
              transform hover:-translate-y-2"
            >
              
              {/* Image */}
              <div className="p-3">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pb-5 text-center md:text-left">
                
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {course.instructor}
                </p>

                {/* Rating + Duration */}
                <div className="flex justify-center md:justify-start gap-2 mt-3 text-sm">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    ⭐ {course.rating}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    ⏱ {course.duration}
                  </span>
                </div>

                {/* Price */}
                <p className="mt-3 text-lg font-bold text-gray-800">
                  ${course.price}
                </p>

                {/* Button */}
                <Link href={`/courses/${course.id}`}>
                  <button className="mt-4 w-full border border-[#244D3F] text-[#244D3F] py-2 rounded-lg hover:bg-[#244D3F] hover:text-white transition">
                    View Details
                  </button>
                </Link>

              </div>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}