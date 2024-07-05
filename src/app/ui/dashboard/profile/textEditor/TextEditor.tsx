"use client";
import Tiptap from "@/app/ui/TiptapTextEditor/Tiptap";
import { FormControl, FormLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const TextEditor = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      description: "",
    },
  });
  const [content, setContent] = useState<string>("type here...");
  const handleContentChange = (reason: any) => {
    setContent(reason.content);
  };
  return (
    <form>
      <FormControl>
        <FormLabel size={"sm"} color={"#364A63"}>
          Bio
        </FormLabel>
      </FormControl>
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default TextEditor;
