
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


function App() {

  
  
useEffect (() => {
  
}, [])

const getPages = () => {
  API.getAll().then(res => {
    console.log(res);
  })
}

  return (
    <div className="App">
      <pages />
    </div>
  );
  }
    
  export default App;
