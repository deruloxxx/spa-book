import React from "react";
import './App.css'
import {Chat} from "./components/template/Chat";
import {LoginStateProvider} from "./components/abstracts/loginState/loginStateProvider";

function App() {
  return (
      <React.StrictMode>
          <LoginStateProvider>
              <div>
                <Chat />
              </div>
          </LoginStateProvider>
      </React.StrictMode>
  );
}

export default App;
