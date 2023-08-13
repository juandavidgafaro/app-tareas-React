import {AppUI} from './AppUI'
import { TodoProvider } from '../TodoContex'
import React from "react";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
