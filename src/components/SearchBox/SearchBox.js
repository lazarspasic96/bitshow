import React from 'react'
import classes from './SearchBox.module.css'



class SearchBox extends React.Component {
    constructor(props) {
        super(props)
    }





    render() {
        return (
            <div className={classes.wrap}>
            <div className={classes.search}>
               <input onChange = {this.props.onChange} type="text" className={classes.searchTerm} placeholder='Search for shows' />
            </div>
         </div>
        )
    }
}

export default SearchBox;