import React from 'react'
import {Link} from 'react-router-dom'

const ShowCard = (props) => (

  <Link to = {{
      pathname: `/show/${props.showInfo.id}`,
      state: {allShowsInfo: props.allShowsInfo}
  }}
     
   >
    <div className="col s12 m4">
        <div className="card hoverable">
            <div className="card-image">
                <img src={props.showInfo.image} alt="" />
                <span className="btn-floating btn-large halfway-fab blue ">{props.showInfo.rating}</span>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4 truncate">{props.showInfo.name}</span>
            </div>
        </div>
    </div>
</Link>
)

export default ShowCard