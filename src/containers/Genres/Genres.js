import React from 'react'
import http from '../../services/HttpServices'
import Show from '../../models/Show'
import ShowCard from '../../components/ShowCards/ShowCard'
import classes from './Genres.module.css'


class Genres extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
    }



    componentDidMount() {
        const genre = new URLSearchParams(this.props.location.search).get('genre')
        http.get().then(res => {

            const filter = res.data.filter(show => {
                if (show.genres.includes(genre)) {
                    return true
                }
            })
            this.setState({ shows: filter.map(show => new Show(show)) })
        })
    }





    render() {
        const genre = new URLSearchParams(this.props.location.search).get('genre')
        if (this.state.allShows === false) {
            return <p>Loading</p>
        }




        return <div className={classes.Genres}>
            <div className='row'>
                <h2 className={classes.Heading}>{genre}</h2>
                {this.state.shows.map(show => <ShowCard key={show.id} showInfo={show} />)}
            </div>
        </div>

    }
}
export default Genres