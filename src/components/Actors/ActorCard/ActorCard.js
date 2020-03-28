import React from 'react'
import classes from './ActorCard.module.css'



const ActorCard = (props) => {

    return <div className="col s6 m3 xl2">
            <div className= {[classes.ActorCard, 'card'].join(' ')}>
                <div className="card-image">
                    <img src={props.actor.image} alt="" />
                    <span className= {[classes.ActorName, 'card-title'].join(' ')}>{props.actor.name}</span>
                </div>
            </div>
   
    </div>
}

export default ActorCard