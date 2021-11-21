import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";
import React from "react";
import myglobal  from "./Global"
import Customer from "./Customer"
import Login from "./Login"

function App() {
  return (

      <div>
        <Router>
          <div className="App">
            <Switch>
                <Route path="/Customer" component="Customer">
                  {myglobal.token.length==0 ? <Redirect to="/Login" /> : <Customer />}
                </Route>
                <Route path="/Login" component="Login">
                  <Login />
                </Route>
            </Switch>
          </div>
        </Router>
      </div>
  )
}

export default App
