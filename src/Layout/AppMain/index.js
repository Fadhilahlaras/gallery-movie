import { Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';


const Homepage = lazy(()=> import('../../DemoPages/Homepage'));

const AppMain = () => {

        return (
            <Fragment>

                {/* Homepage */}

                <Suspense fallback={
                    <div className="loader-container">
                        <div className="loader-container-inner">
                            <div className="text-center">
                                <Loader type="ball-spin-fade-loader"/>
                            </div>
                            <h6 className="mt-5">
                                Please wait while we load all the Components examples
                                <small>Because this is a demonstration we load at once all the Components examples. This
                                    wouldn't happen in a real live app!</small>
                            </h6>
                        </div>
                    </div>
                }>
                    <Route path="/home" component={Homepage}/>
                </Suspense>



                {/*Untuk redirect langsung saat diklik localhost:3000 pertama kali*/}

                <Route exact path="/" render={() => (
                    <Redirect to="/home/dashboard"/>
                )}/>
                <ToastContainer/>
            </Fragment>
        );
};

export default AppMain;