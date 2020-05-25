import React from 'react';

import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            active: false
        };
    }

    toggleMenu() {
        if (window.innerWidth < 700) {
            const currentState = this.state.active;
            this.setState({ active: !currentState });
        }
    }

    render() {
        return (
            <header>
                <nav className={this.state.active ? 'displayed' : null}>
                    <ul>
                        <li>
                            <a href='#home' onClick={this.toggleMenu}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#portfolio' onClick={this.toggleMenu}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href='#contact' onClick={this.toggleMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div
                    className={
                        this.state.active
                            ? 'menu-icon is-opened'
                            : 'menu-icon is-closed'
                    }
                    onClick={this.toggleMenu}
                    onKeyDown={this.toggleMenu}
                    role='button'
                    tabIndex={0}
                    href='#'
                    aria-label={
                        this.state.active
                            ? 'Fermer le menu'
                            : 'Afficher le menu'
                    }
                >
                    <span></span>
                </div>
            </header>
        );
    }
}

export default Header;
