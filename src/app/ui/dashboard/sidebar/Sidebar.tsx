import React from "react";
import sidebarLinks from "../../../../../public/sidebarLinks";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { MdPlayLesson } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import styles from "./Sidbar.module.css";

interface NavLinkType {
  name: string;
  icon: string;
  link: string;
}

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

const getIcon = (iconName: string): JSX.Element | null => {
  switch (iconName) {
    case "dashboard":
      return <MdSpaceDashboard />;
    case "training":
      return <FaTools />;
    case "exams":
      return <PiExamFill />;
    case "lessons":
      return <MdPlayLesson />;
    case "card":
      return <FaRegCreditCard />;
    case "progress":
      return <GiProgression />;
    case "profile":
      return <ImProfile />;
    case "settings":
      return <IoMdSettings />;
    default:
      return null;
  }
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
              {navLinks[key].map((items, idx) => (
                <ListItem key={idx} sx={listItems}>
                  <Link href={items.link} className={styles.link}>
                    {getIcon(items.icon)}
                    {items.name}
                  </Link>
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
