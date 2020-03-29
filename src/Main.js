import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './containers/LandingPage/LandingPage'
import SingleShow from './containers/SingleShow/SingleShow'
import Genres from './containers/Genres/Genres'


const Main = () => {
    return <main>
        <Switch >
            <Route exact path='/' component={LandingPage} />
            <Route path='/show/:id' component={SingleShow} />
            <Route pathh='/genres' component = {Genres} />
        </Switch>

    </main>
}

export default Main;