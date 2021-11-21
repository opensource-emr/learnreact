import React from 'react';

function simpleHOC(WrappedComponent) {
    // And return a new anonymous component
    return class extends React.Component{
      render() {
        return (<div>
            <b>Hello from HOC</b>
            <br></br> 
            <WrappedComponent> </WrappedComponent>
            </div>);
      }
    }
  }

  export default simpleHOC;