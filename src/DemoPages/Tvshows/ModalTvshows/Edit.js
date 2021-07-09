import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle, Col,
    Form,
    FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import axios from "axios";
import Select from "react-select";

const Edit = (props) => {
    // console.log("data:/image/*;base64," + props.pictureUrl)
    const [idCategory, setIdCategory] = useState(props.data.idCategory)
    const [selectOptions, setSelectOptions] = useState([]);
    const [tvshowsName, setTvshowsName] = useState(props.data.tvshowsName);
    const [year, setYear] = useState(props.data.year);
    const [description, setDescription] = useState(props.data.description);
    const [pictureUrl, setPictureUrl] = useState(props.data.pictureUrl);
    const [img, setImg] = useState(
        "data:/image/*;base64," + props.pictureUrl
    )
    const [dataLama, setDataLama] = useState(props.data)

    const onSubmit = () => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.data.id,
            "tvshowsName": tvshowsName == null ? props.data.tvshowsName : tvshowsName,
            "idCategory": idCategory == null ? props.data.idCategory : idCategory,
            "year": year == null ? props.data.year : year,
            "description": description == null ? props.data.description : description
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        // formData.append('idCategory', this.state.idCategory)
        formData.append("pictureUrl", pictureUrl == null ? props.data.pictureUrl : pictureUrl)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }

        axios.post("http://localhost:1818/api/tvshows/save", formData, config)
            .then(()=>{tampil()})

        props.onChangeToggle(false)
        setImg("");
    }

    const imagePreview = (e)=>{
        const url=URL.createObjectURL(e.target.files[0]);
        setImg(url);
        setPictureUrl(e.target.files[0])
    }

    const tampil = () =>{props.tampil()}

    const getOptions = () => {
        axios.get('http://localhost:1818/api/tvshowscategory', {
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            const data = res.data;
            const options = data.map(d => ({
                "value": d.id,
                "label": d.categoryTvshows

            }));
            setSelectOptions(options)
        })

        console.log(selectOptions)
    }



    useEffect(() => {
        getOptions();
        tampil()
    }, [])


    return (
        <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                    <ModalHeader toggle={props.toggle}>Edit TV Shows Data</ModalHeader>
                    <ModalBody>
                        <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Input TV Shows Data</CardTitle>
                                        <Form>
                                <FormGroup>
                                    <Label for="tvshowsName">TV Shows Name </Label>
                                    <Input type="text" name="tvshowsName" id="tvshowsName"
                                           placeholder={props.data.tvshowsName}
                                        // value={productName == null ?  props.data.productName : productName}
                                           onChange={(e) => {
                                               setTvshowsName(e.target.value)
                                           }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="idCategory">Category TV Shows</Label>
                                    <Select name="idCategory" id="idCategory"
                                            options={selectOptions}
                                            placeholder={props.data.categoryTvshows}
                                        // onChange={handleChangeSelect.bind(this)}
                                            onChange={(e) => {
                                                setIdCategory(e.value)
                                            }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="year">Year</Label>
                                    <Input type="datetime" name="year" id="year"
                                           placeholder={props.data.year} onChange={(e) => {
                                        setYear(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input type="textarea" name="description" id="description"
                                           placeholder={props.data.description} onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Picture of TV Shows</Label>
                                    <Input type="file" name="pictureUrl" id="pictureUrl"
                                           placeholder="Input Picture of TV Shows"
                                           onChange={(e) => {
                                               imagePreview(e)
                                           }}
                                    />
                                    <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                                     <img src={img} style={{width:"100%"}}/></div>
                                </FormGroup>
                                        </Form>
                                    </CardBody>
                        </Card>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                props.onChangeToggle(false)
                            }}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()
                            }}>Save</Button>
                        </ModalFooter>

                    </ModalBody>
                </Modal>
            </span>
    )
}

export default Edit