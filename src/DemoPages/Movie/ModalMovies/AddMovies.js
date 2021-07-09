import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import Select from "react-select";

const AddMovies = (props) => {
    const [idCategory, setIdCategory] = useState(0)
    const [selectOptions, setSelectOptions] = useState([]);
    const [moviesName, setMoviesName] = useState("");
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState(0);
    const [picture, setPicture] = useState();
    const [img, setImg] = useState()

    const onSubmit = () => {

        const formData = new FormData();
        const json = JSON.stringify({
            "moviesName": moviesName,
            "idCategory": idCategory,
            "year": year,
            "description": description,
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append('pictureUrl', picture)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:1818/api/movies/save", formData, config)
            .then(props.tampil).catch()

        props.onChangeToggle(false)
        props.tampil();
        setImg("");
    }

    const imagePreview = (e)=>{
        const url=URL.createObjectURL(e.target.files[0]);
        setImg(url);
        setPicture(e.target.files[0])
    }


    const getOptions = () => {
        console.log("why im not around")
        axios.get('http://localhost:1818/api/moviescategory', {
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            const data = res.data;
            const options = data.map(d => ({
                "value": d.id,
                "label": d.categoryMovies

            }));
            setSelectOptions(options)
        })

        console.log(selectOptions)
    }

    // const tampil = () =>{props.tampil}

    useEffect(() => {
        getOptions();
    }, [])

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle}>
                        <ModalHeader toggle={props.toggle}>Input Movies Data</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="name">Movies Name</Label>
                                    <Input type="text" name="name" id="name"
                                           placeholder="Input Name of Movies" onChange={(e) => {
                                        setMoviesName(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Category Movies</Label>
                                    <Select name="idCategory" id="idCategory"
                                            options={selectOptions}
                                        // onChange={handleChangeSelect.bind(this)}
                                            onChange={(e)=>{setIdCategory(e.value)}}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="year">Year</Label>
                                    <Input type="datetime" name="year" id="year"
                                           placeholder="Input Year of Movies" onChange={(e) => {
                                        setYear(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input type="textarea" name="description" id="description"
                                           placeholder="Input Description of Movies" onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Picture of Movies</Label>
                                    <Input type="file" name="picture" id="picture" accepts="image/*"
                                           placeholder="Input Picture of Movies"
                                           onChange={(e) => {
                                               imagePreview(e)
                                           }}
                                    />
                                    <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                                     <img src={img} style={{width:"100%"}}/></div>
                                </FormGroup>
                            </Form>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                props.onChangeToggle(false)
                            }}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()
                            }}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default AddMovies;