import React from 'react'
import ShowCard from '../../components/ShowCard/ShowCard'
import classes from './LandingPage.module.css'
import http from '../../services/HttpServices'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
    }


    componentDidMount () {

    }


    render() {
        return <div className={[classes.LandingPage, 'container'].join(' ')}>
            <div className='row'>
                <ShowCard />
                <ShowCard />
                <ShowCard />
                <ShowCard />
                <ShowCard />
            </div>
        </div>
    }
}

export default LandingPage;