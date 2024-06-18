import EnrolledCourses from "@/app/ui/dashboard/enrolledCoursesContainer/EnrolledCourses";
import { Box } from "@chakra-ui/react";
import React from "react";

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

const MyCourses = () => {
  return (
    <Box as="main" sx={main}>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"}>
        <EnrolledCourses />
      </Box>
    </Box>
  );
};

export default MyCourses;
