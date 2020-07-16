import React from 'react';

const Navbar = () => {
    return(
        <nav className='ui raised very padded segment'>
        <a className='ui teal inverted segment'>Gloria</a>
        <div className='ui right floated header inverted segment'>
        <button className='ui inverted primary basic button'><a href="/Home">Home</a></button>
        <button className='ui button'><a href="/Contacts">Contacts</a></button>
        <button className='ui basic pink button'><a href="/About">About</a></button>
        </div>
        </nav>

    )
}


export default Navbar;