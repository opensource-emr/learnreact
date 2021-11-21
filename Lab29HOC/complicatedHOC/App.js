import * as ReactDOM from 'react-dom'
import simpleHOC  from './Hoc'
function Hello() {
  return (
    <div className="App">
      <p>Hello from Hello</p>
    </div>
  );
}

const NewComponent = simpleHOC(Hello);

export default NewComponent;