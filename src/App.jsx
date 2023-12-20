/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary" />
        <br />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" />
        <Alert type="warning" />
        <Alert type="info" />
        <Alert type="success" />
      </div>
    </div>
  );
}

export default App;
