"use client";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
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

type TAuth = {
  role: "ADMIN" | "INSTRUCTOR" | "STUDENT";
  successPath: string;
};

type Props = {
  access: TAuth;
};

const LoginForm = ({ access: { role, successPath } }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const router = useRouter();
  const onSubmit = (e: FormType) => {
    router.push(successPath);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="username" fontSize={{ base: "sm", lg: "md" }}>
          Username
        </FormLabel>
        <Input
          {...register("username", {
            required: { value: true, message: "username is required." },
          })}
          type="text"
          id="username"
          name="username"
          sx={inputField}
          size={{ base: "sm", lg: "md" }}
          placeholder="username"
        />
        <Text sx={errorMsg}>{errors.username?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="password" fontSize={{ base: "sm", lg: "md" }}>
          Password
        </FormLabel>
        <Input
          {...register("password", {
            required: { value: true, message: "password is required" },
          })}
          type="password"
          name="password"
          id="password"
          sx={inputField}
          size={{ base: "sm", lg: "md" }}
          placeholder="password"
        />
        <Text sx={errorMsg}>{errors.password?.message}</Text>
      </FormControl>
      <FormControl mt={5} fontSize={{ base: "sm", lg: "md" }}>
        <Text>
          Not registered ?{" "}
          <Link href={"/register"} style={{ color: "#0275d8" }}>
            Register
          </Link>
        </Text>
      </FormControl>
      <FormControl>
        <Button
          type="submit"
          mt={5}
          onSubmit={handleSubmit(onSubmit)}
          colorScheme="teal"
          size={{ base: "sm", lg: "md" }}
        >
          Sign in
        </Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
