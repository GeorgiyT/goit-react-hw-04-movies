import React, { Component } from "react";
import axios from "axios";
import styles from "./MovieCast.module.css";
import noImage from "../../images/no-image.png";

class MovieCast extends Component {
  state = {
    movieCast: []
  };

  componentDidMount() {
    if (this.props.movieId) {
      this.getFetch();
    }
  }

  componentDidUpdate() {
    if (this.props.movieId) {
      this.getFetch();
    }
  }

  getFetch = async () => {
    const movie_id = this.props.movieId;
    const result = await axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=fd24293d59cd022df746242a4a847605&language=en-US`)
      .then(responce => responce.data);
    this.setState({ movieCast: result.cast });
  };

  render() {
    return (
      <>
        {this.state.movieCast.length > 0 ? (
          <ul className={styles.list}>
            {this.state.movieCast.map(actor => (
              <li key={actor.id} className={styles.list__item}>
                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : noImage} alt="" />
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          "Путсо!"
        )}
      </>
    );
  }
}

export default MovieCast;
