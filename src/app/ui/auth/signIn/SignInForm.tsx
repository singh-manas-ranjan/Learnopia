"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormType {
  username: string;
  password: string;
}

const errorMsg = {
  color: "red",
  fontSize: { base: "xs", lg: "sm" },
};

const inputField = {
  bg: "#fff",
  fontSize: { base: "sm" },
};

const formLabel = {
  fontSize: { base: "sm", lg: "md" },
};

type TAuth = {
  role: "ADMIN" | "INSTRUCTOR" | "STUDENT";
  successPath: string;
};

type Props = {
  access: TAuth;
};

const SignInForm = ({ access: { role, successPath } }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>();

  const router = useRouter();
  const toast = useToast();

  const showSuccessToast = async () => {
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to your dashboard.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }, 500);
  };

  const onSubmit = (e: FormType) => {
    router.push(successPath);
    showSuccessToast();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="username" sx={formLabel}>
          Username
        </FormLabel>
        <Input
          {...register("username", {
            required: { value: true, message: "username is required." },
          })}
          type="text"
          sx={inputField}
          size={{ base: "sm", lg: "md" }}
          placeholder="username"
        />
        <Text sx={errorMsg}>{errors.username?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="password" sx={formLabel}>
          Password
        </FormLabel>
        <Input
          {...register("password", {
            required: { value: true, message: "password is required" },
          })}
          type="password"
          sx={inputField}
          size={{ base: "sm", lg: "md" }}
          placeholder="password"
        />
        <Text sx={errorMsg}>{errors.password?.message}</Text>
      </FormControl>
      {/* <FormControl mt={5} fontSize={{ base: "sm", lg: "md" }}>
        <Text>
          Not registered ?{" "}
          <Link href={"/register"} style={{ color: "#0275d8" }}>
            Register
          </Link>
        </Text>
      </FormControl> */}
      <FormControl>
        <Stack direction={"row"} spacing={5}>
          <Button
            type="submit"
            mt={5}
            onSubmit={handleSubmit(onSubmit)}
            colorScheme="blue"
            size={{ base: "sm", lg: "md" }}
          >
            Sign in
          </Button>
          <Button
            type="reset"
            mt={5}
            onSubmit={() => reset}
            colorScheme="teal"
            size={{ base: "sm", lg: "md" }}
          >
            Reset
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};

export default SignInForm;
