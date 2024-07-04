import {
  Box,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { getIcon } from "../../../../../../public/AllIcons";
import { TSocialLinks } from "../../../../../../public/socialLinksData";

type Props = {
  socialLinks: TSocialLinks[];
};

const SocialLinks = ({ socialLinks }: Props) => {
  return (
    <form>
      {socialLinks.map((link, idx) => (
        <FormControl width={"100%"} key={idx} mt={idx === 0 ? 2 : 5}>
          <InputGroup
            size="sm"
            flexDir={{ base: "column", sm: "row" }}
            rowGap={1}
            columnGap={2}
          >
            <Box
              flex={1}
              fontSize={"sm"}
              display={"flex"}
              alignItems={"center"}
              columnGap={1}
            >
              {getIcon(`${link.iconName}`)}
              <Text
                w={"100%"}
                display={"flex"}
                justifyContent={{ sm: "space-between" }}
                pr={{ md: 5 }}
              >
                {link.name} <span>:</span>
              </Text>
            </Box>
            <Box
              flex={{ sm: 3, md: 2, xl: 7 }}
              display={"flex"}
              alignItems={"center"}
              w={"100%"}
              fontSize={"sm"}
            >
              <InputLeftAddon>https://</InputLeftAddon>
              <Input
                placeholder={`${link.name}`}
                size={"sm"}
                id={`${link.iconName}`}
              />
            </Box>
          </InputGroup>
        </FormControl>
      ))}
      <Button size={"sm"} colorScheme={"blue"} type="submit" mt={5}>
        Upload Social Links
      </Button>
    </form>
  );
};

export default SocialLinks;
