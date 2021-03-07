import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Form, Button, FormGroup, FieldsForm, FormTitle,
} from './styles';
import Repos from './Repos';

function Search() {
  const [searchInput, setSearchInput] = useState({ user: '' });
  const [repos, setRepos] = useState([]);

  const submitSearch = async (e) => {
    e.preventDefault();

    try {
      const result = await axios(`https://api.github.com/users/${searchInput.user}/repos`);
      setRepos(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <FormTitle>
        <h2>Search for a Git Hub Account</h2>
      </FormTitle>
      <Form onSubmit={submitSearch}>
        <div className="form-inner">
          {/* {(error !== '') ? <div className="error">{error}</div> : ''} */}
          <FormGroup>
            <FieldsForm>
              <input type="text" name="gitUser" id="gitUser" onChange={(e) => setSearchInput({ ...searchInput, user: e.target.value })} value={searchInput.user} />
            </FieldsForm>
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Search" />
          </FormGroup>
        </div>
      </Form>
      {repos.length !== 0 ? (<Repos repos={repos} />) : ('')}
    </div>
  );
}

Search.propTypes = {
};

export default Search;
