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
  useMediaQuery,
  List,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FaHandsClapping } from "react-icons/fa6";
import HamMenu from "../sidebar/hamMenu/HamMenu";
import { useAppSelector } from "@/app/hooks/reduxHooks";
import sidebarLinks, { NavLinkType } from "../../../../../public/sidebarLinks";
import { getIcon } from "../sidebar/sideLinks/SideLink";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import styles from "./Navbar.module.css";

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

interface sideBarLinks {
  [key: string]: NavLinkType[];
}

const navLinks: sideBarLinks = sidebarLinks;

const Navbar = () => {
  const pathname = usePathname();
  const [minWidth600] = useMediaQuery("(min-width: 600px)");
  const [maxWidth481] = useMediaQuery("(max-width: 481px)");
  const isMenuOpen = useAppSelector((state) => state.sideBar.isOpen);
  return (
    <Flex sx={nav} position={"relative"}>
      <Text display={{ base: "none", sm: "flex" }} color={"#044F63"}>
        Welcome Back{" "}
        <FaHandsClapping color="orange" style={{ marginLeft: ".5rem" }} />{" "}
      </Text>
      <Box display={{ md: "none" }}>
        {maxWidth481 && <HamMenu isMenuOpen={isMenuOpen} />}
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
      {maxWidth481 && (
        <Box
          position={"absolute"}
          top={"120%"}
          zIndex={"9"}
          bg={"#ffffff"}
          padding={"1rem"}
          className={isMenuOpen ? styles.open : styles.close}
          display={"flex"}
          flexDirection={"column"}
          rowGap={".6rem"}
          boxShadow={"5px 0 3px -3px #00000030"}
        >
          {Object.keys(navLinks).map((key, idx) => (
            <List
              key={idx}
              display={"flex"}
              flexDirection={"column"}
              rowGap={2.5}
            >
              {navLinks[key].map((sideLink, idx) => (
                <ListItem key={idx}>
                  <NextLink
                    href={sideLink.link}
                    className={
                      pathname === sideLink.link
                        ? [styles.link, styles.active].join(" ")
                        : styles.link
                    }
                  >
                    <Box>{getIcon(sideLink.icon)}</Box>
                    <Box fontSize={"sm"} width={"100%"}>
                      {sideLink.name}
                    </Box>
                  </NextLink>
                </ListItem>
              ))}
            </List>
          ))}
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
