import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './containers/LandingPage/LandingPage'
import SingleShow from './containers/SingleShow/SingleShow'


const Main = () => {
    return <main>
        <Switch >
            <Route exact path='/' component={LandingPage} />
            <Route path='/show/:id' component={SingleShow} />
        </Switch>

    </main>
}

export default Main;