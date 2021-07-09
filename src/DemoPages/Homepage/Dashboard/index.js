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
    // console.log("udah ada")
    // const [dataCard, setDataCard] = useState([])
    // let imageArrayPath = [];
    //
    // const [dataCard2, setDataCard2] = useState([])
    // let imageArrayPath2 = [];
    //
    // useEffect(() => {
    //     axios.get("http://localhost:1818/api/movies").then(res => {
    //         setDataCard(res.data)
    //
    //         console.log(res.data)
    //     })
    //
    //     axios.get("http://localhost:1818/api/tvshows").then(res => {
    //         setDataCard2(res.data)
    //
    //         console.log(res.data)
    //     })
    //
    //
    // }, [])

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
                                {/*<Col md="12">*/}
                                {/*<Card className="main-card mb-5">*/}
                                {/*<input style={{*/}
                                {/*    fontSize: 24,*/}
                                {/*    display: 'block',*/}
                                {/*    width: "99%",*/}
                                {/*    paddingTop: 8,*/}
                                {/*    paddingBottom: 8,*/}
                                {/*    paddingLeft: 16*/}
                                {/*}} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>*/}

                                {/*{this.state.rows}*/}

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
                            {/*<Row>*/}
                            {/*    <h3 style={{margin: "40px", marginBottom:"20px"}}> List Movie  </h3>*/}
                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*    {dataCard.map((card, index) => (*/}
                            {/*        <KartuMovie key={index} id={card.id} title={card.moviesName}*/}
                            {/*                    categoryMovies={card.categoryMovies}*/}
                            {/*                    year={card.year} description={card.description}*/}
                            {/*                    image={imageArrayPath[index]}/>*/}
                            {/*    ))}*/}

                            {/*</Row>*/}

                            {/*<Row>*/}
                            {/*    <h3 style={{margin: "40px", marginBottom:"20px"}}> List TV Show  </h3>*/}
                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*    {dataCard2.map((card, index) => (*/}
                            {/*        <KartuTv key={index} id={card.id} title={card.tvshowsName}*/}
                            {/*                 categoryTvshows={card.categoryTvshows}*/}
                            {/*                 year={card.year} description={card.description}*/}
                            {/*                 image={imageArrayPath2[index]}/>*/}
                            {/*    ))}*/}

                            {/*</Row>*/}


                        </div>

                        {/*<ModalHome toggle={() => {*/}
                        {/*    toggleModalHome()*/}
                        {/*}} modal={modalHome} onChangeToggle={()=>onChangeToggleModalHome()}/>*/}

                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}
export default Dashboard;
