// components/header.js

import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header"> { }
            <div className='row-1'>
                <h1>ROAA KHALED</h1>
                <div className="email">
                    <a href="mailto:rkhaledx@gmail.com">
                        <i className="fas fa-envelope"></i>
                        <span >Rkhaledx@gmail.com</span>
                    </a>
                </div>

            </div>
            <div className='row-2'>
                <h3>My Projects</h3>
                <h3>Collaborative Projects </h3>
                <h3>Work Experience</h3>
                <h3>Courses Taken</h3>
                <h3>Skills</h3>
            </div>
        </header>
    );
}

export default Header;
