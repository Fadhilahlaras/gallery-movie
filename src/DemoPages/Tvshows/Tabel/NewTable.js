import React, {Fragment, useEffect, useState} from 'react';
import ReactTable from "react-table";
import axios from "axios";
import {
    Card, CardBody,Button, CardTitle
} from 'reactstrap';

// import {GetData} from "./DataProductTable/dataData"

// import SearchBox from "../../Layout/AppHeader/Components/SearchBox";
// import PageTitle from "../../Layout/AppMain/PageTitle";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// import Header from "../../Layout/AppHeader";
import EditProduct from "../ModalTvshows/Edit";
import AddProduct from "../ModalTvshows/AddTv";
import Delete from "../ModalTvshows/Delete"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faFileExcel, faFilePdf, faTrash} from "@fortawesome/free-solid-svg-icons";


const NewTable = () => {
    const [productData, setProductData] = useState([])
    const [modalEdit, setModalEdit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [del, setDel] = useState(0)
    const [dataa, setDataa] = useState({})
    const [pictureUrl, setPictureUrl] = useState("")


    useEffect(() => {
        tampil()
    }, [del])


    const tampil = () =>{
        axios.get("http://localhost:1818/api/tvshows")
            .then(res => {
                setProductData(res.data)
            }).catch();
    }

    const toggleAdd = () => {
        setModalAdd(!modalAdd)
    }

    const toggleDelete = (id) => {
        setModalDelete(!modalDelete)
        setDel(id)
    }

    const toggleEdit = (val) => {
        setModalEdit(!modalEdit)
        console.log('toggle edit oke', val)
        axios.get('http://localhost:1818/api/tvshows/' + val).then(res => {
            setDataa(res.data)
        })
        axios.get("http://localhost:1818/api/tvshows/getImage/" + val).then(res => {
            setPictureUrl(res.data)
            console.log("ini itu picture"+res.data)
        }).catch()
    }

    const deleteData = (id) => {
        console.log("hai hapus ya")
        axios.delete('http://localhost:1818/api/tvshows/' + id).then(
            tampil
        ).catch(err => console.log(err))
        setDel(id)
        onChangeToggleDelete(false)
    }

    const onChangeToggleAdd = () => {
        setModalAdd(!modalAdd)
    }
    const onChangeToggleEdit = () => {
        setModalEdit(!modalEdit)
    }

    const onChangeToggleDelete = () => {
        setModalDelete(!modalDelete)
    }


    return (
        <Fragment>
            {/*<PageTitle*/}
            {/*    heading="Product Table"*/}
            {/*    subheading="Table for update the product"*/}
            {/*    icon="pe-7s-drawer icon-gradient bg-happy-itmeo"*/}
            {/*    breadcrumbPaths={['Home', 'Product Table']}*/}
            {/*/>*/}
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                {/*<Header/>*/}

                <Card className="main-card m-5">
                    <div className="mb-3">

                        <CardBody>
                            <CardTitle style={{paddingBottom:"20px"}}><h2>Data of All TV Shows</h2></CardTitle>
                            <Button style={{marginBottom:"20px", display:"flex", minWidth:"200px"}} color="primary" onClick={(e) => {
                                toggleAdd()
                            }}><p style={{margin:"auto", fontSize:"18px", textAlign:"center"}}>Add TV Shows Data</p></Button>
                            <ReactTable
                                data={productData}
                                filterable
                                columns={[{
                                    columns: [
                                        // {
                                        //     Header: '1',
                                        //     accessor: 'gambar',
                                        //     Cell: row => (
                                        //         <div>
                                        //             <div className="widget-content p-0">
                                        //                 <div className="widget-content-wrapper">
                                        //                     <div className="widget-content-left mr-3">
                                        //                         <div className="widget-content-left">
                                        //                             <img width={52}
                                        //                                  src={"data:image/*;base64"}
                                        //                             />
                                        //                         </div>
                                        //                     </div>
                                        //                 </div>
                                        //             </div>
                                        //         </div>
                                        //     )
                                        // },
                                        {
                                            Header: 'TV Shows ID',
                                            accessor: 'id',
                                        },
                                        {
                                            Header: 'TV Shows Category',
                                            accessor: 'categoryTvshows',
                                        },
                                        {
                                            Header: 'TV Shows Name',
                                            accessor: 'tvshowsName',
                                        },
                                        {
                                            Header: 'Year',
                                            accessor: 'year',
                                        },
                                        {
                                            Header: 'Description',
                                            accessor: 'description',
                                        },
                                        {
                                            Header: 'Picture',
                                            accessor: 'pictureUrl',
                                            // Cell: row => (
                                            //     <img src={"data:image/*;base64," + image(row.original.id)}/>
                                            // )
                                        },
                                    ]
                                },
                                    {
                                        columns: [

                                            {
                                                Header: 'Actions',
                                                accessor: 'actions',
                                                filterable: false,
                                                Cell: row => (
                                                    <div className="d-block w-100 text-center">
                                                        <Button className="mb-2 mr-2 btn-pill" color="primary"
                                                                onClick={() => {
                                                                    toggleEdit(row.original.id)
                                                                    // console.log("apa kah ini")
                                                                }}>
                                                            <FontAwesomeIcon icon={faEdit}/>
                                                        </Button>
                                                        <Button className="mb-2 mr-2 btn-pill" color="danger"
                                                                onClick={() =>
                                                                    // console.log("hapus dong")
                                                                {
                                                                    // deleteData(row.original.id)
                                                                    toggleDelete(row.original.id)
                                                                }}>
                                                            <FontAwesomeIcon icon={faTrash}/>
                                                        </Button>

                                                    </div>
                                                )
                                            }
                                        ]
                                    }]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />

                        </CardBody>
                    </div>
                </Card>
                <EditProduct toggle={() => {
                    toggleEdit()
                }} tampil={()=> {
                    tampil()
                }} modal={modalEdit} data={dataa} pictureUrl={pictureUrl} onChangeToggle={onChangeToggleEdit}/>
                <AddProduct toggle={() => {
                    toggleAdd()
                }} tampil={()=> {
                    tampil()
                }} modal={modalAdd} onChangeToggle={onChangeToggleAdd}/>
                <Delete toggle={() => {
                    toggleDelete()
                }} tampil={()=> {
                    tampil()
                }} modal={modalDelete} data={del} onChangeToggle={onChangeToggleDelete} delete={deleteData}/>

            </CSSTransitionGroup>
        </Fragment>
    )

}

export default NewTable