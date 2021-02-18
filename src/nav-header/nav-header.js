import React from 'react';
import { Link } from 'react-router-dom';
import './nav-header.css';

export default function HeaderNav() {
    return (
        <header className='app-header'>

            <div className='app-title' >
                <Link to='/'>
                    <h1>Gear Vault</h1>
                </Link>
            </div>
            
            <nav className='app-nav'>
                <Link to='/'>
                    <h3>Home</h3>
                </Link>
                <Link to='/list'>
                    <h3>List</h3>
                </Link>
                <Link to='/about'>
                    <h3>About</h3>
                </Link>
            </nav>

        </header>
    )
}