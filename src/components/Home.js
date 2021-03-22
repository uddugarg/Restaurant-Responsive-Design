import gsap from 'gsap'
import React, { useEffect } from 'react'
import Banner from './Banner.js/Banner'
import Cases from './Cases/Cases'
import IntroOverlay from './IntroOverlay/IntroOverlay'

function Home() {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from('.banner__line span', 1.8, {
            y: 100,
            ease: 'power4.out',
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3
            }
        }).to('.overlay-top', 1.6, {
            height: 0,
            ease: 'expo.inOut',
            stagger: 0.4
        }).to('.overlay-bottom', 1.6, {
            width: 0,
            ease: 'ease.inOut',
            delay: -0.8,
            stagger: {
                amount: 0.4
            }
        }).to('.intro-overlay', 0, {
            css: { display: 'none' }
        }).from('.cases__img img', 1.6, {
            scale: 1.4,
            ease: 'ease.inOut',
            delay: -2,
            stagger: {
                amount: 0.4,
            }
        })

    }, [])

    return (
        <div>
            <IntroOverlay />
            <Banner />
            <Cases />
        </div>
    )
}

export default Home
