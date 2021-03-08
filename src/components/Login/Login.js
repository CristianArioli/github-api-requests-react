import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../template/Header';

import {
  Form, Button, FormGroup, FieldsForm, FormTitle, Error,
} from '../styles';

import Logo from '../../assets/images/logo.png';

function Login() {
  const [details, setDetails] = useState({ login: '', password: '' });
  const history = useHistory();
  const [error, setError] = useState('');

  const adminUser = {
    user: 'admin',
    password: 'admin123',
  };

  const loginFn = (e, logininfo) => {
    e.preventDefault();
    if (logininfo.user === adminUser.user && logininfo.password === adminUser.password) {
      localStorage.setItem('@login-app/user', logininfo.user);
      history.push('/home');
    } else {
      setError('Usuário ou Senha incorretos!');
    }
    return false;
  };

  return (
    <main>
      <FormTitle>
        <img src={Logo} alt="Logo" />
      </FormTitle>
      <Form onSubmit={(e) => loginFn(e, details)}>
        <div className="form-inner">
          <FormGroup>
            <FieldsForm htmlFor="user">
              Usuario:
              <input type="user" name="text" id="user" onChange={(e) => setDetails({ ...details, user: e.target.value })} value={details.user} />
            </FieldsForm>
          </FormGroup>
          <FormGroup>
            <FieldsForm htmlFor="password">
              Password:
              <input type="password" name="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
              {(error !== '') ? <Error className="error">{error}</Error> : ''}
            </FieldsForm>
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Login" />
          </FormGroup>
        </div>
      </Form>
    </main>
  );
}

export default Login;
