import LoginForm from "@/app/ui/auth/login/LoginForm";
import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
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
const Login = () => {
  return (
    <Grid as={"main"} sx={container} placeItems={"center"}>
      <VStack spacing={5}>
        <Heading>Login</Heading>
        <Box sx={formContainer}>
          <LoginForm />
        </Box>
      </VStack>
    </Grid>
  );
};

export default Login;
