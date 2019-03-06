import React, {Component} from 'react';
import Style from './Style.module.scss';
import {View as Banner} from '../../../Components/Banner';
import {View as InsuranceListSelector} from './Components/InsuranceListSelector';

class InsuranceList extends Component
{
    render()
    {
        return (
            <div className={Style.InsuranceList}>
                <Banner />
                <div className={Style.insuranceListMainContentWrapper}>
                    <InsuranceListSelector />
                </div>
            </div>
        );
    }
}

export default InsuranceList;

