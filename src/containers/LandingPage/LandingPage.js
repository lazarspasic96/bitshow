import React from 'react'
import ShowCard from '../../components/ShowCards/ShowCard'
import classes from './LandingPage.module.css'
import http from '../../services/HttpServices'
import Show from '../../models/Show'
import SearchBox from '../../components/SearchBox/SearchBox'
import Spinner from '../../components/UI/Spinner/Spinner'
import Error from '../../components/UI/Error/Error'




class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            search: '',
            error: false
        }
    }

    searchHnadler = (event) => {
        const value = event.target.value.toLowerCase() 
        this.setState({ search: value })
    }

    componentDidMount() {
        
            http.get().then(res => {
  
            res.data.sort((a, b) => b.rating.average - a.rating.average).length = 51
            this.setState({ shows: res.data.map(show => new Show(show)) })
        })
        .catch(err => this.setState({error: true}))

       
    }




    render() {
        const {shows, error, search} = this.state
        if (this.state.shows === []) {
            return <Spinner />
        }

        let displayShow = shows
        let filterShow = displayShow.filter(show => {
            if (show.getName().includes(search)) {
                return true
            }
        });

        if (search) {
            displayShow = filterShow
        }
        if (error) {
            return <Error />
        }

        return (
            <div className={[classes.LandingPage, 'container'].join(' ')}>
          
            <SearchBox onChange={this.searchHnadler} />
            <div className='row'>
            {displayShow.map(show => <ShowCard key={show.id} showInfo={show} />)}
            </div>
        </div>
        )
       
    }
}

export default LandingPage;