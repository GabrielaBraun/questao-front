import { useState } from 'react';
import './App.css';

const baseURL = (username) => `https://api.github.com/${username}/octocat/repos`;

function App() {

  const [username, setUsername] = useState('');

  async function getUserGitHub(username){
    try{
        const answer = await fetch(baseURL(username), {
            method: 'GET',
            Accept: 'application/vnd.github.v3+json'
        });

        const data = await answer.json();
        console.log(data)
        return data;
        
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
          onClick={getUserGitHub}>Procurar</button>
    </div>
  );
}

export default App;
