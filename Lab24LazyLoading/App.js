//import React, { Suspense } from 'react';
import React from 'react';
import OtherComponent from "./OtherComponent.js"
//const OtherComponent = React.lazy(() => import('./OtherComponent'));

function App() {
  return (
    <div className="App">
      Hello
      <OtherComponent/>
    </div>
  );
}

export default App;
