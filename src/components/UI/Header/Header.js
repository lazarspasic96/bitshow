
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="blue darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo card-title">
                        BitShow
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/about"><span>About</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header