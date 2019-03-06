import React, {Component} from 'react';
import Style from './Style.module.scss';
import {View as Banner} from '../../../Components/Banner';
import {View as InsuranceListSelector} from './Components/InsuranceListSelector';
import {View as Insurance} from '../../../Components/Insurance';

class InsuranceList extends Component
{
    render()
    {
        return (
            <div className={Style.InsuranceList}>
                <Banner />
                <div className={Style.insuranceListMainContentWrapper}>
                    <InsuranceListSelector />
                    <div className={Style.insuranceListWrapper}>
                        <Insurance />
                    </div>
                </div>
            </div>
        );
    }
}

export default InsuranceList;

