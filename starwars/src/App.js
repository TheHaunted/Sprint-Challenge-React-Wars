import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/CardComponent/CardComponent.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
      .then(resp => {
        console.log(resp);
        setData(resp.data.results);
      })
      .catch(error => console.log(error));
    }, []);
    console.log(data);
    
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* <CharacterCard name={data.name} url={data.url} /> */}
      {data.map(person => {
        return <CharacterCard name={person.name} gender={person.gender} eyes={person.eye_color} />
      })}
    </div>
  );
}

export default App;
