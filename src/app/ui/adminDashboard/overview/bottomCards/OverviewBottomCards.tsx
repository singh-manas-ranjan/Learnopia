import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import studentRankings from "../../../../../../public/rankingData";

const headings = ["Students enrolled", "Popular tasks", "Group progress"];
const popularTasks = [
  "Build LMS",
  "Build Weather App",
  "Build E-Commerce",
  "Create Login/Registration page",
  "Create Stopwatch using React",
  "Build LMS",
  "Build Weather App",
  "Build E-Commerce",
  "Create Login/Registration page",
  "Create Stopwatch using React",
  "Build LMS",
  "Build Weather App",
  "Build E-Commerce",
  "Create Login/Registration page",
  "Create Stopwatch using React",
];

const groups = [
  "Group 1",
  "Group 2",
  "Group 3",
  "Group 4",
  "Group 5",
  "Group 6",
];

const OverviewBottomCards = () => {
  return (
    <Box
      w={"100%"}
      h={{ base: "300", md: "fit-content" }}
      display={"grid"}
      p={".5rem"}
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr )" }}
      columnGap={5}
      overflowY={{ base: "scroll", md: "unset" }}
      rowGap={5}
    >
      {/* {headings.map((card, idx) => ( */}
      <Card
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <CardHeader
          display={{ base: "flex", lg: "table-column" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", sm: "baseline" }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={{ base: "sm", sm: "md" }}>{headings[0]}</Heading>
          </Flex>
        </CardHeader>
        <CardBody height={"fit-content"}>
          <Box h={"250px"} w={"100%"}>
            <Accordion h={"100%"} overflowY={"scroll"}>
              {studentRankings.map((student, idx) => (
                <AccordionItem key={idx}>
                  <Text>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <WrapItem>
                          <Avatar name={student.name} src={student.imageSrc} />
                          <Text
                            m={2}
                            ml={5}
                            fontSize={{ base: "sm", xl: "md" }}
                          >
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
        </CardBody>
      </Card>
      <Card
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <CardHeader
          display={{ base: "flex", lg: "table-column" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", sm: "baseline" }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={{ base: "sm", sm: "md" }}>{headings[1]}</Heading>
          </Flex>
        </CardHeader>
        <CardBody height={"fit-content"}>
          <Box h={"250px"} w={"100%"}>
            <Accordion h={"100%"} overflowY={"scroll"}>
              {popularTasks.map((task, idx) => (
                <AccordionItem key={idx}>
                  <Text>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <WrapItem>
                          <Text m={2} fontSize={{ base: "sm", xl: "md" }}>
                            {task}
                          </Text>
                        </WrapItem>
                      </Box>
                    </AccordionButton>
                  </Text>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </CardBody>
      </Card>
      <Card
        boxShadow={
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }
      >
        <CardHeader
          display={{ base: "flex", lg: "table-column" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center", sm: "baseline" }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={{ base: "sm", sm: "md" }}>{headings[2]}</Heading>
          </Flex>
        </CardHeader>
        <CardBody height={"fit-content"}>
          <Box h={"250px"} w={"100%"}>
            <Accordion h={"100%"} overflowY={"scroll"}>
              {groups.map((group, idx) => (
                <AccordionItem key={idx}>
                  <Text>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <WrapItem>
                          <Text m={2} fontSize={{ base: "sm", xl: "md" }}>
                            {group}
                          </Text>
                        </WrapItem>
                      </Box>
                    </AccordionButton>
                  </Text>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </CardBody>
      </Card>
      {/* ))} */}
    </Box>
  );
};

export default OverviewBottomCards;
