import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Course } from "../../../../../public/courses";
import EnrollBtn from "../courseCard/enrollBtn/EnrollBtn";
import DashboardCourseEnrollBtn from "./DashboardCourseEnrollBtn";

interface Props {
  course: Course;
}

const textStyle = {
  fontSize: { base: "sm", lg: "xs" },
};

const DashboardCoursesCard = ({ course }: Props) => {
  return (
    <Card
      h={{ sm: "310px", md: "300px", xl: "280px" }}
      boxShadow={
        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      }
    >
      <CardHeader>
        <Image
          src={`/${course.courseImg}`}
          alt={course.courseName}
          borderRadius="lg"
          w={"100%"}
          h={"100%"}
        />
      </CardHeader>
      <CardBody
        paddingBlock={0}
        paddingInline={5}
        h={"80px"}
        overflow={"hidden"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Heading fontSize={{ base: "sm" }}>{course.courseName}</Heading>
        <Text sx={textStyle} color={"#3c7356"}>
          {course.author}
        </Text>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text sx={textStyle} color={"#3c7356"}>
            {course.courseRating}
          </Text>
          <Text color="blue.600" sx={textStyle}>
            {course.coursePrice === 0
              ? `Free`
              : `₹ ${course.coursePrice.toLocaleString()}`}
          </Text>
        </Box>
      </CardBody>
      <CardFooter display={"grid"}>
        <DashboardCourseEnrollBtn course={course} />
      </CardFooter>
    </Card>
  );
};

export default DashboardCoursesCard;
