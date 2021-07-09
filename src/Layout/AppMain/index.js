import { Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';


const Homepage = lazy(()=> import('../../DemoPages/Homepage'));

const HomepageAdm = lazy(()=> import('../../DemoPages/HomepageAdmin'));

const UserPages = lazy(()=> import('../../DemoPages/UserPages'));

const About = lazy(()=> import('../../DemoPages/AboutUs'));
const Activities = lazy(()=> import('../../DemoPages/Activities'));


const Movies = lazy(()=> import('../../DemoPages/Movie/Redirect'));
const Tvshows = lazy(()=> import('../../DemoPages/Tvshows/Redirect'));

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

                {/* Homepage Admin*/}

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
                    <Route path="/homeAdmin" component={HomepageAdm}/>
                </Suspense>

                {/* User Pages */}

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
                    <Route path="/pages" component={UserPages}/>
                </Suspense>

                {/* About Us */}

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
                    <Route path="/about" component={About}/>
                </Suspense>

                {/* Activities */}

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
                    <Route path="/activities" component={Activities}/>
                </Suspense>


                {/*Movies*/}
                <Suspense fallback={
                    <div className="loader-container">
                        <div className="loader-container-inner">
                            <div className="text-center">
                                <Loader type="ball-grid-cy"/>
                            </div>
                            <h6 className="mt-3">
                                You are redirecting to Products
                                <small>Happy Shopping!</small>
                            </h6>
                        </div>
                    </div>
                }>
                    <Route path="/movies" component={Movies}/>
                </Suspense>


                {/*TV Shows*/}
                <Suspense fallback={
                    <div className="loader-container">
                        <div className="loader-container-inner">
                            <div className="text-center">
                                <Loader type="ball-grid-cy"/>
                            </div>
                            <h6 className="mt-3">
                                You are redirecting to Products
                                <small>Happy Shopping!</small>
                            </h6>
                        </div>
                    </div>
                }>
                    <Route path="/tvshows" component={Tvshows}/>
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