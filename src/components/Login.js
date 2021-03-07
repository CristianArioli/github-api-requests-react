import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Form, Button, FormGroup, FieldsForm, FormTitle,
} from './styles';

import Logo from '../assets/images/logo.png';

function Login({ loginFn, error }) {
  const [details, setDetails] = useState({ email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();

    loginFn(details);
  };

  return (
    <div>
      <FormTitle>
        <img src={Logo} alt="Logo" />
      </FormTitle>
      <Form onSubmit={submitHandler}>
        <div className="form-inner">
          {(error !== '') ? <div className="error">{error}</div> : ''}
          <FormGroup>
            <FieldsForm htmlFor="email">
              Email:
              <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
            </FieldsForm>
          </FormGroup>
          <FormGroup>
            <FieldsForm htmlFor="password">
              Password:
              <input type="password" name="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </FieldsForm>
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Login" />
          </FormGroup>
        </div>
      </Form>
    </div>
  );
}

Login.propTypes = {
  loginFn: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Login;
