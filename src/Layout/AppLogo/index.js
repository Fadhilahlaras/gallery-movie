import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import logo from '../../assets/utils/images/green_app_icon.svg';


import {
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../reducers/ThemeOptions';
import {Link} from "react-router-dom";

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false
        };

    }

    toggleEnableClosedSidebar = () => {
        let {enableClosedSidebar, setEnableClosedSidebar} = this.props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }

    state = {
        openLeft: false,
        openRight: false,
        relativeWidth: false,
        width: 280,
        noTouchOpen: false,
        noTouchClose: false,
    };

    render() {
        return (
            <Fragment>

                <div>

                    {(() => {
                        if (localStorage.getItem("roles") === null) {
                            return (
                                <Link to={"/home/dashboard"}>
                                    <img style={{paddingLeft:"30px"}} alt="app icon" width="90" src={logo} route="/home/dashboard"/>
                                </Link>
                            )
                        } else if (localStorage.getItem("roles").includes("ROLE_ADMIN")) {
                            return (
                                <Link to={"/homeAdmin/dashboardAdm"}>
                                    <img style={{paddingLeft:"40px"}} src={logo} sizes={1} route="/home/dashboard"/>
                                </Link>
                            )
                        } else if (localStorage.getItem("roles").includes("ROLE_USER"))  {
                            return (
                                <Link to={"/home/dashboard"}>
                                    <img style={{paddingLeft:"40px"}} src={logo} sizes={1} route="/home/dashboard"/>
                                </Link>
                            )
                        }
                    })()}
                </div>

            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableClosedSidebar: enable => dispatch(setEnableClosedSidebar(enable)),
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);