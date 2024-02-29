import React, { useState, ChangeEvent, useEffect } from "react";
import { FormStyle } from "./Components";

interface SearchBarProps {
  handleChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleChange(searchValue);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <FormStyle>
      <input
        className="Search"
        type="search"
        value={searchValue}
        onChange={onChange}
      />
    </FormStyle>
  );
};

export default SearchBar;
