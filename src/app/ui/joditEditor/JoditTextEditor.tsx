"use client";
import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { FormControl, FormLabel, InputGroup } from "@chakra-ui/react";

const JoditTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = useMemo(
    () => ({
      readonly: false,
      toolbarAdaptive: false,
      toolbarButtonSize: "xsmall" as const,
      buttons:
        "paragraph,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,|,font,fontsize,brush,,link,|,align,undo,redo",
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      showInlineButtons: false,
      showLanguageIndicator: false,
      showPlaceholder: false,
      defaultActionOnPaste: "insert_clear_html" as const,
      beautyHTML: true,
      allowResizeX: true,
      style: { font: "12px Arial" },
      saveHeightInStorage: true,
      width: "100%",
      maxWidth: 500,
      maxHeight: 100,
    }),
    []
  );
  return (
    <form>
      <FormControl color={"#364A63"}>
        <FormLabel fontSize={{ base: "sm" }}>Bio</FormLabel>
        <InputGroup>
          <JoditEditor
            ref={editor}
            config={config}
            onChange={(newContent) => setContent(newContent)}
            value={content}
          />
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default JoditTextEditor;
