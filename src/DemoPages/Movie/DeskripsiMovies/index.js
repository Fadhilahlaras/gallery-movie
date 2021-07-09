import React, {Component, Fragment, useEffect, useState} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter, Button, CardText} from "reactstrap";
import axios from "axios";
import KartuMovie from "../Kartu";



const DeskripsiMovie = (props) => {

    const [img, setImg] = useState("")


    // useEffect(() => {
    //         axios.get('http://localhost:1818/api/movies/getImage/' + props.id).then(res => {
    //             setImg(res.data)
    //         })
    //     }, []
    // )

    useEffect(() => {
        axios.get('http://localhost:1818/api/movies/getImage/' + props.id).then(res => {
            setImg(res.data)

            // console.log(imageArrayPath)
        })
    }, [])

    return (
        <Fragment>
            <Col sm="3">
                {/*<Card className="main-card mb-3">*/}
                {/*    <CardImg top width="100%"*/}
                {/*             src={"data:image/*;base64," + img}*/}
                {/*             alt={props.title} style={{backgroundSize: "cover", height: "300px"}} className="mt-3"/>*/}
                {/*    <CardBody>*/}
                {/*        <CardTitle>{props.title}</CardTitle>*/}
                {/*        <CardSubtitle>{props.categoryMovies}*/}
                {/*            <br/> Year {props.year}*/}
                {/*        </CardSubtitle>*/}
                {/*        <CardText>*/}
                {/*            <strong>{props.description}</strong>*/}
                {/*        </CardText>*/}
                {/*    </CardBody>*/}
                {/*    <CardFooter>*/}

                {/*    </CardFooter>*/}

                {/*</Card>*/}

            </Col>

        </Fragment>
    )
}

export default DeskripsiMovie