import React from 'react'
import ActorCard from './ActorCard/ActorCard'

const Actors = (props) => {
    return (
       <div>
           <h4 style = {{textAlign: "center"}}>Cast</h4>
           {props.actorsInfo.map(actor => <ActorCard key={actor.id} actor={actor} />)}
       </div>
    )
}

export default Actors