import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <a onClick = {props.click} className={[classes.Button, "waves-effect waves-light btn-small"].join(' ')}>{props.children}</a>
    )
}

export default Button