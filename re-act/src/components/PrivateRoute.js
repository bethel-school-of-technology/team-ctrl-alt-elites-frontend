import { Navigate, Route } from "react-router-dom";
import React, { Redirect } from 'react';


const PrivateRoute = ({ component: Component, ...rest }) => {


    //let auth = useAuth();

    const token = localStorage.getItem('myJWT');
    const isLoggedIn = !! token;


    if (!token) {
        //redirect
        Navigate('/login');
    } 

    return (
        <Route
        {...rest}
        render = {( props ) => {
            //get props from router (,,,rest) add token property to props. and pass in token
            //so that all children havde access to the token.
            props.token = token;
            //auth.user 
            return isLoggedIn ? (
                //takes token from local storage - adds it to props - and makes sure 
                //that when i render that component i passed the props
                <Component {...props} />
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
                />
            )
        }
    }
    />
    ); 
}

export default PrivateRoute;