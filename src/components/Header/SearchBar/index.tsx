import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (key: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);
  return (
    <InputGroup
      w={{ base: "100%", sm: "auto" }}
      maxW={{ base: "200px", sm: "300px", md: "400px", lg: "600px" }}
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="white" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search.."
        _placeholder={{ color: "grey.700" }}
        color="white"
        bg="grey.900"
        borderColor="grey.700"
        width="600px"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
