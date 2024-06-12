"use client";
import Link from "next/link";
import React from "react";
import { NavLinkType } from "../../../../../../public/sidebarLinks";
import { usePathname } from "next/navigation";
import styles from "./SideLink.module.css";
import { Box } from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { MdPlayLesson } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { ImBooks } from "react-icons/im";

interface Props {
  sideLink: NavLinkType;
  isOpen: boolean;
}

const getIcon = (iconName: string): JSX.Element | null => {
  switch (iconName) {
    case "dashboard":
      return <MdSpaceDashboard />;
    case "courses":
      return <ImBooks />;
    case "exams":
      return <PiExamFill />;
    case "myCourses":
      return <MdPlayLesson />;
    case "card":
      return <FaRegCreditCard />;
    case "progress":
      return <GiProgression />;
    case "profile":
      return <ImProfile />;
    case "settings":
      return <IoMdSettings />;
    default:
      return null;
  }
};

const SideLink = ({ sideLink, isOpen }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={sideLink.link}
      className={
        pathname === sideLink.link
          ? [styles.link, styles.active].join(" ")
          : styles.link
      }
    >
      <Box>{getIcon(sideLink.icon)}</Box>
      {isOpen && <Box>{sideLink.name}</Box>}
    </Link>
  );
};

export default SideLink;
