"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from "@chakra-ui/next-js";
import { MdStart } from "react-icons/md";
import { LiaSignInAltSolid } from "react-icons/lia";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdTitle } from "react-icons/md";

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

  const list = {
    display: "flex",
    w: "15%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlock: "1rem",
  };

  const listItem = {
    w: "100px",
    display: "grid",
    placeItems: "center",
    outline: ".1px solid black",
    p: 0,
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
      bgImage={"url('/bgImg.png')"}
      backgroundSize={"cover"}
      backgroundPosition={"top"}
      backgroundRepeat={"no-repeat"}
    >
      <Flex as="nav" sx={navStyle}>
        <Text
          fontSize={"xx-large"}
          fontWeight={"bold"}
          padding={"1rem"}
          color={"#044F63"}
        >
          Learnopia
        </Text>
      </Flex>
      <VStack
        position={"absolute"}
        top={"30%"}
        left={"5%"}
        p={"1rem"}
        spacing={5}
        width={"32%"}
        alignItems={"left"}
        color={"#044F63"}
      >
        <Heading as={"h1"} size={"xl"} width={"80%"}>
          Unleashing The Power of <Text as={"u"}>Learning</Text> Potential
        </Heading>
        <Heading as={"h3"} size={"md"} lineHeight={"1.8rem"}>
          Ignite your passion for learning, explore limitless possibilities, and
          shape your educational destiny with our innovative and student-centric
          online platform.
        </Heading>
        <HStack spacing={5}>
          <Button as={"a"} href="/login" sx={btnStyle}>
            Login <LiaSignInAltSolid size={20} />
          </Button>
          <Button as={"a"} href="/register" sx={btnStyle}>
            Register <MdStart size={20} />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
