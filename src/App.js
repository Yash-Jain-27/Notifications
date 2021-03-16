import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventPage from '../src/components/notification/event_page';
import Login from '../src/components/login/login';
import useToken from '../src/utils/token';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <>
      <Login setToken={setToken} />
    </>
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <EventPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;