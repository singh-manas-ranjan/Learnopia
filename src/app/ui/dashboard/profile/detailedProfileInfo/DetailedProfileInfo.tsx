import {
  Text,
  Box,
  Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import socialLinksData from "../../../../../../public/socialLinksData";
import studentInfo from "../../../../../../public/studentInfo";
import EditPersonalInfo from "../editPersonalInfo/EditPersonalInfo";
import ResetPassword from "../resetPassword/ResetPassword";
import SocialLinks from "../socialLinks/SocialLinks";
import TextEditor from "../textEditor/TextEditor";

const DetailedProfileInfo = () => {
  return (
    <Tabs w={"100%"} h={"100%"}>
      <TabList color={"#364A63"}>
        <Tab p={3} fontSize={{ base: "sm", lg: "1rem" }}>
          Profile
        </Tab>
        <Tab p={3} fontSize={{ base: "sm", lg: "1rem" }}>
          Password
        </Tab>
        <Tab p={3} fontSize={{ base: "sm", lg: "1rem" }}>
          Social Links
        </Tab>
      </TabList>
      <TabPanels
        h={{ base: "100%" }}
        overflowY={{ base: "scroll" }}
        paddingBlock={".1rem"}
      >
        <TabPanel p={0} paddingBlock={1} mt={5} overflowY={"scroll"}>
          <Box
            borderRadius={6}
            display={"flex"}
            flexDir={"column"}
            rowGap={3}
            w={"100%"}
            h={"100%"}
            paddingInline={".1rem"}
          >
            <Box
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              borderRadius={6}
              width={"100%"}
            >
              <Flex
                flexDir={"column"}
                width={"100%"}
                height={"100%"}
                p={{ base: ".9rem" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                  h={"fit-content"}
                >
                  <Heading
                    fontSize={{ base: "md", lg: "lg" }}
                    color={"#364A63"}
                  >
                    Personal Information
                  </Heading>
                  <EditPersonalInfo />
                </Box>
                <Divider marginBlock={2} orientation="horizontal" />
                <Flex
                  // bg={"red"}
                  flexDir={"column"}
                  width={{ base: "100%" }}
                  h={"100%"}
                  justifyContent={"space-between"}
                  rowGap={2}
                  ml={{ md: ".8rem" }}
                >
                  {Object.keys(studentInfo).map((key, idx) => (
                    <Box
                      key={idx}
                      display={"flex"}
                      width={"100%"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Heading
                        fontSize={{ base: ".8rem", sm: "sm", lg: "md" }}
                        width={{ base: "30%", lg: "20%" }}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        color={"#364A63"}
                      >
                        {`${key} `} <span>:</span>
                      </Heading>
                      <Text
                        fontSize={{
                          base: ".7rem",
                          sm: ".8rem",
                          lg: "md",
                        }}
                        width={{ base: "65%", lg: "70%" }}
                        display={"flex"}
                        alignItems={"center"}
                        color={"#364A63"}
                      >
                        {studentInfo[key]}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Box>
            <Box
              borderRadius={6}
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
              p={"1rem"}
              display={"flex"}
              flexDir={"column"}
              width={"100%"}
              h={"100%"}
            >
              <TextEditor />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel>
          <ResetPassword />
        </TabPanel>
        <TabPanel>
          <Box h={"100%"}>
            <SocialLinks socialLinks={socialLinksData} />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DetailedProfileInfo;
