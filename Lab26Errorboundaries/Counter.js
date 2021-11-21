import React from 'react';

const Counter = ({ count, setCount }) => {
  if (count === 5) {
    throw new Error('Count is 5. Error Occurred.');
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;