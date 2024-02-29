import React, { useState, ChangeEvent } from "react";

interface SearchBarProps {
  handleChange: (quaery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  //   const [searchedText, setSearchedText] = useState<string[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    handleChange(value);
  };

  //   const onSubmit = (e: FormEvent) => {
  //     e.preventDefault();

  //     if (searchValue.trim() !== "") {
  //       setSearchedText((prevSearchedText) => [...prevSearchedText, searchValue]);
  //       setSearchValue("");

  //       console.log(searchedText);
  //     }
  //   };

  return (
    <form>
      <input type="search" value={searchValue} onChange={onChange} />
    </form>
  );
};

export default SearchBar;
