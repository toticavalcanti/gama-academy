import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes() {
    return(
        <BrowserRouter>
            <switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </switch>
        </BrowserRouter>
    )
}