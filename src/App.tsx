import React from 'react';
import './App.scss';
import {cn} from "./scripts/cn";
import Menu from "./Blocks/Menu/Menu";

function App() {

  return (
    <div className={cn('App')()}>
      <Menu />
    </div>
  );
}

export default App;
