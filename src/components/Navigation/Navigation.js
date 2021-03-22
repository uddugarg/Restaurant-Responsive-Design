import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css';
import NearMeIcon from '@material-ui/icons/NearMe';

function Navigation() {
    return (
        <nav className='nav'>
            <div className="nav__container">
                <div className="nav__columns">
                    <div className="nav__column">
                        <div className="nav__label">Menu</div>
                        <ul className="nav__links">
                            <li>
                                <Link to='/'>
                                    Our Menu
                            </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Store Locator
                            </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Gift Cards
                            </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Contact Us
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__column">
                        <div className="nav__label">Contact</div>
                        <div className="nav__infos">
                            <ul className="nav__info">
                                <li className="nav__infoLabel">
                                    Email
                                </li>
                                <li>
                                    <Link to='/'>
                                        deep_dish@deepdish.com
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Visit us
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav__info">
                                <li className="nav__infoLabel">Address</li>
                                <li>21, ipsum dolor.</li>
                                <li>Chicago</li>
                                <li>
                                    <Link to='/'>
                                        Find us on Google Map <NearMeIcon fontSize='small' />
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav__info">
                                <li className="nav__infoLabel">Phone</li>
                                <li>+91-9090909090</li>
                            </ul>
                            <ul className="nav__info">
                                <li className="nav__infoLabel">Legal</li>
                                <li>
                                    <Link to='/'>
                                        Privacy & Cookies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
