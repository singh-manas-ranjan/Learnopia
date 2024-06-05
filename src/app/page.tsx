"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

export default function Page() {
  const mainStyle = {
    w: "100%",
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

  const linkStyle = {
    w: "100%",
    textAlign: "center",
    padding: ".3rem 1rem",
    _hover: { bg: "black", color: "white" },
  };
  return (
    <Box as="main" sx={mainStyle}>
      <Flex as="nav" sx={navStyle}>
        <Text fontSize={"xx-large"} fontWeight={"bold"}>
          Learnopia
        </Text>
        <List sx={list}>
          <ListItem sx={listItem}>
            <Link href={"/login"} sx={linkStyle}>
              Login
            </Link>
          </ListItem>
          <ListItem sx={listItem}>
            <Link href={"/register"} sx={linkStyle}>
              Register
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
}
