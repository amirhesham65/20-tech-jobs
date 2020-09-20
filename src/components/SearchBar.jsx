import React, { useState, useEffect } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function SearchBar({ onDataFetched }) {
  const [searchValue, setSearchValue] = useState("developer");

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    onDataFetched([]);
    if (searchValue.trim()) {
      const url = `https://tech-jobs-api-deploy.herokuapp.com/jobs/${searchValue}`;
      try {
        const response = await fetch(url);
        const jobs = (await response.json()).results.data;
        onDataFetched(jobs);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleSearch();
    }
  };

  const handleOnChange = (e) => setSearchValue(e.target.value);

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon">Keyword</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="ex. Frontend Developer"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={searchValue}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default SearchBar;
