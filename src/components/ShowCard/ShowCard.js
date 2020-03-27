import React from 'react'
import {Link} from 'react-router-dom'

const ShowCard = (props) => (

  <Link to = {`/show/${props.showInfo.id}`} >
    <div className="col s12 m4">
        <div className="card hoverable">
            <div className="card-image">
                <img src={props.showInfo.image.medium} alt="" />
                <span className="btn-floating btn-large halfway-fab blue ">{props.showInfo.ratings}</span>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4 truncate">{props.showInfo.name}</span>
            </div>
        </div>
    </div>
</Link>
)

export default ShowCard