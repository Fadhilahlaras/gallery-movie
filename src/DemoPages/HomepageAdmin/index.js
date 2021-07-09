import React, {Fragment} from "react";

import {Route} from "react-router-dom";
import DashboardAdm from "./DashboardAdm";

import AppHeader2 from "../../Layout/AppHeader/index3";
import TableMovies from "../Movie/Tabel/NewTable";
import TableTvShows from "../Tvshows/Tabel/NewTable";


const Homepage = ({ match }) => (

    <Fragment>
        <AppHeader2/>

        <div className="app-main">

            <div className="app-main__inner">


                <>
                        {/*Dashboard Admin*/}
                        <Route path={`${match.url}/dashboardAdm`} component={DashboardAdm} />
                        {/*ManagedProduct*/}
                        <Route path={`${match.url}/tableMovies`} component={TableMovies}/>
                        {/*Managed Team*/}
                        <Route path={`${match.url}/tableTvshows`} component={TableTvShows}/>
                    </>

            </div>
        </div>
    </Fragment>
);

export default Homepage;
