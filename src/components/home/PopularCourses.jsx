"use client";

import courses from "../../data/courses.json";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";

export default function PopularCourses() {
  const router = useRouter();

  // ✅ session check
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // ✅ sort popular
  const popular = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // ✅ button function
  const handleSeeMore = () => {
    if (user) {
      router.push("/courses");
    } else {
      router.push("/login");
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-10">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Title */}
        <div className="mb-10 mt-8">
          <h2 className="text-4xl text-center font-bold text-gray-800">
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
              
              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {course.instructor}
                </p>

                {/* Rating + Duration */}
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

                {/* Details Button */}
                <Link href={`/courses/${course.id}`}>
                  <button className="mt-4 w-full border border-[#244D3F] text-[#244D3F] py-2 rounded-lg hover:bg-[#244D3F] hover:text-white transition">
                    View Details
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 border border-[#244D3F] text-[#244D3F] rounded-full hover:bg-[#244D3F] hover:text-white transition-all duration-300"
          >
           All Courses
          </button>
        </div>

      </div>
    </section>
  );
}