import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const main = {
  width: "100%",
  height: "100vh",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const AdminStudents = () => {
  return (
    <Box as="main" sx={main}>
      <Heading>Admin Students</Heading>
    </Box>
  );
};

export default AdminStudents;
