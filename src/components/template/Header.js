import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HeaderStyle } from '../styles';
import LogoHeader from '../../assets/images/logo-header.png';

function Header(props) {
  const { logout } = props;

  return (
    <HeaderStyle>
      <div>
        <a href="/home">
          <img src={LogoHeader} alt="Logo" />
        </a>
      </div>
      <div>
        <span>{localStorage.getItem('@login-app/user')}</span>
        <button type="button" onClick={logout}>Logout</button>
      </div>
    </HeaderStyle>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Header;
