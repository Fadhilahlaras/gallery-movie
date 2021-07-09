import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/index";
import {Row} from "reactstrap";
import ThisCardTv from "../Kartu";
import axios from "axios";

const Home = ({match}) => {
    console.log("udah ada")
    const [dataCard, setDataCard] = useState([])
    let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:1818/api/tvshows").then(res => {
            setDataCard(res.data)

            console.log(imageArrayPath)
        })
    }, [])



    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>

                <Row>
                    {dataCard.map((card, index) => (
                        <ThisCardTv key={index} id= {card.id} title={card.tvshowsName} categoryTvshows={card.categoryTvshows}
                                  year={card.year} description={card.description} image={imageArrayPath[index]}/>
                    ))}
                </Row>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Home;