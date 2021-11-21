import React, { useState } from 'react';
import Counter from './Counter';
import { ErrorBoundary } from 'react-error-boundary';
import {ErrorFallback} from "./ErrorFallback"
const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCount(0)}
      >
      <Counter count={count} setCount={setCount} />
      </ErrorBoundary>
    </div>
  );
};

export default App;