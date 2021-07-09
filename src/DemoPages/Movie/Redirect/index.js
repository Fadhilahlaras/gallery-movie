import React, {Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/index";

import Upcoming from "../Home/upcoming";
import Nowplaying from "../Home/nowplaying";
import Completed from "../Home/completed";
import HomePage from "../Home";
import Deskripsi from "../DeskripsiMovies";
import {Route} from "react-router-dom";
import Table from "../../Movie/Tabel/NewTable";

const Home = ({match}) => {
    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className="app-main">
                    <div className="app-main__inner">

                        {/*Home Product*/}
                        <Route path={`${match.url}/home`} component={HomePage}/>

                        <Route path={`${match.url}/upcoming`} component={Upcoming}/>

                        <Route path={`${match.url}/now-playing`} component={Nowplaying}/>

                        <Route path={`${match.url}/completed`} component={Completed}/>

                        <Route path={`${match.url}/deskripsi`} component={Deskripsi} />

                        <Route path={`${match.url}/table`} component={Table} />

                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Home;