import React, {Component, Fragment, useEffect, useState} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter, Button, CardText} from "reactstrap";
import axios from "axios";

import AddToCard from "../ModalMovies/AddToCart"
import {Link} from "react-router-dom";


const ThisCardMovie = (props) => {
    const [img, setImg] = useState("")

    const [addToCartModal, setAddToCartModal] = useState("")

    useEffect(() => {
            axios.get('http://localhost:1818/api/movies/getImage/' + props.id).then(res => {
                setImg(res.data)
            })
        }, []
    )


    const toggleAddToCart = () => {
        setAddToCartModal(!addToCartModal)
        // onSubmit();
    }

    const onChangeToggleAddToCart = () => {
        setAddToCartModal(!addToCartModal)
    }


    // const onSubmit = () => {
    //     const formData = new FormData();
    //
    //     const json = {
    //         "addToCart": [
    //             {
    //                 "id": props.id,
    //                 "idMovie": props.id,
    //                 "idUser" : 1
    //             }
    //         ]
    //     };
    //     console.log(json)
    //     const blobDoc = new Blob([json], {
    //         type: 'application/json'
    //     });
    //
    //     formData.append('data', json)
    //
    //
    //     console.log(formData)
    //     axios.post("http://localhost:1818/api/like", json)
    //         .then(res => console.log(res.data))
    //
    // }

    return (
        <Fragment>
            <Col sm="3">
                <Card className="main-card mb-3">
                    <CardImg top width="100%"
                             src={"data:image/*;base64," + img}
                             alt={props.title} style={{backgroundSize: "cover", height: "300px"}} className="mt-3"/>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.categoryMovies}
                            <br/> Year {props.year}
                        </CardSubtitle>
                        <CardText>
                            <strong>{props.description}</strong>
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        {/*<Button style={{margin:"auto"}}color="warning" type="button" onClick={()=>toggleAddToCart()}>Like This</Button>*/}
                        {/*<Link to="/movies/deskripsi" style={{textDecoration: "none"}}>*/}
                            <Button style={{margin:"auto"}}color="warning" type="button" onClick={()=>toggleAddToCart()}>More Info</Button>
                        {/*</Link>*/}
                    </CardFooter>
                    <AddToCard toggle={() => {
                        toggleAddToCart()
                    }} modal={addToCartModal} onChangeToggle={onChangeToggleAddToCart}/>

                </Card>
            </Col>

        </Fragment>
    )
}

export default ThisCardMovie