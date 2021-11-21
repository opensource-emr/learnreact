
function OtherComponent() {
    sleep(2000);
  return (
    <div className="App">
      Hello other component
    </div>
  );
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
export default OtherComponent;
