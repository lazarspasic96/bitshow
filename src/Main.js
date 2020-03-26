import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './containers/LandingPage/LandingPage'
import ShowCard from './components/ShowCard/ShowCard'


const Main = () => {
    return <main>
        <Switch >
            <Route exact path='/' component={LandingPage} />
            <Route path='/:id' component={ShowCard} />
        </Switch>

    </main>
}

export default Main;