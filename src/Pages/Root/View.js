import React, {Component} from 'react';
import Style from './Style.module.scss';
import {View as Header} from './Header';
import {View as Footer} from './Footer';

class Root extends Component
{
    render()
    {
        const {children} = this.props;
        return (
            <div className={Style.Root}>
                <header className={Style.headerWrapper}>
                    <Header />
                </header>
                <main className={Style.mainContent}>
                    {children}
                </main>
                <footer className={Style.footerWrapper}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Root;