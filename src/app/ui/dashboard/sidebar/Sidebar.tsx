import React from "react";
import sidebarLinks, { NavLinkType } from "../../../../../public/sidebarLinks";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import SideLink from "./sideLinks/SideLink";
interface sideBarLinks {
  [key: string]: NavLinkType[];
}

const navLinks: sideBarLinks = sidebarLinks;

const logo = {
  fontSize: "xx-large",
  fontWeight: "bold",
  color: "#3B9ABF",
};

const sideLinkContainer = {
  display: "flex",
  flexDirection: "column",
  rowGap: "2rem",
  padding: "1rem 1rem 1rem 1.5rem",
  height: "100vh",
  borderRadius: "8px",
  color: "#242424",
  bg: "white",
};

const sectionContainer = {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
};

const sectionHeading = {
  fontWeight: "bold",
  fontSize: "1.2rem",
};

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
  return (
    <Box sx={sideLinkContainer}>
      <Text sx={logo}>Learnopia</Text>
      {Object.keys(navLinks).map((key, idx) => (
        <Box key={idx}>
          <Box sx={sectionContainer}>
            <Text sx={sectionHeading}>{key.replace("_", " ")}</Text>
            <List sx={list}>
              {navLinks[key].map((sideLink, idx) => (
                <ListItem key={idx} sx={listItems}>
                  <SideLink sideLink={sideLink} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
