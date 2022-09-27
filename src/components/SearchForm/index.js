import { useContext, useState } from 'react';

import { Button, InputField } from '../common';
import { MovieContext } from '../../context/MovieContext';
import {FormContainer, InputGroup, InputButton, SearchInput} from './style.js';

export default function SearchForm() {
  const { getMovies } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  // const handleSubmit = async (e: SyntheticEvent) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.length >= 2) {
      getMovies({
        variables: { query: searchValue },
      });

      setSearchValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <FormContainer
      className="mt-5"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      noValidate
    >

      <h1>Search for a movie</h1>
      <InputGroup>
        <SearchInput
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
          value={searchValue}
          onChange={handleChange}
        />
        <InputButton type="submit" className="btn-primary" value="" />
      </InputGroup>
    </FormContainer>
  );
}
