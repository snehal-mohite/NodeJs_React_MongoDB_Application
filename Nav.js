import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            
            
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/register' className="nav-item nav-link">Register</Link>
                    <Link to='/login' className='nav-item nav-link'>Login</Link>
                    <Link to='/user' className='nav-item nav-link'>Users</Link>
                </div>
            
        </nav>
    );
}

export default Nav;
