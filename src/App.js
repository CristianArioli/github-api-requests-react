import React, { useState } from 'react';
import LoginForm from './components/Login';
import SearchForm from './components/Search';
import { GlobalStyle } from './components/styles';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
      localStorage.setItem('@login-app/email', details.email);
      setUser({
        email: details.email,
      });
    } else {
      setError('Details do not match!');
    }
  };

  const Logout = () => {
    localStorage.removeItem('@login-app/email');
    setUser({ email: '' });
  };

  return (
    <div className="App">
      <GlobalStyle />
      {(user.email !== '') ? (
        <div>
          <SearchForm />
          <button onClick={Logout} type="button">teste</button>
        </div>
      ) : (
        <LoginForm loginFn={Login} error={error} />
      )}
    </div>
  );
}

export default App;
