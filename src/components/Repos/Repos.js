import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../template/Header';
import ReposCards from './ReposCards';
import { ContainerRepos } from '../styles';

const Repos = (props) => {
  const [repos, setRepos] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('@login-app/user');
    history.push('/');
  };

  useEffect(async () => {
    try {
      const result = await axios(`https://api.github.com/users/${localStorage.getItem('@git/user')}/repos`);
      setRepos(result.data);
      if (repos.length === 0) {
        setError('Não foi possível encontrar repositórios para este usuário');
      }
    } catch (exception) {
      setRepos('');
      setError('Ouve um erro na requisição dos repositórios');
    }
  }, []);

  return (
    <div>
      <Header logout={logout} />
      <main>
        <ContainerRepos>
          {repos.length !== 0
            ? (repos.map((item) => (
              <ReposCards
                key={item.id}
                name={item.name}
                forks={item.forks_count}
                stars={item.stargazers_count}
                url={item.html_url}
              />
            )))
            : (<span>{error}</span>)}
        </ContainerRepos>
      </main>
    </div>

  );
};

export default Repos;
