import React from 'react';
import './App.css';
import ListTemplate from './component/ListTemplate.js';
import {TodoProvider} from './component/TodoContext.js';

function App(){
  return (
    <TodoProvider>
        <ListTemplate>
      </ListTemplate>
    </TodoProvider>
  );
}

export default App;
