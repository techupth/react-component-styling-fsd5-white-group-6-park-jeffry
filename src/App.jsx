import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Primary"></Button>
        <Button type="Secondary"></Button>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert index={0} text="This is error alert box"></Alert>
        <Alert index={1} text="This is waring alert box"></Alert>
        <Alert index={2} text="This is info alert box"></Alert>
        <Alert index={3} text="This is succes alert box"></Alert>
      </div>
    </div>
  );
}

export default App;
