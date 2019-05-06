import React from 'react'

const Person = (props) => {
    return (
        <div className="">
            <p>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;