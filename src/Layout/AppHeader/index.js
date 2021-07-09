import React, {Fragment} from 'react';
import cx from 'classnames';

import {connect} from 'react-redux';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import HeaderLogo from '../AppLogo';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            enableHeaderShadow
        } = this.props;
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    className={cx("app-header", {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <HeaderLogo/>
                    <h4 style={{marginLeft:"15px"}}> The Movie Search</h4>


                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);