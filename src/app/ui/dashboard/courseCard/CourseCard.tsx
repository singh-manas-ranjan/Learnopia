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
import EnrollBtn from "./enrollBtn/EnrollBtn";

interface Props {
  course: Course;
}

const textStyle = {
  fontSize: { base: "sm" },
};

const CourseCard = ({ course }: Props) => {
  return (
    <Card
      h={{ sm: "370px", md: "315px", lg: "325px" }}
      boxShadow={
        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      }
    >
      <CardHeader h={{ base: "210px", md: "fit-content" }}>
        <Image
          src={`/${course.courseImg}`}
          alt={course.courseName}
          borderRadius="lg"
          w={"100%"}
          h={"100%"}
        />
      </CardHeader>
      <CardBody
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        paddingBlock={0}
      >
        <Heading size={{ base: "sm" }}>{course.courseName}</Heading>
        <Grid>
          <Text sx={textStyle}>{course.author}</Text>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text sx={textStyle}>{course.courseRating}</Text>
            <Text color="blue.600" sx={textStyle}>
              {course.coursePrice ? course.coursePrice : "Free"}
            </Text>
          </Box>
        </Grid>
      </CardBody>
      <CardFooter
        // display={"flex"}
        // alignItems={"flex-end"}
        // justifyContent={"center"}
        paddingTop={2}
        paddingBottom={5}
        display={"grid"}
      >
        <EnrollBtn course={course} />
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
