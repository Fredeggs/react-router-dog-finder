import { Switch, Route, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import FilterDogDetails from "./FilterDogDetails";

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs/:name">
        <FilterDogDetails dogs={dogs} />
      </Route>
      <Route exact path="/dogs">
        <Dogs dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
