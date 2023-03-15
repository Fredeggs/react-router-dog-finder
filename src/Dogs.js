import { NavLink } from "react-router-dom";

const Dogs = ({ dogs }) => {
  return (
    <div>
      <h1>Available dogs</h1>
      <ul>
        {dogs.map((d) => (
          <li key={d.id}>
            <NavLink to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dogs;
