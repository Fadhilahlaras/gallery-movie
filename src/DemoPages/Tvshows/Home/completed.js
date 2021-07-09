import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/index";
import {Col, Row} from "reactstrap";
import ThisCard from "../Kartu";
import axios from "axios";
import bg1 from "../../../assets/utils/images/originals/city.jpg";

const Completed = () => {
    console.log("udah ada")
    const [dataCard, setDataCard] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1818/api/tvshows/category/3").then(res => {
            setDataCard(res.data)

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

                <Row>
                    <Col md="12">

                        <div
                            className="p-5 bg-plum-plate">
                            <div className="slide-img-bg"
                                 style={{
                                     fade: true,
                                     backgroundImage: 'url(' + bg1 + ')',
                                     color: "white", textAlign: "center"
                                 }}/>
                            <div className="slider-content" style={{
                                color: "white", textAlign: "center"
                            }}>
                                <h3>Completed TV Shows</h3>
                            </div>
                        </div>

                    </Col>

                </Row>
                <Row>
                    {dataCard.map((card, index) => (
                        <ThisCard key={index} id={card.id} title={card.tvshowsName} categoryTvshows={card.categoryTvshows}
                                  year={card.year} description={card.description}/>
                    ))}
                </Row>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Completed;