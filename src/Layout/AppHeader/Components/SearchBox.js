import React, {Fragment} from 'react';

import cx from 'classnames';

import '../../../App.css';
import MovieRow from '../../../MovieRow';
import $ from 'jquery'

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSearch: true
        };
    }
    //
    // performSearch(searchTerm) {
    //     console.log("Perform search using moviedb")
    //     const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    //     $.ajax({
    //         url: urlString,
    //         success: (searchResults) => {
    //             console.log("Fetched data successfully")
    //             // console.log(searchResults)
    //             const results = searchResults.results
    //             // console.log(results[0])
    //
    //             var movieRows = []
    //
    //             results.forEach((movie) => {
    //                 movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
    //                 // console.log(movie.poster_path)
    //                 const movieRow = <MovieRow key={movie.id} movie={movie}/>
    //                 movieRows.push(movieRow)
    //             })
    //
    //             this.setState({rows: movieRows})
    //         },
    //         error: (xhr, status, err) => {
    //             console.error("Failed to fetch data")
    //         }
    //     })
    // }
    //
    // searchChangeHandler(event) {
    //     console.log(event.target.value)
    //     const boundObject = this
    //     const searchTerm = event.target.value
    //     boundObject.performSearch(searchTerm)
    // }

    render() {
        return (
            <Fragment>
                <div className={cx("search-wrapper", {
                    'active': this.state.activeSearch
                })}>
                    <div className="input-holder">
                        {/*<input type="text" className="search-input" onChange={this.searchChangeHandler.bind(this)} placeholder="Type to search"/>*/}
                        {/*<button onClick={() => this.setState({activeSearch: this.state.activeSearch})}*/}
                        {/*        className="search-icon"><span/></button>*/}
                    </div>
                    {/*<button onClick={() => this.setState({activeSearch: !this.state.activeSearch})} className="close"/>*/}
                </div>
            </Fragment>
        )
    }
}

export default SearchBox;