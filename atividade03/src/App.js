import React from 'react';
import './App.css';
import axios from 'axios';
import { PlaceHolderPost } from './Components/PlaceHolderPost';
import { PlaceHolderPut } from './Components/PlaceHolderPut';
import { PlaceHolderDel } from './Components/PlaceHolderDel';


function App() {

  // const [getOne, setGetOne] = React.useState([])
  // const [listAll, setListAll] = React.useState([])

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        console.log({ one: res.data })
      })
      .catch((error) => console.log(error))
  }, [])

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log({ all: res.data })
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      <div className='App-title'>
        <h2>Requisições API JSONPlaceholder</h2>
      </div>

      <div className='App-content'>
        <PlaceHolderPost />
      </div>

      <div className='App-content'>
        <PlaceHolderPut />
      </div>

      <div className='App-content'>
        <PlaceHolderDel />
      </div>

    </div>
  );
}

export default App;
