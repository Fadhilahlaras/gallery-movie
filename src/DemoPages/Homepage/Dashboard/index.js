import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import AppHeader from "../../../Layout/AppHeader"
import {Row, CardBody} from "reactstrap";
import bg1 from "../../../assets/utils/images/originals/city.jpg";
import axios from "axios";
import KartuMovie from "../../Movie/Kartu";
import KartuTv from "../../Tvshows/Kartu";

import $ from 'jquery'

import MovieRow from "../../../MovieRow";


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        // this.performSearch("ant man")
    }

    performSearch(searchTerm) {
        console.log("Perform search using moviedb")
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                // console.log(searchResults)
                const results = searchResults.results
                // console.log(results[0])

                var movieRows = []

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    // console.log(movie.poster_path)
                    const movieRow = <MovieRow key={movie.id} movie={movie}/>
                    movieRows.push(movieRow)
                })

                this.setState({rows: movieRows})
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }

    searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }


    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <div className="app-main">
                        <div className="app-main__inner">
                            <Row>
                                <CardBody>
                                    <div
                                        className="p-5 bg-plum-plate">
                                        <div className="slide-img-bg"
                                             style={{
                                                 fade: true,
                                                 backgroundImage: 'url(' + bg1 + ')'
                                             }}/>
                                        <div className="slider-content" style={{
                                            color: "white"
                                        }}>
                                            <h3>Welcome.</h3>
                                            <h4>
                                                Millions of movies, TV shows and people to discover. Explore now.
                                            </h4>
                                        </div>
                                    </div>
                                </CardBody>
                                {/*</Col>*/}
                            </Row>

                            <Row>
                                <CardBody>
                                    <div className="input-holder">
                                        <input style={{
                                            fontSize: 24,
                                            display: 'block',
                                            width: "100%",
                                            paddingTop: 8,
                                            paddingBottom: 8,
                                            paddingLeft: 16
                                        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a movie, tv show, person .... "/>
                                    </div>
                                </CardBody>
                            </Row>

                            <Row>
                                <CardBody>
                                    {this.state.rows}
                                </CardBody>
                            </Row>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}
export default Dashboard;
