import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  Grid,
  Box,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Grid placeItems={"center"} h={"80vh"} width={"100%"}>
      <Box
        display={{ base: "grid", md: "flex" }}
        rowGap={10}
        columnGap={10}
        width={{ base: "70%", sm: "50%", md: "80%" }}
        textAlign={"center"}
      >
        <Card variant="filled" flex={1}>
          <CardHeader>
            <Heading size="md">Admin</Heading>
          </CardHeader>

          <CardFooter display={"grid"} alignItems={"center"}>
            <Button colorScheme="teal">Visit</Button>
          </CardFooter>
        </Card>
        <Card variant="filled" flex={1}>
          <CardHeader>
            <Heading size="md">Instructor</Heading>
          </CardHeader>

          <CardFooter display={"grid"} alignItems={"center"}>
            <Button colorScheme="teal">Visit</Button>
          </CardFooter>
        </Card>
        <Card variant="filled" flex={1}>
          <CardHeader>
            <Heading size="md">Student</Heading>
          </CardHeader>

          <CardFooter display={"grid"} alignItems={"center"}>
            <Button as={"a"} href="/dashboard" colorScheme="teal">
              Visit
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </Grid>
  );
};

export default Home;
