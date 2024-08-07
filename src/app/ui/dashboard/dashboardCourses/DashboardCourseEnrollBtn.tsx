"use client";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import {
  addEnrolledCourse,
  removeEnrolledCourse,
} from "@/lib/features/enrolledCourses/enrolledCoursesSlice";
import { Course } from "../../../../../public/courses";

interface Props {
  course: Course;
}

const DashboardCourseEnrollBtn = ({ course }: Props) => {
  const [isEnrolled, setEnrolled] = useState(false);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    setEnrolled(!isEnrolled);
    dispatch(addEnrolledCourse(course));
    localStorage.setItem("enrolledCourses", JSON.stringify(course));
  };
  return (
    <Button
      fontSize={{ base: "sm" }}
      colorScheme="teal"
      isDisabled={isEnrolled}
      onClick={() => {
        handleButtonClick();
      }}
      size={{ base: "sm" }}
    >
      {isEnrolled ? "Enrolled!" : "Enroll Now!"}
    </Button>
  );
};

export default DashboardCourseEnrollBtn;
