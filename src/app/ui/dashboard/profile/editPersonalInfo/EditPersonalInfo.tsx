"use client";
import { TStudentsInfo } from "@/app/dashboard/(settings)/profile/page";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

import { BiSolidEdit } from "react-icons/bi";

interface Props {
  studentPersonalInfo: TStudentsInfo;
}
const EditPersonalInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        display={"grid"}
        placeItems={"center"}
        boxSize={10}
        borderRadius={"50%"}
        bg={"#E5E9F2"}
        _hover={{ bg: "#97CAF0" }}
      >
        <BiSolidEdit style={{ borderRadius: "50%" }} />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "lg", lg: "xl" }}
        closeOnEsc={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Personal</Tab>
                <Tab>Address</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPersonalInfo;
