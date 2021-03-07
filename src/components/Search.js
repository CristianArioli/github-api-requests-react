import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Form, Button, FormGroup, FieldsForm, FormTitle,
} from './styles';

function Search({ searchfn, error }) {
  const [gitUser, setgitUser] = useState({ user: '' });

  const submitHandler = (e) => {
    e.preventDefault();

    searchfn(gitUser);
  };

  return (
    <div>
      <FormTitle>
        <h2>Search for a Git Hub Account</h2>
      </FormTitle>
      <Form onSubmit={submitHandler}>
        <div className="form-inner">
          {(error !== '') ? <div className="error">{error}</div> : ''}
          <FormGroup>
            <FieldsForm>
              <input type="text" name="name" id="name" onChange={(e) => setgitUser({ ...gitUser, user: e.target.value })} value={gitUser.user} />
            </FieldsForm>
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Search" />
          </FormGroup>
        </div>
      </Form>
    </div>
  );
}

Search.propTypes = {
  searchfn: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Search;
