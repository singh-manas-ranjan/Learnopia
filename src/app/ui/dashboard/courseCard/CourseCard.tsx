import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Course } from "../../../../../public/courses";

interface Props {
  course: Course;
}

const CourseCard = ({
  course: {
    courseName,
    author,
    courseImg,
    courseRating,
    coursePrice,
    isPaidCourse,
  },
}: Props) => {
  return (
    <Card h={"410px"}>
      <CardHeader h={"40%"}>
        <Image
          src={`/${courseImg}`}
          alt={courseName}
          borderRadius="lg"
          w={"100%"}
        />
      </CardHeader>
      <CardBody h={"40%"}>
        <Heading size="md" h={"60%"}>
          {courseName}
        </Heading>
        <Text>{author}</Text>
        <Text>{courseRating}</Text>
        <Text color="blue.600">{coursePrice ? coursePrice : "Free"}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="teal">Enroll Now!</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
