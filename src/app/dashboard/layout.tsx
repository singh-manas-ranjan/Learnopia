import { Box, Container, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";

interface Props {
  children: ReactNode;
}

const DashBoardLayout = ({ children }: Props) => {
  const container = {
    w: "100%",
    h: "100vh",
    display: "flex",
    bg: "#EFF8FF",
  };

  const menuContainer = {
    // flex: "1",
    padding: "1rem",
    h: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const nav_content_container = {
    flex: "6",
    display: "flex",
    flexDirection: "column",
    h: "100vh",
    rowGap: "1rem",
    padding: "1rem 1rem 1rem 0",
  };

  return (
    <Box as="main" sx={container}>
      <Box sx={menuContainer} width={"fit-content"}>
        <Sidebar />
      </Box>
      <Box sx={nav_content_container}>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashBoardLayout;
