import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  GitInfosContainer, GitInfosFollowers, GitInfosFollowersContainer,
} from '../styles';

const UserInfos = (props) => {
  const { gitInfos } = props;
  const history = useHistory();
  localStorage.setItem('@git/user', gitInfos.data.login);

  const goToRepos = () => {
    history.push('/repos');
  };

  return (
    <GitInfosContainer>
      <img src={gitInfos.data.avatar_url} alt="Avatar" />
      <div>
        <h2>{gitInfos.data.name}</h2>
      </div>
      <div>
        <span>
          Repositórios Públicos:
          {` ${gitInfos.data.public_repos}`}
        </span>
      </div>
      <button type="button" onClick={goToRepos}>Ver Repositórios</button>
      <GitInfosFollowersContainer>
        <GitInfosFollowers>
          Seguidores
          {' '}
          <div>{gitInfos.data.followers}</div>
        </GitInfosFollowers>
        <GitInfosFollowers>
          Seguindo
          {' '}
          <div>{gitInfos.data.followers}</div>
        </GitInfosFollowers>
      </GitInfosFollowersContainer>
    </GitInfosContainer>
  );
};

UserInfos.propTypes = {
  gitInfos: PropTypes.objectOf.isRequired,
};

export default UserInfos;
