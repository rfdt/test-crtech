import React from 'react';
import './App.css';
import {withNaming} from "@bem-react/classname";

const cn = withNaming({e: '__', m: '_'}) // Модификатор

function App() {

  const menu = cn('Menu') // блок

  return (
    <div className="App">
        <div className={menu({collapsed: true})}>
            // Пример элеменета с модификатором
          <div className={menu('Top', {'collapsed': true})}></div>
        </div>
    </div>
  );
}

export default App;
