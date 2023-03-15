import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDogDetails = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.find((d) => d.name.toLowerCase() === name);

  return <DogDetails dog={dog} />;
};

export default FilterDogDetails;
