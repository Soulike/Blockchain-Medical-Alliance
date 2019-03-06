import React, {Component} from 'react';
import Style from './Style.module.scss';

class Banner extends Component
{
    render()
    {
        return (
            <div className={Style.Banner}>
                <div className={Style.sloganWrapper}>
                    <div className={Style.bigSlogan}>因为专业 所以信赖</div>
                    <div className={Style.smallSlogan}>您的满意是我们存在的价值</div>
                </div>
                <div className={Style.buttonWrapper}>
                    <button className={Style.addInsuranceButton}>新建保险</button>
                </div>
            </div>
        );
    }
}

export default Banner;