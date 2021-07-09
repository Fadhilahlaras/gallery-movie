import React, {Fragment, useState} from 'react';

// import Ionicon from 'react-ionicons';
import {IoIosCart} from "react-icons/io";

import {
    UncontrolledDropdown, DropdownToggle
} from 'reactstrap';


import {Link} from "react-router-dom";

const HeaderDots = () => {
    const [modal, setModal] = useState()

    // render() {
        return (
            <Fragment>
                <div className="header-dots">

                    <UncontrolledDropdown>
                        {/*<Link to="/cart" style={{textDecoration:"none"}}>*/}
                        <DropdownToggle className="p-0" color="link">
                            {(() => {
                                if (localStorage.getItem("roles") === null) {
                                    return (
                                        <Link to="/pages/login">
                                        <div className="icon-wrapper icon-wrapper-alt rounded-circle" >
                                            <div className="icon-wrapper-bg bg-success"/>
                                            <IoIosCart color="#3ac47d" fontSize="23px"/>
                                        </div>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div className="icon-wrapper icon-wrapper-alt rounded-circle" onClick={() => {
                                            setModal(!modal)
                                        }}>
                                            <div className="icon-wrapper-bg bg-success"/>
                                            <IoIosCart color="#3ac47d" fontSize="23px"/>
                                        </div>
                                    )
                                }
                            })()}
                        </DropdownToggle>
                        {/*</Link>*/}
                    </UncontrolledDropdown>

                </div>
            </Fragment>
        )
    // }
}

export default HeaderDots