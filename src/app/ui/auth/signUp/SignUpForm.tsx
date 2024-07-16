"use client";
import {
  Box,
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
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

type Props = {
  role: "ADMIN" | "INSTRUCTOR" | "STUDENT";
  onClose: () => void;
};

const SignUpForm = ({ role, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>();

  const router = useRouter();
  const toast = useToast();

  const onSubmit = (e: FormData) => {
    onClose();
    toast({
      title: "Account created Successfully",
      description: "We've created your account for you.",
      status: "success",
      duration: 4000,
      position: "top",
      isClosable: true,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        columnGap={5}
        rowGap={5}
        alignItems={"center"}
      >
        <FormControl>
          <FormLabel htmlFor="firstName" sx={formLabel}>
            First Name
          </FormLabel>
          <Input
            key={role}
            {...register("firstName", {
              required: { value: true, message: "first name is required" },
              minLength: { value: 3, message: "at least 3 character long." },
            })}
            type="text"
            sx={inputField}
            size={{ base: "sm", lg: "md" }}
            placeholder="First Name"
          />
          <Text sx={errorMsg}>{errors.firstName?.message}</Text>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastName" sx={formLabel}>
            Last Name
          </FormLabel>
          <Input
            key={role}
            {...register("lastName", {
              required: { value: true, message: "last name is required" },
              minLength: { value: 3, message: "at least 3 character long." },
            })}
            placeholder="Last Name"
            type="text"
            sx={inputField}
            size={{ base: "sm", lg: "md" }}
          />
          <Text sx={errorMsg}>{errors.lastName?.message}</Text>
        </FormControl>
      </Box>
      <FormControl mt={5}>
        <FormLabel htmlFor="email" sx={formLabel}>
          Email
        </FormLabel>
        <Input
          key={role}
          {...register("email", {
            required: { value: true, message: "email is required." },
            pattern: {
              value: /\b[a-z0-9._%+-]+@(?:gmail\.com|outlook\.com)\b/,
              message: "Only accepts Gmail & Outlook",
            },
          })}
          type="text"
          size={{ base: "sm", lg: "md" }}
          sx={inputField}
          placeholder="example@email.com"
        />
        <Text sx={errorMsg}>{errors.email?.message}</Text>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel htmlFor="password" sx={formLabel}>
          Password
        </FormLabel>
        <Input
          key={role}
          {...register("password", {
            required: { value: true, message: "password is required" },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
              message: "min=8 character & pattern=Testing193! ",
            },
          })}
          type="password"
          size={{ base: "sm", lg: "md" }}
          placeholder="Password"
          sx={inputField}
        />
        <Text sx={errorMsg}>{errors.password?.message}</Text>
      </FormControl>
      {/* <FormControl mt={5}>
        <FormLabel htmlFor="gender" sx={formLabel}>
          Gender
        </FormLabel>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioGroup
              key={role}
              onChange={field.onChange}
              value={field.value}
              name={field.name}
              size={{ base: "sm", lg: "md" }}
            >
              <Stack direction="row" spacing={5}>
                <Radio value="M">Male</Radio>
                <Radio value="F">Female</Radio>
                <Radio value="O">Other</Radio>
              </Stack>
            </RadioGroup>
          )}
        />
      </FormControl> */}
      {/* <FormControl mt={5} fontSize={{ base: "sm", lg: "md" }}>
        <Text>
          Already have account ?{" "}
          <Link href={"/login"} style={{ color: "#0275d8" }}>
            Sign in
          </Link>
        </Text>
      </FormControl> */}
      <FormControl>
        <Stack direction={"row"} spacing={5}>
          <Button
            mt={5}
            type="submit"
            onSubmit={handleSubmit(onSubmit)}
            colorScheme="blue"
            size={{ base: "sm", lg: "md" }}
          >
            Register
          </Button>
          <Button
            mt={5}
            type="reset"
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

export default SignUpForm;
