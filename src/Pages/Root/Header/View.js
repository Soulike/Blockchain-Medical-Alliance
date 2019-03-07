import React, {Component} from 'react';
import Style from './Style.module.scss';
import {Link} from 'react-router';
import ROUTER from '../../../Config/ROUTER';

class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hasLoggedIn: false,
        };
    }


    render()
    {
        const {hasLoggedIn} = this.state;
        const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER;
        return (
            <div className={Style.Header}>
                <div className={Style.logoWrapper}>
                    <div className={Style.logo}>LOGO</div>
                </div>
                <nav className={Style.navWrapper}>
                    <Link onlyActiveOnIndex={false} className={Style.navItem} to={'#'}>保险</Link>
                    <Link onlyActiveOnIndex={false} className={Style.navItem} to={'#'}>投保</Link>
                    <Link onlyActiveOnIndex={false} className={Style.navItem} to={'#'}>直付</Link>
                </nav>
                <div className={Style.authControllerWrapper}>
                    {
                        hasLoggedIn
                            ? <Link onlyActiveOnIndex={false} className={Style.link} to={'#'}>个人中心</Link>
                            : [
                                <Link onlyActiveOnIndex={false}
                                      className={Style.link}
                                      to={PAGE_ID_TO_ROUTE[PAGE_ID.ACCOUNT.SIGN_UP]}
                                      key={'注册'}>注册</Link>, ' / ',
                                <Link onlyActiveOnIndex={false}
                                      className={Style.link}
                                      to={PAGE_ID_TO_ROUTE[PAGE_ID.ACCOUNT.LOGIN]}
                                      key={'登录'}>登录</Link>,
                            ]
                    }

                </div>
            </div>
        );
    }
}

export default Header;