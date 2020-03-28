import React from 'react'
import http from '../../services/HttpServices'
import Show from '../../models/Show'
import classes from './SingleShow.module.css'
import SingleShowCard from '../../components/ShowCards/SingleShowCard/SingleShowCard'
import Actor from '../../models/Actor'
import Actors from '../../components/Actors/Actors'



class SingleShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: {},
            actors: []

        }
    }


    componentDidMount() {
        let id = this.props.match.params.id
        http.get(`http://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`)
            .then(show => {
                const actors = show.data._embedded.cast
                console.log(actors)
                const seasons = show.data._embedded.seasons
                console.log(seasons)
                this.setState({ show: new Show(show.data), actors: actors.map(actor => new Actor(actor)) }
                )
            }
            )

    }


    render() {

        if (this.state.show === false) {
            return <p>fff</p>
        }
        console.log(this.state.show)
        return <div className={classes.SingleShow}>
            <SingleShowCard key={this.state.show.id} show={this.state.show} />
            <div className='row'>
                <Actors actorsInfo = {this.state.actors} />
            </div>
        </div>
    }
}

export default SingleShow;