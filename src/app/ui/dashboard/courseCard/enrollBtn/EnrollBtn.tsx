"use client";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  courseId: string;
}

const EnrollBtn = ({ courseId }: Props) => {
  const [isEnrolled, setEnrolled] = useState(false);

  const handleButtonClick = () => {
    setEnrolled(!isEnrolled);
  };
  return (
    <Button
      colorScheme="teal"
      isDisabled={isEnrolled}
      onClick={() => {
        handleButtonClick();
      }}
    >
      {isEnrolled ? "Enrolled!" : "Enroll Now!"}
    </Button>
  );
};

export default EnrollBtn;
