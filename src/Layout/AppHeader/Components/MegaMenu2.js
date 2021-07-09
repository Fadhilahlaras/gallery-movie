import React, {Fragment} from 'react';

import {
    UncontrolledDropdown, DropdownToggle,
    Nav
} from 'reactstrap';

import {Link} from "react-router-dom";


class MegaMenu2 extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            popoverOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            popoverOpen: !this.state.popoverOpen

        });
    }

    state = {};

    render() {
        return (
            <Fragment>
                <Nav className="header-megamenu">
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <i className="nav-link-icon pe-7s-gift"> </i>
                            {(() => {
                                if (localStorage.getItem("roles") === null) {
                                    return (
                                        <Link to="/pages/login">Login</Link>
                                    )
                                } else if (localStorage.getItem("roles").includes("ROLE_ADMIN")){
                                    return (
                                        <Link to="/homeAdmin/tableMovies" style={{textDecoration:"none"}}>Manage Movies</Link>
                                    )
                                } else if (localStorage.getItem("roles").includes("ROLE_USER")) {
                                    return (
                                        <Link to="/pages/login" style={{textDecoration:"none"}}>Manage Movies</Link>
                                    )
                                }
                            })()}
                        </DropdownToggle>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <i className="nav-link-icon pe-7s-gift"> </i>
                            {(() => {
                                if (localStorage.getItem("roles") === null) {
                                    return (
                                        <Link to="/pages/login">Login</Link>
                                    )
                                } else if (localStorage.getItem("roles").includes("ROLE_ADMIN")){
                                    return (
                                        <Link to="/homeAdmin/tableTvshows" style={{textDecoration:"none"}}>Manage TV Shows</Link>
                                    )
                                } else if (localStorage.getItem("roles").includes("ROLE_USER")) {
                                    return (
                                        <Link to="/pages/login" style={{textDecoration:"none"}}>Manage TV Shows</Link>
                                    )
                                }
                            })()}
                            {/*<FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>*/}
                        </DropdownToggle>
                    </UncontrolledDropdown>
                </Nav>
            </Fragment>
        )
    }
}

export default MegaMenu2;
