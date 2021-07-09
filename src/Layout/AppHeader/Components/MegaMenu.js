import React, {Fragment} from 'react';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Nav
} from 'reactstrap';

import bg3 from '../../../assets/utils/images/dropdown-header/abstract3.jpg';
import bg2 from '../../../assets/utils/images/dropdown-header/city2.jpg';

import {
    faAngleDown,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";


class MegaMenu extends React.Component {
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
                            <i className="nav-link-icon pe-7s-gift" style={{textDecoration:"none"}}> </i>
                            Movies
                            <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-rounded dropdown-menu-lg rm-pointers">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-success">
                                    <div className="menu-header-image opacity-2"
                                         style={{
                                             backgroundImage: 'url(' + bg2 + ')'
                                         }}
                                    />
                                    <div className="menu-header-content text-left">
                                        <h5 className="menu-header-title">Movies</h5>

                                    </div>
                                </div>
                            </div>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/movies/now-playing" style={{textDecoration:"none"}}>Now Playing</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/movies/upcoming" style={{textDecoration:"none"}}>Upcoming</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/movies/completed" style={{textDecoration:"none"}}>Completed</Link>
                            </DropdownItem>

                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <i className="nav-link-icon pe-7s-gift" style={{textDecoration:"none"}}> </i>
                            TV Shows
                            <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-rounded dropdown-menu-lg rm-pointers">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-success">
                                    <div className="menu-header-image opacity-2"
                                         style={{
                                             backgroundImage: 'url(' + bg3 + ')'
                                         }}
                                    />
                                    <div className="menu-header-content text-left">
                                        <h5 className="menu-header-title">TV Show</h5>

                                    </div>
                                </div>
                            </div>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/tvshows/now-playing" style={{textDecoration:"none"}}>Now Playing</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/tvshows/upcoming" style={{textDecoration:"none"}}>Upcoming</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/tvshows/completed" style={{textDecoration:"none"}}>Completed</Link>
                            </DropdownItem>

                        </DropdownMenu>
                    </UncontrolledDropdown>

                </Nav>
            </Fragment>
        )
    }
}

export default MegaMenu;
