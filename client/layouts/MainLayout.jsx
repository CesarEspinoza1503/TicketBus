import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>Ticket Shop</h2>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/myaccount">My Account</a> 
                <AccountsUI />
            </nav>
        </header>
        <main>
            {content}
        </main>
    </div>
)