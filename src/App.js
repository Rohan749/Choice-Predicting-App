import React, { useState } from 'react';
import './App.css';
import Body from './Body/Body';
import StartModal from './Body/ModalBox/StartModal';
import Heading from './Heading/Heading';

function App() {

  const [value, setValue] = useState();
  const [name, setName] = useState();

  const clickHandler = (val) => {
      setValue(val);
  }


  const setUserName = (nameUser) => {
    setName(nameUser);
  }

  return (
    <div className="App">

      {!value && <StartModal
      title="Hello there!"
      onClick={clickHandler}
      userName = {setUserName}/>}
      <Heading/>
      <Body useName={name}/>
    </div>
  );
}

export default App;
