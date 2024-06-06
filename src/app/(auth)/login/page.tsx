import LoginForm from "@/app/ui/auth/login/LoginForm";
import { Box, Grid } from "@chakra-ui/react";
import React from "react";

const container = {
  w: "100%",
  h: "100vh",
};
const Login = () => {
  return (
    <Grid as={"main"} sx={container} placeItems={"center"}>
      <Box padding={"2rem"} bg={"#EFF8FF"} borderRadius={"4px"}>
        <LoginForm />
      </Box>
    </Grid>
  );
};

export default Login;
