import capitalize from "./helpers";
import { Image } from "react";

const DogDetails = ({ dog }) => {
  return (
    <div>
      <h1>{capitalize(dog.name)}</h1>
      <img src={dog.src} />
      <h2>About {dog.name}:</h2>
      <ul>
        <li>
          {dog.name} is {dog.age} years old
        </li>
        {dog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
