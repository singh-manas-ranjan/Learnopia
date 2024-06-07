"use client";
import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
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

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();
  const onSubmit = (e: FormData) => {
    router.push("/login");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <Input
          {...register("firstName", {
            required: { value: true, message: "first name is required" },
            minLength: { value: 3, message: "at least 3 character long." },
          })}
          id="firstName"
          name="firstName"
          type="text"
          sx={inputField}
        />
        <Text sx={errorMsg}>{errors.firstName?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <Input
          {...register("lastName", {
            required: { value: true, message: "last name is required" },
            minLength: { value: 3, message: "at least 3 character long." },
          })}
          id="lastName"
          name="lastName"
          type="text"
          sx={inputField}
        />
        <Text sx={errorMsg}>{errors.lastName?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          {...register("email", {
            required: { value: true, message: "email is required." },
            pattern: {
              value: /\b[a-z0-9._%+-]+@(?:gmail\.com|outlook\.com)\b/,
              message: "Only accepts Gmail & Outlook",
            },
          })}
          type="text"
          name="email"
          id="email"
          sx={inputField}
        />
        <Text sx={errorMsg}>{errors.email?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          {...register("password", {
            required: { value: true, message: "password is required" },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
              message: "min=8 character & pattern=Testing193! ",
            },
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
          Already have account ?{" "}
          <Link href={"/login"} style={{ color: "#0275d8" }}>
            Sign in
          </Link>
        </Text>
      </FormControl>
      <FormControl>
        <Button type="submit" sx={submitBtn} onSubmit={handleSubmit(onSubmit)}>
          Register
        </Button>
      </FormControl>
    </form>
  );
};

export default RegisterForm;
