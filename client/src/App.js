import {useEffect} from 'react'
import './App.css';

function App() {

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3001/test')
      const data = await res.json()
      console.log(data)
    }

    getData()
  }, [])

  return (
    <h1>Check the console and make sure that we can communicate from client to server.</h1>
  );
}

export default App;
