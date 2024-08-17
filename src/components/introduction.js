// components/introduction.js

import React from 'react';
import './introduction.css';

function introduction() {
    return (
        <section className='Main-section'>
            <div>
                <section className='sub-section'>
                    <span className='hello'>Hello! </span>
                    {/*  <span>I am Roaa Khaled </span>
                <br></br>
                <span>a third year computer science student</span> */}
                    <p>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>
                <div className='sub-section1'>
                    <button className="connect-button">
                        Let's Connect !
                    </button>
                </div>
            </div>
            <img src='/images/Portrait_Photo.png' alt="Roaa Khaled" className="portrait-photo" />
        </section>
    );
}

export default introduction;
