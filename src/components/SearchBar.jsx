import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function SearchBar() {
  return(
    <InputGroup>
      <InputGroup.Prepend>
      <InputGroup.Text id="btnGroupAddon">Keyword</InputGroup.Text>
      </InputGroup.Prepend>
    <FormControl
      placeholder="ex. Frontend Developer"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
  );
}

export default SearchBar;