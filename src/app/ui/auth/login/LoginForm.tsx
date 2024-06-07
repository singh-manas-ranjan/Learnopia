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

const submitBtn = {
  mt: "4",
  bg: "#0275d8",
  color: "#fff",
  _hover: { color: "#fff", bg: "#59A9FF" },
};

const errorMsg = {
  color: "red",
};

const inputField = {
  bg: "#fff",
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const router = useRouter();
  const onSubmit = (e: FormType) => {
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          {...register("username", {
            required: { value: true, message: "username is required." },
          })}
          type="text"
          id="username"
          name="username"
          sx={inputField}
        />
        <Text sx={errorMsg}>{errors.username?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          {...register("password", {
            required: { value: true, message: "password is required" },
          })}
          type="password"
          name="password"
          id="password"
          sx={inputField}
        />
        <Text sx={errorMsg}>{errors.password?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <Text>
          Not registered ?{" "}
          <Link href={"/register"} style={{ color: "#0275d8" }}>
            Register
          </Link>
        </Text>
      </FormControl>
      <FormControl>
        <Button type="submit" sx={submitBtn} onSubmit={handleSubmit(onSubmit)}>
          Sign in
        </Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
