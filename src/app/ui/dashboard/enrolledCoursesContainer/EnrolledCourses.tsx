"use client";
// import { useAppSelector } from "@/app/hooks/reduxHooks";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MyCoursesCard from "./myCoursesCard/MyCoursesCard";
import coursesList from "../../../../../public/courses";

const EnrolledCourses = () => {
  // const enrolledCourses = useAppSelector(
  //   (state) => state.courses.enrolledCourses
  // );
  const enrolledCourses = coursesList;
  return (
    <SimpleGrid
      spacing={5}
      templateColumns="repeat(5, 1fr)"
      w={"100%"}
      justifyContent={"center"}
      paddingBlock={".5rem"}
    >
      {enrolledCourses.slice(0, 3).map((course, idx) => (
        <MyCoursesCard key={idx} course={course} />
      ))}
    </SimpleGrid>
  );
};

export default EnrolledCourses;
