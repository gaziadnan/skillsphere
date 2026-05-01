"use client";

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "John Carter",
      role: "Web Development Expert",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "10+ years experience in full-stack development and mentoring thousands of students worldwide.",
    },
    {
      id: 2,
      name: "Sarah Lee",
      role: "Machine Learning Specialist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "AI & Data Science expert helping learners master machine learning with real-world projects.",
    },
    {
      id: 3,
      name: "David Smith",
      role: "English Communication Coach",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      desc: "Helping students improve spoken English, confidence, and communication skills globally.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-10">
      {/* 1400px container */}
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Top Instructors</h2>
          <p className="text-gray-500 mt-2">
            Learn from industry experts and experienced mentors
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((ins) => (
            <div
              key={ins.id}

              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition duration-500">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={ins.image}
                  alt={ins.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {ins.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#244D3F] font-medium mt-1">
                {ins.role}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {ins.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
