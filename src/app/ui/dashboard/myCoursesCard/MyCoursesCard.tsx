import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Course } from "../../../../../public/courses";
import Link from "next/link";

interface Props {
  course: Course;
}

const MyCoursesCard = ({ course }: Props) => {
  return (
    <Link href={`/dashboard/my-courses/${btoa(course.courseId)}`}>
      <Card h={"320px"}>
        <CardHeader h={"60%"}>
          <Image
            src={`/${course.courseImg}`}
            alt={course.courseName}
            borderRadius="lg"
            w={"100%"}
          />
        </CardHeader>
        <CardBody display={"flex"} flexDir={"column"} rowGap={3} pt={0}>
          <Heading size="md" h={"75px"}>
            {course.courseName}
          </Heading>
          <Flex justifyContent={"space-between"}>
            <Text color="#718096">{course.author}</Text>
            <Text>{course.courseRating}</Text>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MyCoursesCard;
