import React from 'react'

const Footer = () => {

    const d = new Date().getFullYear();
    return (
        <div>
            <div className='footer'>
                <p> copywrite &copy; {d} </p>
            </div>

        </div>
    )
}

export default Footer
