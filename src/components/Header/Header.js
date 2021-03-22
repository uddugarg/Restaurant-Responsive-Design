import React, { useEffect, useState } from 'react'
import './Header.css';
import gsap from 'gsap';
import { ReactComponent as UpArrow } from '../../assests/up-arrow-circle.svg';

function Header({ dimensions }) {

    const [menu, setMenu] = useState({ open: false });

    useEffect(() => {

        let tl = gsap.timeline();

        if (menu.open === true) {
            gsap.to('nav', { css: { display: 'block' } })
            gsap.to('.header__logo > a', { css: { color: 'black' } })
            gsap.to('body', { css: { overflow: 'hidden' } })

            tl.to('.App', {
                duration: 1,
                y: dimensions.width <= 654 ? '60vh' : dimensions.height / 2,
                ease: 'expo.inOut'
            }).to('.header__hamburger > span', {
                duration: 0.6,
                delay: -1,
                scaleX: 0,
                transformOrigin: '50% 0%',
                ease: 'expo.inOut',
            }).to('.header__hamburgerClose', {
                duration: 0.6,
                delay: -0.8,
                css: {
                    display: 'block'
                }
            })
        } else {
            tl.to('.App', {
                duration: 1,
                y: 0,
                ease: 'expo.inOut'
            }).to('.header__logo > a', {
                delay: -0.5,
                css: {
                    color: 'white'
                }
            }).to('.header__hamburgerClose', {
                delay: -0.9,
                css: {
                    display: 'none',
                }
            }).to('.header__hamburger > span', {
                duration: 0.6,
                delay: -0.6,
                scaleX: 1,
                transformOrigin: '50% 0%',
                ease: 'expo.inOut',
            }).to('body', {
                css: {
                    overflow: 'auto',
                }
            }).to('nav', {
                display: 'none'
            })
        }
    }, [menu.open])

    return (
        <div className='header'>
            <div className="header__container">
                <div className="header__subContainer">
                    <div className="header__logo">
                        <a href="/">DEEP DISHES</a>
                    </div>
                    <div className="header__toggle">
                        <div className='header__hamburger' onClick={() => setMenu({ open: true })}>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='header__hamburgerClose' onClick={() => setMenu({ open: false })}>
                            <UpArrow className='header__svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
