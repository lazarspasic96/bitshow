import React from 'react'
import classes from './SingleShowCard.module.css';
import Button from '../../UI/Button/Button'
import { withRouter } from 'react-router-dom'


const SingleShowCard = (props) => {

    const { description, genres } = props.show





    function innerHtml() {
        return { __html: description }
    }

    function filterGenres() {

        props.history.push({
            pathname: '/genres',
            state: { detail: props.location.state.allShowsInfo }

        })
    }


    return (
        <>
            <div className='row' >
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-image">
                            <img className={classes.Img} src={props.show.image} alt='' />
                        </div>
                    </div>
                </div>

                <div className={[classes.Description, 'col s12 m6 l6'].join(' ')} >
                    <h4>{props.show.name}</h4>
                    {genres ? genres.map(genre => <Button click={filterGenres} key = {genre}>{genre}</Button>) : null}
                    <p style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={innerHtml()} />
                </div>
            </div>
            <hr className={classes.hr} />


        </>

    )
}


export default withRouter(SingleShowCard);