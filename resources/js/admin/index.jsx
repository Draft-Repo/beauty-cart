import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11'; // For IE 11 support
import React, {Component, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import './Index.scss';



const isLoggedIn = true;
// Cookies.get('sankar');

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login.jsx'));
const Register = React.lazy(() => import('./views/Pages/Register.jsx'));
const Page404 = React.lazy(() => import('./views/Pages/Page404.jsx'));
const Page500 = React.lazy(() => import('./views/Pages/Page500.jsx'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={loading()}>
                <Switch>
                    <Route exact path="/login" name="Login Page"
                           render={props => !isLoggedIn ? <Login {...props}/> : <Redirect to="/"/>}/>
                    <Route exact path="/register" name="Register Page"
                           render={props => !isLoggedIn ? <Register {...props}/> : <Redirect to="/"/>}/>
                    <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>}/>
                    <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>}/>
                    <Route path="/" name="Home"
                           render={props => isLoggedIn ? <DefaultLayout {...props}/> : <Redirect to="/login"/>}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));

