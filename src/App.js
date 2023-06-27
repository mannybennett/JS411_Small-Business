import React, { useState } from 'react'
import Navigation from './containers/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation isLoggedIn={loggedIn} makeLoggedIn={(val) => setLoggedIn(val)} />
        <Router makeLoggedIn={(val) => setLoggedIn(val)} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;