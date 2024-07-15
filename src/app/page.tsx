"use client";
import { MdStart } from "react-icons/md";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import LoginModal from "./ui/auth/loginModal/LoginModal";

export default function Page() {
  const mainStyle = {
    w: "100vw",
    h: "100vh",
  };

  const navStyle = {
    w: "100%",
    paddingInline: "2rem",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const btnStyle = {
    bgColor: "#044F63",
    color: "#fff",
    _hover: { bg: "#55c2da" },
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 2,
  };

  return (
    <Box
      as="main"
      sx={mainStyle}
      bgImage={{ base: "url('/bgImg1.jpg')" }}
      backgroundSize={"cover"}
      backgroundPosition={{ base: "center" }}
      backgroundRepeat={"no-repeat"}
    >
      <Flex as="nav" sx={navStyle} boxShadow={"0 2px 2px -2px gray"}>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight={"bold"}
          padding={"1rem"}
          color={"#044F63"}
        >
          Learnopia
        </Text>
      </Flex>
      <VStack
        position={"absolute"}
        top={{ base: "10%", sm: "20%" }}
        left={"5%"}
        p={"1rem"}
        spacing={5}
        width={{ base: "90%", sm: "60%", md: "42%", xl: "32%" }}
        alignItems={"left"}
        color={"#044F63"}
      >
        <Heading as={"h1"} fontSize={{ base: "xl", md: "2xl" }} width={"100%"}>
          Unleashing The Power of <Text as={"u"}>Learning</Text> Potential
        </Heading>
        <Heading
          as={"h3"}
          fontSize={{ base: "md", lg: "xl" }}
          lineHeight={{ md: "1.8rem" }}
        >
          Ignite your passion for learning, explore limitless possibilities, and
          shape your educational destiny with our innovative and student-centric
          online platform.
        </Heading>
        <HStack spacing={5}>
          <LoginModal />
          <Button
            as={"a"}
            href="/register"
            sx={btnStyle}
            size={{ base: "sm", md: "md" }}
          >
            Register <MdStart size={20} />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
