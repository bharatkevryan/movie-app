import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import MovieDetailPage from "./views/MovieDeatilPage/MovieDetailPage"
import FavoritePage from "./views/FavoritePage/FavoritePage"
import GenrePAge from "./views/Genres/GenrePage"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)', backgroundColor:"#282828" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetailPage, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
          <Route exact path="/genre/:genreId" component={Auth(GenrePAge, null)} />
        </Switch>
      </div>
      <Footer  />
    </Suspense>
  );
}

export default App;
