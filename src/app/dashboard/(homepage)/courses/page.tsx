"use client";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import coursesList from "../../../../../public/courses";
import CourseCard from "@/app/ui/dashboard/courseCard/CourseCard";
import OrderByBtn from "@/app/ui/dashboard/orderByBtn/OrderByBtn";
import orderByBtns from "../../../../../public/orderByBtns";

const main = {
  width: "100%",
  height: "100vh",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
};
const Courses = () => {
  const [filterBy, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const handleOnFilterChange = (e: string | string[]) => {
    setFilter(e.toString());
  };

  const handleOnSortChange = (e: string | string[]) => {
    setSortBy(e.toString());
  };

  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"} bg={"red"}>
      <Box
        alignSelf={"flex-end"}
        marginRight={1}
        display={"flex"}
        columnGap={5}
      >
        {orderByBtns.map((orderBy, idx) => (
          <OrderByBtn
            key={idx}
            button={orderBy}
            handleOnChange={
              orderBy.btnName === "Filter by"
                ? handleOnFilterChange
                : handleOnSortChange
            }
            selectedOptn={orderBy.btnName === "Filter by" ? filterBy : sortBy}
          />
        ))}
      </Box>
      <Box overflowY={"scroll"} w={"100%"} h={"100%"}>
        <SimpleGrid
          spacing={5}
          templateColumns={{
            base: "repeat(auto-fill, minmax(200px, 1fr))",
            sm: "repeat(auto-fill, minmax(220px, 1fr))",
            xl: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
          // w={"100%"}
          justifyContent={"center"}
          paddingBlock={".5rem"}
        >
          {coursesList
            .sort((a, b) => {
              if (sortBy === "default") {
                return 0;
              } else if (sortBy === "rating") {
                return Number(b.courseRating) - Number(a.courseRating);
              } else {
                return sortBy === "ascending"
                  ? a.courseName.localeCompare(b.courseName)
                  : b.courseName.localeCompare(a.courseName);
              }
            })
            .filter((course) => {
              return filterBy === "all"
                ? course
                : filterBy === "paid"
                ? course.isPaidCourse === true
                : course.isPaidCourse === false;
            })
            .map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Courses;
