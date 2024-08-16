// components/introduction.js

import React from 'react';
import './introduction.css';

function introduction() {
    return (
        <section className='Main-section'>
            <section className='sub-section'>
                <h1>Hello! </h1>
                <h3>I am Roaa Khaled </h3>
                <h3>a third year computer science student</h3>
            </section>

            <img src='/images/Portrait_Photo.png' alt="Roaa Khaled" className="portrait-photo" />
        </section>
    );
}

export default introduction;
