
import NxWelcome from './nx-welcome';

import { Route, Link, BrowserRouter } from 'react-router-dom';
import "./app.style"
import getBus from "./bus"
import { buttonClasses } from '@mui/material';
// @ts-ignore  
import {useEffect} from "libs/react";

export function App() {

  useEffect(()=>{
    const bus = getBus()
    bus.next({event:"load"})
  },[])

  return (
    <BrowserRouter>
      <div className="routing">
        <NxWelcome title="callejero" />

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        />
        {/* END: routes */}
      </div>
    </BrowserRouter>
  );
}

export default App;
