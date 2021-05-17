import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() => import("../pages/HomePage" /* webpackChunkName: "HomePage" */));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */));
const MoviesPage = lazy(() => import("../pages/MoviesPage" /* webpackChunkName: "MoviesPage" */));

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback="Загружаем">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
