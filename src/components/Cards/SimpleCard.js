import React from 'react'

const SimpleCard = ({ title, text }) => {
    return (
        <div className="card card-style simple">
            <h5 className="card-header">{title}</h5>
            <p className="card-text">{text}</p>
        </div>
    )
}

export default SimpleCard