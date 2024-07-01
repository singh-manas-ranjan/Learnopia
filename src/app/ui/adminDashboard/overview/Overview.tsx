"use client";
import {
  Box,
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  SimpleGrid,
  Flex,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { LuView } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { TbFriends } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useMediaQuery } from "@chakra-ui/react";
import OverviewMiddleCards from "./middleCards/OverviewMiddleCards";
import OverviewBottomCards from "./bottomCards/OverviewBottomCards";

type TSummary = {
  title: string;
  stats: string;
  icon: string;
};
const summary: TSummary[] = [
  { title: "Courses view", stats: "1.5k", icon: "views" },
  { title: "Total learning hours", stats: "2.8k", icon: "totalHours" },
  // { title: "Instructors enrol", stats: "10", icon: "totalInstructors" },
  { title: "Students enrol", stats: "258", icon: "totalStudents" },
  { title: "Tasks completed", stats: "120", icon: "tasksCompleted" },
  { title: "Tasks due", stats: "12", icon: "tasksDue" },
];

const getIcon = (iconName: string): JSX.Element | null => {
  switch (iconName) {
    case "totalHours":
      return <LuClock color="#8D94A3" />;
    case "totalStudents":
      return <TbFriends color="#8D94A3" />;
    case "tasksCompleted":
      return <FaRegCircleCheck color="#8D94A3" />;
    case "tasksDue":
      return <MdOutlineErrorOutline color="#8D94A3" />;
    case "views":
      return <LuView color="#8D94A3" />;
    case "totalInstructors":
      return <FaChalkboardTeacher color="#8D94A3" />;
    default:
      return null;
  }
};

const tabsBtn = {
  bg: "#ffffff",
  _selected: { bg: "#E2F2F6", color: "blue.500" },
};

const tabList = {
  display: "flex",
  columnGap: "0.5px",
  bg: "#EFEFEF",
};

const Overview = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Flex justifyContent={"space-between"} p={".5rem"} alignItems={"center"}>
        <Heading size={{ base: "sm", sm: "md" }} pl={".5rem"}>
          Overview
        </Heading>
        <Flex>
          <Tabs
            variant="unstyled"
            align="end"
            size={"sm"}
            h={"fit-content"}
            border={".01rem solid #EFEFEF"}
            outline={"none"}
          >
            <TabList sx={tabList}>
              <Tab sx={tabsBtn}>{isMobile ? "W" : "Week"}</Tab>
              <Tab sx={tabsBtn}>{isMobile ? "M" : "Month"}</Tab>
              <Tab sx={tabsBtn}>{isMobile ? "Q" : "Quarter"}</Tab>
              <Tab sx={tabsBtn}>{isMobile ? "Y" : "Year"}</Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        overflowY={"scroll"}
        rowGap={3}
      >
        <Box
          w={"100%"}
          h={{ base: "150px", md: "fit-content" }}
          overflowY={{ base: "scroll", md: "unset" }}
        >
          <SimpleGrid
            padding={2}
            spacing={4}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            templateRows={{ base: "115px", sm: "120px", md: "auto" }}
          >
            {summary.map((card, idx) => (
              <Card
                key={idx}
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
              >
                <CardHeader
                  display={{ base: "flex", lg: "table-column" }}
                  justifyContent={{ base: "space-between" }}
                  alignItems={{ base: "center", sm: "baseline" }}
                >
                  <Heading size="md">{getIcon(card.icon)}</Heading>
                  <Heading
                    size={{ base: "md", lg: "lg" }}
                    color={"#2D2F31"}
                    marginTop={{ md: "10px" }}
                  >
                    {card.stats}
                  </Heading>
                </CardHeader>
                <CardBody
                  display={"flex"}
                  flexDirection={"column"}
                  rowGap={2}
                  paddingTop={0}
                >
                  <Text
                    color={"#8D94A3"}
                    fontSize={{ base: ".8rem", sm: "md" }}
                  >
                    {card.title}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
        <OverviewMiddleCards />
        <OverviewBottomCards />
      </Box>
    </>
  );
};

export default Overview;
