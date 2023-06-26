import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import Card from "./Components/Card";

const App = () => {
  return (
    <div className="App">
      <Card
        imgSrc="https://picsum.photos/300/200"
        imgAlt="Card Image"
        title="Card Title"
        description="This is card description wait for it"
        link="cardImage"
        buttonTxt="Learn More"
      />
    </div>
  );
};

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<App />);
