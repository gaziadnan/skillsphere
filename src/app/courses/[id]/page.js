"use client";

import { useParams, useRouter } from "next/navigation";
import courses from "@/data/courses.json";
import { useEffect } from "react";
import { isLoggedIn } from "@/lib/auth";

export default function CourseDetails() {
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, []);

  const course = courses.find((c) => c.id == id);

  if (!course) return <p>Course not found</p>;

  return (
    <div className="max-w-[900px] mx-auto py-16 px-4">
      
      <img
        src={course.image}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {course.title}
      </h1>

      <p className="text-gray-600 mt-2">
        {course.description}
      </p>

      {/* Curriculum */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          Course Curriculum
        </h2>

        <ul className="list-disc ml-5 text-gray-600">
          <li>Introduction</li>
          <li>Basics</li>
          <li>Advanced Topics</li>
          <li>Project</li>
        </ul>
      </div>
    </div>
  );
}