import { Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';

const Tvshows = lazy(() => import('../Tvshows/Redirect'));

const AppMain = () => {

    return (
        <Fragment>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-grid-cy"/>
                        </div>
                        <h6 className="mt-3">
                            You are redirecting to All List Tv Shows
                            <small>Happy Watching!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/tvshows" component={Tvshows}/>
            </Suspense>


            <Route exact path="/" render={() => (
                <Redirect to="/tvshows/home"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;