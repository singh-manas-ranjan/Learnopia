import RegisterForm from "@/app/ui/auth/register/RegisterForm";
import { Grid, Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const container = {
  w: "100%",
  h: "100vh",
};

const formContainer = {
  padding: "2rem",
  bg: "#EFF8FF",
  borderRadius: "4px",
};
const Register = () => {
  return (
    <Grid as={"main"} sx={container} placeItems={"center"}>
      <VStack spacing={5}>
        <Heading>Register</Heading>
        <Box sx={formContainer}>
          <RegisterForm />
        </Box>
      </VStack>
    </Grid>
  );
};

export default Register;
