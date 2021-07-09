import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import axios from "axios";
import Select from "react-select";
// import FormProduct from "../Form";


const ModalAja = (props) => {
    const [data, setData] = useState("");
    const [idCategory, setIdCategory] = useState(data.idCategory);
    const [selectOption, setSelectOption] = useState();
    const [tvshowsName, setTvshowsName] = useState();
    const [year, setYear] = useState();
    const [description, setDescription] = useState();
    const [picture, setPicture] = useState();


    const onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": this.props.id,
            "tvshowsName": tvshowsName == null ? this.props.tvshowsName : tvshowsName,
            "idCategory": idCategory == null ? this.props.idCategory : idCategory,
            "year": year == null ? this.props.year : year,
            "description": description == null ? this.props.description : description
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        // formData.append('idCategory', this.state.idCategory)
        formData.append("pictureUrl", picture)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:1818/api/tvshows/save", formData, config)
            .then(res => console.log(res.data))
    }

    const getOptions = async () => {
        const res = await axios.get('http://localhost:1818/api/tvshowscategory', {
            headers: {'Content-Type': 'application/json'}
        })
        const data = res.data

        const options = data.map(d => ({
            "value": d.id,
            "label": d.categoryTvshows

        }))

        setSelectOption(options)
    }

    const handleChangeSelect = (e) => {
        setIdCategory(e.value)
    }

    useEffect(() => {
        getOptions()
    })


    useEffect(() => {
        axios.get('http://localhost:1818/api/tvshows/' + props.idPro).then(res => {
            setData(res.data)
            console.log(res.data)
        })
    })

    console.log(data.id)
    return (
        <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                    <ModalHeader toggle={props.toggle}>Edit TV Shows</ModalHeader>
                    <ModalBody>
                        <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Input TV Shows Data</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="name">TV Shows Name</Label>
                                                <Input type="text" name="name" id="name"
                                                        placeholder={data.tvshowsName}
                                                       onChange={(e)=>{setTvshowsName(e.value)}}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="category">Category TV Shows</Label>
                                                <Select name="idCategory" id="idCategory" placeholder={data.categoryTvshows}
                                                        options={selectOption}
                                                        onChange={handleChangeSelect.bind(this)}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="year">Year</Label>
                                                <Input type="datetime" name="year" id="year"
                                                       placeholder={data.year}
                                                       onChange={(e)=>{setYear(e.value)}}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="description">Description</Label>
                                                <Input type="textarea" name="description" id="description"
                                                       placeholder={data.description}
                                                       onChange={(e)=>{setDescription(e.value)}}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Picture of TV Shows</Label>
                                                <Input type="file" name="pictureUrl" id="pictureUrl"
                                                       placeholder="Input Picture of TV Shows"
                                                       onChange={(e)=>{setPicture(e.files[0])}}
                                                />
                                            </FormGroup>

                                        </Form>
                                    </CardBody>
                                </Card>


                    </ModalBody>

                    <ModalFooter>
                        <Button color="link" onClick={props.toggle}>Cancel</Button>
                        <Button type="button" className="mt-1" color="primary"
                        onClick={onSubmit}>Submit</Button>
                    </ModalFooter>
                </Modal>
            </span>
    )

}

export default ModalAja;