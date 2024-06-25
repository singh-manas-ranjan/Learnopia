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
import { BsShare, BsBookmarkDash } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import coursesList from "../../../../../../public/courses";

interface Props {
  params: { courseId: string };
  children: ReactNode;
}

const ParticularCourseLayout = ({ params, children }: Props) => {
  const courseId = atob(params.courseId);
  const course = coursesList.find((course) => course.courseId === courseId);

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

  const iconContainer = {
    borderRadius: "50%",
    bgColor: "#EFF8FF",
    width: "40px",
    height: "40px",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    _hover: { color: "#ffffff", bg: "#97CAF0" },
    transition: "all .1s linear",
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
            <Grid p={".5rem"} rowGap={".5rem"} overflow={"hidden"}>
              <Flex justifyContent={"space-between"}>
                <Heading as="h1" size="lg" color={"#333"}>
                  {course.courseName}
                </Heading>
                <Flex
                  justifyContent={"center"}
                  align={"center"}
                  columnGap={8}
                  mr={5}
                >
                  <Box sx={iconContainer}>
                    <BsShare size={18} />
                  </Box>
                  <Box sx={iconContainer}>
                    <BsBookmarkDash size={18} />
                  </Box>
                </Flex>
              </Flex>
              <Text as={"h5"}>{course.author}</Text>
              <Box overflowY={"scroll"} w={"100%"} h={"100%"} mt={5}>
                <Box
                  h={"480px"}
                  w={"100%"}
                  overflow={"hidden"}
                  borderRadius={"8px"}
                >
                  <Box w={"99%"} h={"480px"}>
                    <AspectRatio w={"100%"} h={"100%"} ratio={1}>
                      {children}
                    </AspectRatio>
                  </Box>
                </Box>
                <Box mt={5} width={"100%"}>
                  <Tabs>
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
                          <Text>
                            The Google Project Management Certificate introduces
                            learners to project management fundamentals
                            including various approaches, tools and templates,
                            goal-setting, risk management, team dynamics, and
                            data-driven decision making.
                          </Text>
                          <Text mt={5}>
                            The program, created by Google employees in the
                            field, is designed to provide you with job-ready
                            skills in about 6 months to start or advance your
                            career in Project Management.
                          </Text>
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <Box w={"65%"}>
                          <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Id fugit deleniti ex tenetur quaerat ab
                            tempore, culpa incidunt? Eum, exercitationem.
                          </Text>
                          <Text mt={5}>
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
                        <Box w={"65%"}>
                          <Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nihil tempora optio repudiandae enim nemo
                            officiis sed, quis molestias odit beatae nobis,
                            ipsum repellendus laudantium sequi error mollitia
                            reprehenderit veniam amet.
                          </Text>
                          <Text mt={5}>
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
                        <Box w={"65%"}>
                          <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti, impedit! Iste tempore quos id,
                            corporis repudiandae consequatur nulla nemo sint!
                          </Text>
                          <Text mt={5}>
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
                        <Box w={"65%"}>
                          <Text>
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
                          <Text mt={5}>
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
              <Heading fontSize={"xl"} pl={4}>
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
                                <Text>{course.author}</Text>
                                <Text fontSize={"sm"}>PM Expert</Text>
                              </Box>
                            </WrapItem>
                          </Wrap>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>
                <Box paddingInline={6}>
                  <Text paddingInline={4}>
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
              <Heading fontSize={"xl"} pl={4}>
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
                          h={"50px"}
                          borderRadius={4}
                          display={"flex"}
                          columnGap={3}
                        >
                          <Checkbox id={`checkbox${index}`} />
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={"sm"}
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
                              <Text fontSize={"sm"} textAlign={"start"}>
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
