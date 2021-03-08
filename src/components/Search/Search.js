import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../template/Header';

import {
  Form, Button, FormGroup, FieldsForm, FormTitle, Error,
} from '../styles';
import UserInfos from '../UserInfos/UserInfos';

function Search() {
  const [searchInput, setSearchInput] = useState({ user: '' });
  const [gitInfos, setGitInfos] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();

  const submitSearch = async (e) => {
    e.preventDefault();

    try {
      // const result = await axios(`https://api.github.com/users/${searchInput.user}/repos`);
      const result = await axios(`https://api.github.com/users/${searchInput.user}`);
      setGitInfos(result);
    } catch (exception) {
      setGitInfos('');
      setError('Não foi possível encontrar o usuário');
    }
  };

  const logout = () => {
    localStorage.removeItem('@login-app/user');
    history.push('/');
  };

  return (
    <div>
      <Header logout={logout} />
      <main>
        <FormTitle>
          <h2>Procure por um usuário do GitHub</h2>
        </FormTitle>
        <Form onSubmit={(e) => submitSearch(e)}>
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
        {gitInfos.length !== 0 ? (<UserInfos gitInfos={gitInfos} />) : (<Error>{error}</Error>)}
      </main>
    </div>
  );
}

export default Search;
