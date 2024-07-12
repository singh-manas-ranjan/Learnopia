import React, { ReactNode } from "react";
import {
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Avatar,
  Box,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdOndemandVideo } from "react-icons/md";
import coursesList from "../../../../../../public/courses";
import ShareButton from "@/app/ui/dashboard/enrolledCoursesContainer/myCoursesCard/shareButton/ShareButton";
import TextEditor from "@/app/ui/dashboard/profile/textEditor/TextEditor";

interface Props {
  params: { courseId: string };
  children: ReactNode;
}

const ParticularCourseLayout = ({ params, children }: Props) => {
  const courseId = atob(params.courseId);
  const course = coursesList.find((course) => course.courseId === courseId);

  const main = {
    width: "100%",
    height: "100%",
    bg: "#fff",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    overflow: "hidden",
  };

  const textFontSize = {
    fontSize: "sm",
  };

  return (
    <Box as="main" sx={main}>
      {course ? (
        <Flex
          w={"100%"}
          h={"100%"}
          columnGap={".5rem"}
          flexDirection={{ base: "column", xl: "row" }}
          overflowY={"scroll"}
        >
          <Flex flex={6} flexDirection={"column"}>
            <Grid
              p={".5rem"}
              rowGap={".5rem"}
              overflow={"hidden"}
              width={"100%"}
            >
              <Flex justifyContent={"space-between"}>
                <Heading as="h1" size={{ base: "md", lg: "lg" }} color={"#333"}>
                  {course.courseName}
                </Heading>
                <Flex columnGap={2} paddingInline={1} alignItems={"center"}>
                  <Box>
                    <ShareButton />
                  </Box>
                </Flex>
              </Flex>
              <Text as={"h5"} sx={textFontSize}>
                {course.author}
              </Text>
              <Box overflowY={"scroll"} w={"100%"} h={"100%"} mt={5}>
                <Box
                  h={"fit-content"}
                  w={"100%"}
                  overflow={"hidden"}
                  borderRadius={"8px"}
                >
                  <Box
                    w={{ base: "100%", md: "99%" }}
                    h={{ base: "240px", md: "480px" }}
                  >
                    <AspectRatio w={"100%"} h={"100%"} ratio={1}>
                      {children}
                    </AspectRatio>
                  </Box>
                </Box>
                <Box mt={5} width={"100%"}>
                  <Tabs height={"fit-content"}>
                    <TabList overflowX={"scroll"}>
                      <Tab>Description</Tab>
                      <Tab>Reviews</Tab>
                      <Tab>Discussion</Tab>
                      <Tab>Resource</Tab>
                      <Tab>Instructor</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Box w={{ base: "100%", md: "65%" }}>
                          <Text sx={textFontSize}>
                            The Google Project Management Certificate introduces
                            learners to project management fundamentals
                            including various approaches, tools and templates,
                            goal-setting, risk management, team dynamics, and
                            data-driven decision making.
                          </Text>
                          <Text mt={5} sx={textFontSize}>
                            The program, created by Google employees in the
                            field, is designed to provide you with job-ready
                            skills in about 6 months to start or advance your
                            career in Project Management.
                          </Text>
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <Box w={{ base: "100%", md: "95%" }}>
                          <Box
                            w={"100%"}
                            maxH={{ base: "30rem", sm: "35rem" }}
                            display={"flex"}
                            flexDir={"column"}
                            rowGap={3}
                          >
                            {course.comments && (
                              <Box
                                w={"100%"}
                                overflowY={"scroll"}
                                h={{ base: "20rem", sm: "25rem", xl: "30rem" }}
                              >
                                <Accordion h={"100%"} overflowY={"scroll"}>
                                  {course.comments?.map((comment, idx) => (
                                    <AccordionItem key={idx}>
                                      <Text>
                                        <AccordionButton>
                                          <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                          >
                                            <WrapItem
                                              display={"flex"}
                                              alignItems={{
                                                base: "center",
                                                md: "start",
                                                lg: "center",
                                              }}
                                              flexDirection={{
                                                md: "column",
                                                lg: "row",
                                              }}
                                              columnGap={{
                                                base: ".5rem",
                                                md: "0",
                                              }}
                                            >
                                              <Avatar
                                                name={comment.student.name}
                                                src={comment.student.imageSrc}
                                                boxSize={{
                                                  base: "2rem",
                                                  lg: "2.5rem",
                                                }}
                                              />
                                              <Grid
                                                m={{ lg: 2 }}
                                                ml={{ lg: 5 }}
                                                width={"100%"}
                                              >
                                                <Flex
                                                  justifyContent={
                                                    "space-between"
                                                  }
                                                  alignItems={"center"}
                                                  width={"100%"}
                                                >
                                                  <Text
                                                    fontSize={{
                                                      base: "sm",
                                                      xl: "md",
                                                    }}
                                                  >
                                                    {comment.student.name}
                                                  </Text>
                                                </Flex>
                                                <Text
                                                  fontSize={{
                                                    base: ".6rem",
                                                    sm: ".75rem",
                                                    lg: ".8rem",
                                                  }}
                                                  color={"#8D94A3"}
                                                >
                                                  {`${comment.body.substring(
                                                    0,
                                                    100
                                                  )} ...`}
                                                </Text>
                                              </Grid>
                                            </WrapItem>
                                          </Box>
                                        </AccordionButton>
                                      </Text>
                                    </AccordionItem>
                                  ))}
                                </Accordion>
                              </Box>
                            )}
                            <Box
                              w={"100%"}
                              p={".3rem"}
                              overflowY={"scroll"}
                              maxH={{ base: "10rem", md: "8rem" }}
                            >
                              <TextEditor label="Leave a Comment" />
                            </Box>
                          </Box>
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <Box w={{ base: "100%", md: "65%" }}>
                          <Text sx={textFontSize}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nihil tempora optio repudiandae enim nemo
                            officiis sed, quis molestias odit beatae nobis,
                            ipsum repellendus laudantium sequi error mollitia
                            reprehenderit veniam amet.
                          </Text>
                          <Text sx={textFontSize} mt={5}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi, recusandae, consectetur voluptates
                            ipsam cum dolorum suscipit nemo perferendis placeat,
                            debitis iure! Nisi pariatur repellendus ullam, et
                            architecto magnam quia, natus neque in enim soluta
                            itaque vel ipsum asperiores facilis deserunt,
                            molestiae veniam eaque. Fugiat odit, commodi aliquid
                            cupiditate libero nihil.
                          </Text>
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <Box w={{ base: "100%", md: "65%" }}>
                          <Text sx={textFontSize}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti, impedit! Iste tempore quos id,
                            corporis repudiandae consequatur nulla nemo sint!
                          </Text>
                          <Text sx={textFontSize} mt={5}>
                            Project management is so important to organizations
                            and teams, but in order for it to be really
                            effective, you need to make sure you&apos;re
                            correctly mapping your project management
                            methodology to your team type, project,
                            organization, and goals.
                          </Text>
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <Box w={{ base: "100%", md: "65%" }}>
                          <Text sx={textFontSize}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Laborum, incidunt cupiditate, ipsa magni
                            corporis, dolorem porro magnam harum unde iste nisi
                            architecto iusto minima. Labore vel iure nihil alias
                            ducimus inventore voluptate in cupiditate? Aut
                            similique tenetur, cum numquam error repudiandae
                            voluptate debitis praesentium velit! Dolorem
                            voluptatibus facere itaque, soluta sunt modi,
                            impedit minima dolor quidem necessitatibus fuga.
                            Sint exercitationem odio repudiandae placeat eius
                            aperiam quaerat quo animi. Maiores quasi dolorem
                            amet enim illum quia tempore, temporibus molestias
                            quisquam vitae illo omnis quaerat perspiciatis sequi
                            earum sapiente ab hic consectetur modi quae tenetur
                            incidunt repudiandae. Voluptatem error quaerat
                            praesentium vitae.
                          </Text>
                          <Text sx={textFontSize} mt={5}>
                            Project management is so important to organizations
                            and teams, but in order for it to be really
                            effective, you need to make sure you&apos;re
                            correctly mapping your project management
                            methodology to your team type, project,
                            organization, and goals.
                          </Text>
                        </Box>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </Box>
            </Grid>
          </Flex>
          <Divider
            orientation="vertical"
            variant={"solid"}
            borderWidth={"1px"}
          />
          <Flex flex={2} flexDirection={"column"} p={".5rem"} rowGap={6}>
            <Flex flexDirection={"column"} rowGap={3}>
              <Heading fontSize={{ base: "md", md: "lg" }} pl={4}>
                About the Course
              </Heading>
              <Grid rowGap={3}>
                <Accordion borderRadius={4}>
                  <AccordionItem
                    borderRadius={4}
                    border={"none"}
                    paddingInline={5}
                  >
                    <h2>
                      <AccordionButton borderRadius={4}>
                        <Box as="span" flex="1" textAlign="left">
                          <Wrap>
                            <WrapItem
                              display={"flex"}
                              alignItems={"center"}
                              columnGap={5}
                            >
                              <Avatar
                                name="John Breaker"
                                src="https://bit.ly/dan-abramov"
                              />
                              <Box display={"grid"}>
                                <Text sx={textFontSize}>{course.author}</Text>
                                <Text sx={textFontSize}>PM Expert</Text>
                              </Box>
                            </WrapItem>
                          </Wrap>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>
                <Box paddingInline={6}>
                  <Text paddingInline={4} sx={textFontSize}>
                    This course is designed to help you for your practical day
                    to day project management, to improve your project
                    management knowledge
                  </Text>
                </Box>
              </Grid>
            </Flex>
            <Divider
              variant={"solid"}
              borderWidth={"1px"}
              width={"80%"}
              alignSelf={"center"}
            />
            <Flex flexDirection={"column"} rowGap={5} overflow={"hidden"}>
              <Heading fontSize={{ base: "md", md: "lg" }} pl={4}>
                Course Completion
              </Heading>
              <Box
                h={{ base: "300px", lg: "100%" }}
                w={"100%"}
                paddingInline={3}
                overflowY={"scroll"}
              >
                <Accordion allowToggle display={"grid"}>
                  {course?.courseIndex?.map((courseDetails, index) => (
                    <AccordionItem key={index} borderRadius={4}>
                      <h2>
                        <AccordionButton
                          h={"4rem"}
                          borderRadius={4}
                          display={"flex"}
                          columnGap={3}
                        >
                          <Checkbox id={`checkbox${index}`} />
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={{ base: ".9rem" }}
                            h={"fit-content"}
                          >
                            {`Section ${index + 1} - ${
                              courseDetails.sectionName
                            }`}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {courseDetails.chapterNames.map((lecture, idx) => (
                          <Link
                            key={idx}
                            href={`?${new URLSearchParams({
                              section: String(index + 1),
                              lecture: String(idx + 1),
                            })}`}
                          >
                            <AccordionButton display={"flex"} columnGap={3}>
                              <MdOndemandVideo size={25} />
                              <Text sx={textFontSize} textAlign={"start"}>
                                {lecture}
                              </Text>
                            </AccordionButton>
                          </Link>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Heading>{`No Course Fount With Id: ${courseId}`}</Heading>
      )}
    </Box>
  );
};

export default ParticularCourseLayout;
