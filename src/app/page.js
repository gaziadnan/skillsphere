// import Hero from "@/components/home/Hero";
// import PopularCourses from "@/components/home/PopularCourses";
// import Instructors from "@/components/home/Instructors";
// import Tips from "@/components/home/Tips";


import Hero from"../components/home/Hero";
import PopularCourses from"../components/home/PopularCourses";
import Instructors from"../components/home/Instructors";
import Tips from"../components/home/Tips";  
import Trending from "../components/home/Trending";

export default function Home() {
  return (
    <>
    
      <Hero /> 
      <PopularCourses />
      <Instructors />
      <Tips/>
      <Trending />
    </>
  );
}
