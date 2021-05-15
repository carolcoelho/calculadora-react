import React from 'react'
import './Button.css'

export default function Button(props) {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''

    return (
        <>
            <button className={classes} onClick={event => props.click && props.click(props.label)}>{props.label}</button>

        </>
    )
}


