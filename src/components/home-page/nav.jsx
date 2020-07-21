import React from 'react';
import '../styleIdea1.css';

const Nav = () => {
    return (
        <div className="navigation-container">
            <ul>
                <li><button href="#">PROJECTS</button></li>
                <li><button href="#">KATAS</button></li>
                <li><button href="#">ABOUT ME</button></li>
                <li><button href="#">CONTACT</button></li>
            </ul>
        </div>
    )
}

export default Nav;