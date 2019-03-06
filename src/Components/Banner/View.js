import React, {Component} from 'react';
import Style from './Style.module.scss';
import {ROUTER} from '../../Config';
import {browserHistory} from 'react-router';
import '../../StaticFile/banner.jpg';

class Banner extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            shouldShowAddInsuranceButton: false,
        };
    }

    componentDidMount()
    {
        this.setState({
            shouldShowAddInsuranceButton: browserHistory.getCurrentLocation().pathname.toLowerCase() === ROUTER.PAGE_ID_TO_ROUTE[ROUTER.PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_LIST].toLowerCase(),
        });
    }


    render()
    {
        const {shouldShowAddInsuranceButton} = this.state;
        return (
            <div className={Style.Banner}>
                {/*<div className={Style.sloganWrapper}>
                    <div className={Style.bigSlogan}>因为专业 所以信赖</div>
                    <div className={Style.smallSlogan}>您的满意是我们存在的价值</div>
                </div>*/}
                {
                    shouldShowAddInsuranceButton
                        ? (
                            <div className={Style.buttonWrapper}>
                                <button className={Style.addInsuranceButton}>新建保险</button>
                            </div>)
                        : null
                }
            </div>
        );
    }
}

export default Banner;