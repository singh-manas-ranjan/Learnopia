import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import coursesList from "../../../../../public/courses";
import MyCoursesCard from "@/app/ui/dashboard/myCoursesCard/MyCoursesCard";

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
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(5, 1fr)"
          w={"100%"}
          justifyContent={"center"}
          paddingBlock={".5rem"}
        >
          {coursesList.slice(0, 3).map((course, idx) => (
            <MyCoursesCard key={idx} course={course} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default MyCourses;
