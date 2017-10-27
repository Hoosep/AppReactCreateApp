import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm.js';
import Results from './components/Results.js';

class App extends Component {
  render() {
    return (
      <div>
      	<Jumbotron>
      		<Grid>
		  			<h1>SearchApp</h1>
		  			<p>This is a simple search app.</p>
						<SearchForm />
					</Grid>
				</Jumbotron>
				<Results />
      </div>
    );
  }
}

export default App;
