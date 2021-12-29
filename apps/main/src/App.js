import React, { Suspense } from "libs/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "libs/react-router-dom";
import "./app.style.css"

const CallejeroMaps = React.lazy(() => import("microCallejero/Maps"));
const CallejeroCars = React.lazy(() => import("microCallejero/Cars"));
const CallejeroMain = React.lazy(() => import("microCallejero/Main"));

const UsersMain = React.lazy(() => import("microUsers/Main"));

const App = () => {
  return (
    <Router>
      <div>
        <div
          style={{
            margin: "10px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "greenyellow",
          }}
        >
          <h1>HOST</h1>
          HOST ONLY SUPPORTS LIVE RELOAD. GO TO http://localhost:3001 or http://localhost:3003 to try out
          HMR
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/callejeromaps">Maps (Callejero MicroFront)</Link>
            </li>
            <li>
              <Link to="/callejerocars">Cars (Callejero MicroFront)</Link>
            </li>
            <li>
              <Link to="/callejeromain">Main (Callejero MicroFront)</Link>, to try alone <a href="http://localhost:3001" target="_blank">http://localhost:3001</a>
            </li>
            <li>
              <Link to="/usersmain">Main (Users MicroFront)</Link>, to try alone <a href="http://localhost:3003" target="_blank">http://localhost:3003</a>
            </li>
          </ul>
        </nav>
        <div id="routingDivsResult">
          <Suspense fallback={"loading..."}>
            <Switch>
              <Route path="/callejeromaps">
                <CallejeroMaps />
              </Route>
              <Route path="/callejerocars">
                <CallejeroCars />
              </Route>
              <Route path="/callejeromain">
                <CallejeroMain />
              </Route>
              <Route path="/usersmain">
                <UsersMain />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
