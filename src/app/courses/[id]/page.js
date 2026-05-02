"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import courses from "../../../data/courses.json";
import { authClient } from "../../../lib/auth-client";

export default function CourseDetails() {
  const { id } = useParams();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  // 🔒 Protected Route
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  // ⏳ Loader
  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const course = courses.find((c) => c.id == id);

  if (!course) {
    return <div className="text-center mt-20">Course not found</div>;
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-20">
      
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      <img
        src={course.image}
        className="w-full max-h-[400px] object-cover rounded-xl"
      />

      <p className="mt-4 text-gray-600">{course.description}</p>

      <div className="mt-4 flex gap-4">
        <span className="bg-green-100 px-3 py-1 rounded">
          ⭐ {course.rating}
        </span>

        <span className="bg-blue-100 px-3 py-1 rounded">
          ⏱ {course.duration}
        </span>
      </div>

      {/* Curriculum */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">
          Course Curriculum
        </h2>

        <ul className="list-disc ml-6 text-gray-600 space-y-1">
          <li>Introduction</li>
          <li>Basic Concepts</li>
          <li>Hands-on Project</li>
          <li>Final Assignment</li>
        </ul>
      </div>
    </div>
  );
}