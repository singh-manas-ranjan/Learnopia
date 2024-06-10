import { Button } from "@chakra-ui/react";
import { IoMenu, IoClose } from "react-icons/io5";
import React from "react";

interface Props {
  handleClickMenu: () => void;
  isMenuOpen: boolean;
}

const HamMenu = ({ handleClickMenu, isMenuOpen }: Props) => {
  return (
    <Button
      onClick={() => handleClickMenu()}
      bg={"#EFF8FF"}
      color={"#044F63"}
      _hover={{ color: "#0275d8", bg: "#e2f2f6" }}
    >
      {isMenuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
    </Button>
  );
};

export default HamMenu;