import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import coursesList from "../../../public/courses";
import CourseCard from "../ui/dashboard/courseCard/CourseCard";
import Barchart from "../ui/dashboard/barchart/Barchart";
import studentRankings from "../../../public/rankingData";

const main = {
  width: "100%",
  height: "90%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Dashboard = () => {
  return (
    <Box as="main" sx={main}>
      <Flex w={"100%"} h={"100%"}>
        <Flex flex={6} flexDirection={"column"} p={"1rem"} rowGap={10}>
          <Box
            flex={5}
            borderRadius={8}
            bgColor={"#2D89BA"}
            position={"relative"}
            overflow={"hidden"}
            display={"flex"}
          >
            <Flex flexDir={"column"} p={"1rem"} color={"#fff"}>
              <Grid w={"55%"} p={".5rem"} rowGap={5}>
                <Grid rowGap={6}>
                  <Heading>New Exams available Now!</Heading>
                  <Text lineHeight={"1.7rem"}>
                    Welcome to our new exam to attend and check your results how
                    long are you practice for your papers, we provide the best
                    service for every one this platform boost your confidence.
                  </Text>
                </Grid>
                <Button
                  w={150}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  columnGap={2}
                  color={"#2D89BA"}
                >
                  Explore More <FaAngleRight size={18} />
                </Button>
              </Grid>
            </Flex>
            <Box position={"absolute"} right={8} bottom={-3}>
              <Image
                alt="teacher-avatar"
                src={"/teacher.png"}
                width={290}
                height={240}
              />
            </Box>
          </Box>
          <Box
            flex={6}
            borderRadius={8}
            bgColor={"#E8F5FE"}
            p={"1rem"}
            overflow={"hidden"}
          >
            <Flex
              flexDirection={"column"}
              h={"100%"}
              w={"100%"}
              rowGap={3}
              overflow={"hidden"}
            >
              <Flex justifyContent={"space-between"} p={".5rem"}>
                <Text color={"#2D89BA"}>Popular Courses</Text>
                <Link href={"/dashboard/courses"} style={{ color: "#2D89BA" }}>
                  View All
                </Link>
              </Flex>
              <Box overflowY={"scroll"} h={"100%"} w={"100%"}>
                {" "}
                <SimpleGrid
                  spacing={4}
                  templateColumns="repeat(4, 1fr)"
                  p={".5rem"}
                >
                  {coursesList
                    .filter((course) => Number(course.courseRating) >= 4.5)
                    .sort((a, b) => {
                      return Number(b.courseRating) - Number(a.courseRating);
                    })
                    .splice(0, 4)
                    .map((course, idx) => (
                      <CourseCard key={idx} course={course} />
                    ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex flex={2} flexDirection={"column"} p={"1rem"} rowGap={10}>
          <Box
            flex={5}
            borderRadius={8}
            bgColor={"#E8F5FE"}
            position={"relative"}
            overflow={"hidden"}
            display={"flex"}
          >
            <Box
              w={"100%"}
              h={"100%"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              rowGap={3}
              overflow={"hidden"}
            >
              <Box
                color={"#2D89BA"}
                display={"flex"}
                justifyContent={"space-between"}
                p={".5rem"}
              >
                <Text>My ranking</Text>
                <Link href={"#"}>View All</Link>
              </Box>
              <Box overflowY={"scroll"} h={"100%"} w={"100%"}>
                <Accordion allowToggle>
                  {studentRankings.map((student, idx) => (
                    <AccordionItem key={idx}>
                      <Text>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <WrapItem>
                              <Avatar
                                name={student.name}
                                src={student.imageSrc}
                              />
                              <Text m={2} ml={5}>
                                {student.name}
                              </Text>
                            </WrapItem>
                          </Box>
                        </AccordionButton>
                      </Text>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </Box>
          </Box>
          <Box
            flex={6}
            borderRadius={8}
            bgColor={"#E8F5FE"}
            p={"1rem"}
            w={"100%"}
            h={"100%"}
          >
            <Barchart />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
