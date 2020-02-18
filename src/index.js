import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Button } from "@skbkontur/react-ui";

class App extends React.Component {
  render() {
    return (
      <Button use="success" type="submit">
        Ок
      </Button>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
