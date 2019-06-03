import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Layout from "./components/layout.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route path="/" component={PageHome} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
