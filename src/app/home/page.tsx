import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  Grid,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Grid placeItems={"center"} h={"80vh"} width={"100%"}>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(3, 1fr)"
        width={"60%"}
        columnGap={10}
        textAlign={"center"}
      >
        <Card variant="filled">
          <CardHeader>
            <Heading size="md">Admin</Heading>
          </CardHeader>

          <CardFooter display={"grid"} alignItems={"center"}>
            <Button colorScheme="teal">Visit</Button>
          </CardFooter>
        </Card>
        <Card variant="filled">
          <CardHeader>
            <Heading size="md">Instructor</Heading>
          </CardHeader>

          <CardFooter display={"grid"} alignItems={"center"}>
            <Button colorScheme="teal">Visit</Button>
          </CardFooter>
        </Card>
        <Card variant="filled">
          <CardHeader>
            <Heading size="md">Student</Heading>
          </CardHeader>

          <CardFooter display={"grid"} alignItems={"center"}>
            <Button as={"a"} href="/dashboard" colorScheme="teal">
              Visit
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Grid>
  );
};

export default Home;
