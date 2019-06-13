import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchPage = () => {
  return (
    <>
    <Form inline>
    <FontAwesomeIcon icon={faSearch} /> 
    <FormControl type="text" placeholder="Busca lo que quieras" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
    </Form>
    </>
  );
}

export default SearchPage;