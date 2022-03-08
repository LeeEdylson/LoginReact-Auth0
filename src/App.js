import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';

import {useAuth0} from '@auth0/auth0-react';

function App() {

const {isAuthenticated} = useAuth0()

console.log(isAuthenticated);

  return (
    <div className="App">
      <h1>Inicio de sesión</h1>  
      {
        isAuthenticated ?
        <LogoutButton/>
        :<LoginButton/> 
      }   
      <br/><br/>
            
      <Profile />
    </div>
  );
}

export default App;
