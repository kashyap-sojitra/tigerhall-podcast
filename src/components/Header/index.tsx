import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import SearchBar from "../Header/SearchBar";

interface HeaderProp {
  onSearch: (key: string) => void;
}

const Header = ({ onSearch }: HeaderProp) => {
  const logoSrc = useBreakpointValue({
    base: "/icons/tigerhall-mobile-logo.svg",
    sm: "/icons/tigerhall-mobile-logo.svg",
    md: "/icons/tigerhall.svg",
  });

  return (
    <Flex
      as="header"
      w="100%"
      h="64px"
      p={4}
      bg="darkgrey.900"
      borderBottomWidth="1px"
      borderBottomColor="darkgrey.400"
    >
      <Flex align="center">
        <Image src={logoSrc} alt="Logo" />
      </Flex>
      <Flex
        margin="0 auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SearchBar onSearch={onSearch} />
      </Flex>
    </Flex>
  );
};

export default Header;
