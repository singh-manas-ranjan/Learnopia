import React from "react";
import CourseDetails from "@/app/ui/dashboard/courseDetails/CourseDetails";
import { Box, Heading } from "@chakra-ui/react";
import coursesList from "../../../../../../public/courses";

interface Props {
  params: { "course-id": string };
}

const ParticularCourse = ({ params }: Props) => {
  const courseId = atob(params["course-id"]);
  const course = coursesList.find((course) => course.courseId === courseId);

  const main = {
    width: "100%",
    height: "90vh",
    bg: "#fff",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    overflow: "hidden",
  };

  return (
    <Box as="main" sx={main}>
      {course ? (
        <CourseDetails course={course} />
      ) : (
        <Heading>{`No Course Fount With Id: ${courseId}`}</Heading>
      )}
    </Box>
  );
};

export default ParticularCourse;
