import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo"><h1>G</h1></div>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT </a></li>
                    <li><a href="contact">CONTACT</a></li>
                </ul>
            </nav>
            <button>login </button>
        </header>
    )
}

export default Header