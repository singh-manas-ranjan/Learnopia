"use client";
import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  textDecoration,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FaHandsClapping } from "react-icons/fa6";
import HamMenu from "../sidebar/hamMenu/HamMenu";

const nav = {
  bg: "#fff",
  height: "5rem",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: "1rem",
};

const button = {
  bg: "none",
  border: "none",
  display: "flex",
  maxWidth: "fit-content",
  outline: "none",
  _hover: { bg: "#EFF8FF" },
};

const profile = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: ".5rem",
  padding: ".3rem",
  color: "#044F63",
};

const notificationContainer = {
  justifyContent: "center",
  alignItems: "center",
};

const link = {
  padding: ".3rem",
  textAlign: "center",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: ".5rem",
  _hover: { bg: "#EFF8FF" },
};

const rightNav = {
  alignItems: "center",
};

const Navbar = () => {
  const [minWidth600] = useMediaQuery("(min-width: 600px)");
  return (
    <Flex sx={nav}>
      <Text display={{ base: "none", md: "flex" }} color={"#044F63"}>
        Welcome Back{" "}
        <FaHandsClapping color="orange" style={{ marginLeft: ".5rem" }} />{" "}
      </Text>
      <Box display={{ md: "none" }}>
        <HamMenu />
      </Box>
      <Flex sx={rightNav}>
        <Menu>
          <Flex sx={notificationContainer}>
            <IoIosNotifications
              size={25}
              color="orange"
              style={{ marginRight: ".8rem", cursor: "pointer" }}
            />
          </Flex>
          <MenuButton as={Button} sx={button}>
            <Box sx={profile}>
              <Image
                src={"/user.jpeg"}
                width={30}
                height={30}
                alt="user"
                style={{ borderRadius: "50%" }}
              />{" "}
              {minWidth600 && <Text>example@user.in</Text>}
            </Box>
          </MenuButton>
          <MenuList
            style={{
              padding: "0",
            }}
          >
            <MenuItem
              style={{
                padding: "0",
              }}
            >
              <Link
                href={"/"}
                style={{ textDecoration: "none" }}
                textAlign={"center"}
                sx={link}
              >
                <TbLogout2 />
                Logout
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
