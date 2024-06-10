"use client";
import React, { useState } from "react";
import sidebarLinks, { NavLinkType } from "../../../../../public/sidebarLinks";
import {
  Box,
  grid,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import SideLink from "./sideLinks/SideLink";
import HamMenu from "./hamMenu/HamMenu";
interface sideBarLinks {
  [key: string]: NavLinkType[];
}

const navLinks: sideBarLinks = sidebarLinks;

const logo = {
  fontSize: "xx-large",
  fontWeight: "bold",
  color: "#044F63",
};

const collapsedLogo = {
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  w: "50px",
  h: "50px",
  bg: "#EFF8FF",
};

const sideLinkContainer = {
  display: "flex",
  flexDirection: "column",
  rowGap: "2rem",
  padding: "1rem",
  height: "100vh",
  borderRadius: "8px",
  color: "#242424",
  bg: "white",
};

const navLinksContainer = {
  display: "grid",
  rowGap: "1rem",
};

const sectionContainer = {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
};

// const sectionHeading = {
//   fontWeight: "bold",
//   fontSize: "1.2rem",
// };

const list = {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
};

const listItems = {
  display: "flex",
  alignItems: "center",
  borderRadius: ".3rem",
  border: "none",
  color: "black",
};

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box sx={sideLinkContainer}>
      <Box sx={menuOpen ? "" : collapsedLogo}>
        {menuOpen ? (
          <Heading sx={logo} display={"flex"} justifyContent={"center"}>
            Learnopia
          </Heading>
        ) : (
          <Heading sx={logo}>L</Heading>
        )}
      </Box>
      <Box>
        <HamMenu handleClickMenu={handleMenuClick} isMenuOpen={menuOpen} />
      </Box>
      <Box sx={navLinksContainer}>
        {Object.keys(navLinks).map((key, idx) => (
          <Box key={idx} sx={sectionContainer}>
            {/* {menuOpen && (
              <Text sx={sectionHeading}>{key.replace("_", " ")}</Text>
            )} */}
            <List sx={list}>
              {navLinks[key].map((sideLink, idx) => (
                <ListItem key={idx} sx={listItems}>
                  <SideLink sideLink={sideLink} isOpen={menuOpen} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
