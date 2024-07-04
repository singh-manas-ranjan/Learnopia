import EditPersonalInfo from "@/app/ui/dashboard/profile/editPersonalInfo/EditPersonalInfo";
import UploadProfilePicBtn from "@/app/ui/dashboard/profile/UploadProfilePicBtn";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiVercel } from "react-icons/si";

export type TStudentsInfo = {
  [key: string]: string;
};

const studentInfo: TStudentsInfo = {
  "First Name": "Manas",
  "Last Name": "Singh",
  Email: "manassingh900@gmail.com",
  Phone: "+91 7859648565",
  Address: "Koramangla, Bengaluru, KA",
};

const main = {
  width: "100%",
  height: "100vh",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // bg: "yellow",
  padding: "1rem",
};
const Profile = () => {
  return (
    <Box as="main" sx={main}>
      <Box
        width={"100%"}
        h={"100%"}
        // bg={"green"}
        borderRadius={"6px"}
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        columnGap={{ md: 4 }}
      >
        <Box
          flex={2}
          //  bg={"blue"}
          borderRadius={6}
          w={"100%"}
          h={"100%"}
        >
          <Box
            p={".3rem"}
            // bg={"cyan"}
            width={"100%"}
            h={"100%"}
            display={"flex"}
            flexDir={{ base: "column", md: "column" }}
            borderRadius={6}
          >
            <Box
              flex={{ base: 1 }}
              // bg={"tomato"}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              rowGap={3}
              borderRadius={6}
              p={".9rem"}
              boxShadow={
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
              }
            >
              <Box
                // bg={"lightblue"}
                borderRadius={"50%"}
                w={"100px"}
                h={"100px"}
                display={"grid"}
                placeItems={"center"}
                position={"relative"}
              >
                <Image
                  priority
                  alt="profile-pic"
                  src={"/profilePic.jpeg"}
                  width={"100"}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    boxShadow:
                      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                  }}
                />
                <UploadProfilePicBtn />
              </Box>
              <Grid textAlign={"center"} rowGap={2}>
                <Heading fontSize={{ base: "sm", lg: "md" }}>
                  Manas Ranjan Singh
                </Heading>
                <Heading fontSize={{ base: ".8rem", lg: "sm" }}>
                  {" "}
                  Std.ID: <span>3636</span>{" "}
                </Heading>
                <Heading fontSize={{ base: ".8rem", lg: "sm" }}>
                  Post Graduate
                </Heading>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box
          flex={{ md: 4, lg: 6, xl: 8 }}
          // bg={"indigo"}
          p={".3rem"}
          width={"100%"}
          h={"100%"}
        >
          <Tabs
            borderRadius={6}
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            padding={"1rem"}
            h={"100%"}
            w={"100%"}
          >
            <TabList>
              <Tab fontSize={{ base: ".8rem", sm: "md" }}>Profile</Tab>
              <Tab fontSize={{ base: ".8rem", sm: "md" }}>Password</Tab>
              <Tab fontSize={{ base: ".8rem", sm: "md" }}>Social Profile</Tab>
            </TabList>

            <TabPanels w={"100%"}>
              <TabPanel paddingInline={0} w={"100%"} h={"100%"}>
                <Box
                  borderRadius={6}
                  display={"flex"}
                  flexDir={"column"}
                  rowGap={3}
                  w={"100%"}
                  h={"100%"}
                >
                  <Box
                    flex={1.3}
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
                      p={{ base: "1rem" }}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                        h={"fit-content"}
                      >
                        <Heading fontSize={{ base: "md", lg: "lg" }}>
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
                    height={"40%"}
                  ></Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <form>
                  <FormControl mt={5}>
                    <InputGroup size="sm" columnGap={3}>
                      <Box display={"flex"} columnGap={5} alignItems={"center"}>
                        <FaGithub size={20} />
                        <Text>Github</Text>
                      </Box>
                      <InputLeftAddon>https://</InputLeftAddon>
                      <Input placeholder="Github" />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </FormControl>
                  <FormControl mt={10}>
                    <InputGroup size="sm" columnGap={3}>
                      <Box display={"flex"} columnGap={5} alignItems={"center"}>
                        <SiVercel size={20} />
                        <Text>Vercel</Text>
                      </Box>
                      <InputLeftAddon>https://</InputLeftAddon>
                      <Input placeholder="Vercel" />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </FormControl>
                  <FormControl mt={10}>
                    <InputGroup size="sm" columnGap={3}>
                      <Box display={"flex"} columnGap={5} alignItems={"center"}>
                        <FaFacebook size={20} />
                        <Text>Facebook</Text>
                      </Box>
                      <InputLeftAddon>https://</InputLeftAddon>
                      <Input placeholder="Facebook" />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </FormControl>
                  <FormControl mt={10}>
                    <InputGroup size="sm" columnGap={3}>
                      <Box display={"flex"} columnGap={5} alignItems={"center"}>
                        <FaTwitter size={20} />
                        <Text>Twitter</Text>
                      </Box>
                      <InputLeftAddon>https://</InputLeftAddon>
                      <Input placeholder="Twitter" />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </FormControl>
                  <FormControl mt={10}>
                    <InputGroup size="sm" columnGap={3}>
                      <Box display={"flex"} columnGap={5} alignItems={"center"}>
                        <FaLinkedin size={20} />
                        <Text>Linkedin</Text>
                      </Box>
                      <InputLeftAddon>https://</InputLeftAddon>
                      <Input placeholder="Linkedin" />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </FormControl>
                  <FormControl mt={10}>
                    <InputGroup size="sm">
                      <Box display={"flex"} columnGap={5} alignItems={"center"}>
                        <CgWebsite size={20} />
                        <Text>Website</Text>
                      </Box>
                      <InputLeftAddon>https://</InputLeftAddon>
                      <Input placeholder="Website" />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </FormControl>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
