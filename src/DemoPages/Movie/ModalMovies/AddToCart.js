import React, {useEffect, useState} from 'react';
import "./addToCart.css"
import {
    Button, Card,
    CardBody,
    CardImg,
    CardSubtitle, CardText,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import axios from "axios";

const AddToCart = (props) => {

    return (
        <>
            <span className="mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} centered>
                        <ModalHeader toggle={props.toggle}>Congratulation!</ModalHeader>
                        <ModalBody>
                            <div>
                                <h6>Your movies has been added to your cart!</h6>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => {
                                props.onChangeToggle(false)
                            }} style={{margin:"auto"}}><p style={{fontSize:"18px", margin:"auto"}}>OK</p></Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default AddToCart