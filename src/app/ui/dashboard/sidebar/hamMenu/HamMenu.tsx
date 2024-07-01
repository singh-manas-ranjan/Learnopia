import { Button } from "@chakra-ui/react";
import { IoMenu, IoClose } from "react-icons/io5";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import {
  onMouseEnter,
  openMenuClick,
} from "@/lib/features/sideBar/sideBarSlice";

const HamMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const isOpen = useAppSelector((state) => state.sideBar.isOpen);
  const dispatch = useAppDispatch();
  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(openMenuClick(!isOpen));
  };
  return (
    <Button
      width={"fit-content"}
      bg={"#EFF8FF"}
      color={"#044F63"}
      _hover={{ color: "#0275d8", bg: "#e2f2f6" }}
      onClick={handleMenuClick}
      mb={"1rem"}
    >
      {isMenuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
    </Button>
  );
};

export default HamMenu;
