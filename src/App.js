import React from "react";
import Heading from "./heading";
import Title from "./title";
import content from "./content";
import Card from "./card";
import "./styles.css";

function createCard(content) {
  return (
    <Card
      key={content.id}
      id={content.id}
      title={content.title}
      img={content.img}
      about={content.about}
    />
  );
}

function App() {
  return (
    <div className="main-body">
      <Heading />
      <Title />
      <h2 className="title-2">Lets see top 10 emojis</h2>
      <div className="card-container">{content.map(createCard)}</div>
    </div>
  );
}

export default App;
