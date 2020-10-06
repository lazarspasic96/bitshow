import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './containers/LandingPage/LandingPage'
import SingleShow from './containers/SingleShow/SingleShow'
import Genres from './containers/Genres/Genres'
import About from './components/AboutPage/About'



const Main = () => {
    return <main>
        <Switch >
            <Route exact path='/' component={LandingPage} />
            <Route path='/show/:id' component={SingleShow} />
            <Route path='/genres' component = {Genres} />
            <Route path='/about' component = {About} />
            <Redirect to ='/' />
        </Switch>

    </main>
}

export default Main;