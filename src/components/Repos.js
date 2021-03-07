import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Repos = (props) => {
  const { repos } = props;

  const listRepos = repos.lenght !== 0 ? (repos.data.map((item) => <li>{item.name}</li>)) : ('');
  return (
    <uL>
      {listRepos}
    </uL>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf.isRequired,
};

export default Repos;
