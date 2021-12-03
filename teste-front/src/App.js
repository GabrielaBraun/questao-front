import { useState } from 'react';
import './App.css';
require('dotenv').config();

function App() {

  const [username, setUsername] = useState('');
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  async function getUserGitHub(username){
    try{
        const answer = await fetch(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);

        const data = await answer.json();
        console.log(data);

    } catch (error) {
        return false;
    }
};
 
  return (
    <div className="container">
      <input 
        type='text' 
        value={username} 
        placeholder='GabrielaBraun'
        onChange={e => setUsername(e.target.value)}> 
      </input>
      <button 
        type='submit' 
        onClick={e => getUserGitHub(username)}
      >Procurar
      </button>
    </div>
  );
}

export default App;
