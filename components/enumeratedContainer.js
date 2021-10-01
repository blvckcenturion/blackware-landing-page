import React from 'react'

const EnumeratedContainer = ({ n, content }) => {
    return (
        <div className="enumerated-container">
            <div className="enumerated-container__number">
                <h4>
                    {n}.
                </h4>
            </div>
            <div className="enumerated-container__content">
                <p>
                    { content }
                </p>
            </div>
        </div>
    )
}

export default EnumeratedContainer
