import React from 'react';
import {
	Form,
	FormGroup,
	FormControl,
	Button
} from 'react-bootstrap';

const SearchForm = () => {
	return (
		<Form inline>
		  <FormGroup controlId="formInlineEmail">
		    <FormControl bsSize="large" type="search" placeholder="Enter something..." />
		  </FormGroup>
		  {' '}
		  <Button bsSize="large" type="submit">
		    Search
		  </Button>
		</Form>	
	);
};

export default SearchForm;