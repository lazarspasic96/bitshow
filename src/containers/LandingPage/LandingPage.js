import React from 'react'
import ShowCard from '../../components/ShowCard/ShowCard'
import classes from './LandingPage.module.css'
import http from '../../services/HttpServices'
import Show from '../../models/Show'



class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
    }

    componentDidMount() {
        http.get().then(res => {
            console.log(res.data)
            res.data.sort((a,b)=> b.rating.average - a.rating.average).length =50
            this.setState({shows: res.data.map(show => new Show (show))})
        })
    }


 

    render() {
     
    
  
        if (this.state.shows === []) {
            return <p>Loading....</p>
        } 
  
        return <div className={[classes.LandingPage, 'container'].join(' ')}>
            <div className='row'>

                {this.state.shows.map(show => <ShowCard showInfo ={show} />)}

            </div>
        </div>
    }
}

export default LandingPage;