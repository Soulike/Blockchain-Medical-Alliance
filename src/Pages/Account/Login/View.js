import React, {Component} from 'react';
import Style from './Style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as SolidIcon from '@fortawesome/free-solid-svg-icons';
import '../../../StaticFile/accountBackground.jpg';
import {View as Checkbox} from '../../../Components/Checkbox';
import {Link} from 'react-router';
import ROUTER from '../../../Config/ROUTER';

class Login extends Component
{
    render()
    {
        return (
            <div className={Style.Login}>
                <div className={Style.background} />
                <div className={Style.formWrapper}>
                    <div className={Style.frostedGlassBackground} />
                    <div className={Style.loginForm}>
                        <div className={Style.title}>登录</div>
                        <form action="#" className={Style.form}>
                            <label className={Style.inputWrapper}>
                                <span className={Style.icon}><FontAwesomeIcon icon={SolidIcon.faUserCircle} /></span>
                                <input type="text" placeholder={'用户名'} />
                            </label>
                            <label className={Style.inputWrapper}>
                                <span className={Style.icon}><FontAwesomeIcon icon={SolidIcon.faLock} /></span>
                                <input type="text" placeholder={'密码'} />
                            </label>
                            <div className={Style.rememberPasswordAndSignUpTipWrapper}>
                                <label className={Style.rememberPasswordCheckboxWrapper}>
                                    <Checkbox className={Style.checkbox} />
                                    <span className={Style.label}>记住密码</span>
                                </label>
                                <div className={Style.signUpTip}>
                                    还没有账户？去<Link onlyActiveOnIndex={false}
                                                 to={ROUTER.PAGE_ID_TO_ROUTE[ROUTER.PAGE_ID.ACCOUNT.SIGN_UP]}>注册</Link>
                                </div>
                            </div>
                            <div className={Style.submitButtonWrapper}>
                                <button className={Style.submitButton}>登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;