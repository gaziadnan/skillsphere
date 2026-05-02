"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import courses from "../../data/courses.json";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";

export default function CoursesPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(courses);
  const [category, setCategory] = useState("All");

  // ✅ BetterAuth session
  const { data: session, isPending } = authClient.useSession();

  // 🔐 Protect Route
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  // 🔍 Search + Filter
  useEffect(() => {
    let data = courses;

    if (category !== "All") {
      data = data.filter((c) => c.category === category);
    }

    if (search) {
      data = data.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  }, [search, category]);

  const categories = ["All", "Development", "Machine Learning", "English"];

  // ⏳ Loader
  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-[#F8FAFC] py-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* 🔥 Header + Search */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          
          <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
            All Courses
          </h1>

          <input
            type="text"
            placeholder="Search courses..."
            className="border px-4 py-2 rounded-lg w-full md:w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 🔥 Categories */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                category === cat
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition duration-300"
            >
              
              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={course.image}
                  className="w-full h-48 object-cover"
                  alt={course.title}
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {course.instructor}
                </p>

                {/* Rating + Duration */}
                <div className="flex gap-2 mt-2 text-sm">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    ⭐ {course.rating}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    ⏱ {course.duration}
                  </span>
                </div>

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