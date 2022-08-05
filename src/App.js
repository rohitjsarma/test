import React from 'react';
import './App.css';
import Button from './components/button/button';
import UserList from './components/button/userlist/userlist';

function App() {
  return (
    <div className="App">
       <h1>App Home </h1>
       <Button label="Click me Here"/>
       <UserList/>
    </div>
  );
}

export default App;
