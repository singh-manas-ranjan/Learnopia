"use client";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import { HiSortAscending } from "react-icons/hi";
import { orderByBtnType } from "../../../../../public/orderByBtns";

interface Props {
  button: orderByBtnType;
  handleOnChange: (option: string | string[]) => void;
  selectedOptn: string;
}

const getIcon = (btnName: string): JSX.Element | null => {
  switch (btnName) {
    case "Filter by":
      return <MdOutlineFilterAlt size={20} />;
      break;
    case "Sort by":
      return <HiSortAscending size={20} />;

    default:
      return null;
  }
};

const OrderByBtn = ({
  button: { btnName, options },
  handleOnChange,
  selectedOptn,
}: Props) => {
  return (
    <Menu closeOnSelect={true}>
      <MenuButton
        as={Button}
        colorScheme="teal"
        variant="outline"
        display={"flex"}
        alignItems={"center"}
        borderColor={"#A0AEC0"}
        // w={120}
        size={{ base: "sm", lg: "md" }}
      >
        <Text
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          columnGap={1}
        >
          {getIcon(btnName)} {btnName}
        </Text>
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup
          defaultValue="asc"
          title={btnName.toLowerCase()}
          type="radio"
          value={selectedOptn}
          onChange={(e) => handleOnChange(e)}
        >
          {options.map((optn, idx) => (
            <MenuItemOption key={idx} value={optn.split(" ")[0].toLowerCase()}>
              {optn}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default OrderByBtn;
