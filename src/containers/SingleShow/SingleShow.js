import React from 'react'
import http from '../../services/HttpServices'
import Show from '../../models/Show'
import classes from './SingleShow.module.css'
import SingleShowCard from '../../components/ShowCards/SingleShowCard/SingleShowCard'



class SingleShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: {}
        }
    }


    componentDidMount() {
        let id = this.props.match.params.id
        http.get(`http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`)
            .then(show => {
                const actors = show.data._embedded.cast
                const episodes = show.data._embedded.episodes
                actors.length = 6
                this.setState({ show: new Show(show.data) }
                )
            }
            )

    }


    render() {

        if (this.state.show === false) {
            return <p>fff</p>
        }
        console.log(this.state.show)
        return <div className = {classes.SingleShow}>
            <SingleShowCard key={this.state.show.id} show = {this.state.show} />
        </div>
    }
}

export default SingleShow;