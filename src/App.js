import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {

    return (
        <Container maxWidth="lg">
            <Navbar />
            <Home />
        </Container>
    );
}

export default App;
