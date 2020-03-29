import React from 'react'
import ShowCard from '../../components/ShowCards/ShowCard'
import classes from './LandingPage.module.css'
import http from '../../services/HttpServices'
import Show from '../../models/Show'
import SearchBox from '../../components/SearchBox/SearchBox'



class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            search: ''
        }
    }

    searchHnadler = (event) => {
        const value = event.target.value.toLowerCase() 
        this.setState({ search: value })
    }

    componentDidMount() {
        http.get().then(res => {
            console.log(res.data)
            res.data.sort((a, b) => b.rating.average - a.rating.average).length = 51
            this.setState({ shows: res.data.map(show => new Show(show)) })
        })
    }




    render() {





        if (this.state.shows === false) {
            return <p>Loading....</p>
        }

        let displayShow = this.state.shows
        let filterShow = displayShow.filter(show => {
            if (show.getName().includes(this.state.search)) {
                return true
            }
        });

        if (this.state.search) {
            displayShow = filterShow
        }

        return <div className={[classes.LandingPage, 'container'].join(' ')}>

            <SearchBox onChange={this.searchHnadler} />


            <div className='row'>



                {displayShow.map(show => <ShowCard key={show.id} showInfo={show} />)}

            </div>
        </div>
    }
}

export default LandingPage;