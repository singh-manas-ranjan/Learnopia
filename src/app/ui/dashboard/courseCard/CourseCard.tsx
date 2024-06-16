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

const CourseCard = ({ course }: Props) => {
  return (
    <Card h={"410px"}>
      <CardHeader h={"40%"}>
        <Image
          src={`/${course.courseImg}`}
          alt={course.courseName}
          borderRadius="lg"
          w={"100%"}
        />
      </CardHeader>
      <CardBody display={"grid"}>
        <Heading size="md" h={"75px"}>
          {course.courseName}
        </Heading>
        <Grid>
          <Text>{course.author}</Text>
          <Text>{course.courseRating}</Text>
          <Text color="blue.600">
            {course.coursePrice ? course.coursePrice : "Free"}
          </Text>
        </Grid>
      </CardBody>
      <CardFooter h={"15%"} display={"flex"} alignItems={"flex-end"}>
        <EnrollBtn courseId={course.courseId} />
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
