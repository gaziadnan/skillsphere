"use client";

import { BookOpen, Clock, Target, Brain, Lightbulb, Users } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

export default function Tips() {
  const tips = [
    {
      id: 1,
      icon: <BookOpen size={28} />,
      title: "Study Smart",
      desc: "Focus on understanding concepts instead of memorizing.",
    },
    {
      id: 2,
      icon: <Clock size={28} />,
      title: "Manage Time",
      desc: "Create a study schedule and stay consistent.",
    },
    {
      id: 3,
      icon: <Target size={28} />,
      title: "Set Goals",
      desc: "Break learning into small achievable goals.",
    },
    {
      id: 4,
      icon: <Brain size={28} />,
      title: "Practice Daily",
      desc: "Consistency beats intensity.",
    },
    {
      id: 5,
      icon: <Lightbulb size={28} />,
      title: "Think Creatively",
      desc: "Try solving problems differently.",
    },
    {
      id: 6,
      icon: <Users size={28} />,
      title: "Learn Together",
      desc: "Group study improves motivation.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Learning Tips
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          speed={4000} // 🔥 very smooth long transition
          autoplay={{
            delay: 0, // 🔥 continuous flow (IMPORTANT)
            disableOnInteraction: false,
          }}
          allowTouchMove={false} // 🔥 auto smooth (no manual break)
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {tips.map((tip) => (
            <SwiperSlide key={tip.id}>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 
              text-center hover:shadow-xl transition-all duration-500 
              transform hover:-translate-y-2 h-full">
                
                <div className="flex justify-center mb-4 text-[#244D3F]">
                  {tip.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {tip.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {tip.desc}
                </p>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}