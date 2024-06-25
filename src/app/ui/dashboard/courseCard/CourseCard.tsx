import {
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
    <Card h={{ sm: "370px", lg: "350px" }}>
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
          <Text sx={textStyle}>{course.courseRating}</Text>
          <Text color="blue.600" sx={textStyle}>
            {course.coursePrice ? course.coursePrice : "Free"}
          </Text>
        </Grid>
      </CardBody>
      <CardFooter
        display={"flex"}
        alignItems={"flex-end"}
        paddingTop={2}
        paddingBottom={5}
      >
        <EnrollBtn course={course} />
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
