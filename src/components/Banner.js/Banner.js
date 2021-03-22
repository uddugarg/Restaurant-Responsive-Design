import React from 'react';
import { ReactComponent as RightArrow } from '../../assests/arrow-right.svg';
import './Banner.css';

function Banner() {
    return (
        <section className='banner'>
            <div className="banner__container">
                <div className="banner__subContainer">
                    <h2>
                        <div className="banner__line">
                            <span>Let's Drown Deeper</span>
                        </div>
                        <div className="banner__line">
                            <span>into the dishes</span>
                        </div>
                    </h2>
                    <div className="banner__btn">
                        <a href="/">Order Now<RightArrow className='svg' /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
