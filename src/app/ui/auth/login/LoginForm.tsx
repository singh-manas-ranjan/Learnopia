"use client";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

interface FormType {
  username: string;
  password: string;
}

const submitBtn = {
  mt: "4",
};

const errorMsg = {
  color: "red",
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (e: FormType) => {
    console.log(getValues);
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
          bg={"#fff"}
        />
        <Text sx={errorMsg}>{errors.username?.message}</Text>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          {...register("password", {
            required: { value: true, message: "password is required" },
          })}
          type="password"
          name="password"
          id="password"
          bg={"#fff"}
        />
        <Text sx={errorMsg}>{errors.password?.message}</Text>
      </FormControl>
      <Button
        type="submit"
        sx={submitBtn}
        bg={"#0275d8"}
        color={"#fff"}
        _hover={{ color: "#fff", bg: "#59A9FF" }}
      >
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
