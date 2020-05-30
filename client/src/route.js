import React from 'react';

// const SignUp1 = React.lazy(() => import('./components/Authentication/SignUp/Register'));
const login = React.lazy(() => import('./auth/SignIn/Login'));
const signUp = React.lazy(() => import('./auth/SignUp/SignUp'));

const route = [
    { path: '/auth/signup', exact: true, name: 'Signup', component: signUp },
    { path: '/auth/login', exact: true, name: 'login', component: login }
];

export default route;