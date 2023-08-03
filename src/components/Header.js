import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    return (
        <header>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DNV5gnALeYdtY8WvZMF4dbxdFr1bjjkVEQ&usqp=CAU"
                alt='Randit'
                className='randit--logo' />
            <h1 className='randit--title'>Randdit</h1>
            <div className='mode' onClick={props.mode} >
                {props.theme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faLightbulb} />}
            </div>
        </header>
    )
}