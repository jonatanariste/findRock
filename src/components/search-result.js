import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";
class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: []
      }
    }
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=6c028a05bb3337cbf567aa148b8839cf&format=json"
    );
  }
  // componentDidMount() {
  //   this.fetchData(
  //     "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=Korn&api_key=6c028a05bb3337cbf567aa148b8839cf&format=json"
  //   );
  // }

  fetchData = async url => {
    this.setState({
      loading: true
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo que trae la api");
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMEnsaje: data.message
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMEnsaje={this.state.errorMEnsaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[3]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
