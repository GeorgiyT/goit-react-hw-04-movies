import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    inputValue: "",
    data: []
  };

  componentDidMount() {
    if (this.props.location.search) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const query = new URLSearchParams(this.props.location.search);

    const result = await axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=fd24293d59cd022df746242a4a847605&query=${query.get("query")}`)
      .then(responce => responce.data);
    this.setState({ data: result.results });
    console.log(result.results);
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.history.push({ search: `query=${this.state.inputValue}` });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.data.map(elem => (
            <li key={elem.id}>
              <NavLink
                to={{
                  pathname: `/movies/${elem.id}`,
                  state: this.props.location
                }}
              >
                {elem.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
