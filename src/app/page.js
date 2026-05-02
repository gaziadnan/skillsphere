import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import Instructors from "@/components/home/Instructors";
import Tips from "@/components/home/Tips";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCourses />
      <Instructors />
      <Tips/>
    </>
  );
}