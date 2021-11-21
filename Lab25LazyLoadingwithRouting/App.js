import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import OtherComponent from "./OtherComponent.js"
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function App() {
  return (
    <div className="App">
      <Router>
     <div>
     <Link to="/OtherComponent">Other</Link><br></br>
     </div>
     <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route exact path="/OtherComponent">
            <OtherComponent />
          </Route>
        </Suspense>
      </Switch>
   </Router>
    </div>
  );
}

export default App;
