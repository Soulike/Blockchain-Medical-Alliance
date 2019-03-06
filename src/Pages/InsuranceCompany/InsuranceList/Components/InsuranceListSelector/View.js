import React, {Component} from 'react';
import Style from './Style.module.scss';
import {View as Card} from '../../../../../Components/Card';

class InsuranceListSelector extends Component
{
    render()
    {
        return (
            <div className={Style.InsuranceListSelector}>
                <Card>
                    <div className={Style.cardContent}>
                        <div className={Style.selector}>
                            <div className={Style.label}>分类</div>
                            <div className={Style.itemWrapper}>
                                <div className={`${Style.item} ${Style.active}`}>全部</div>
                                <div className={Style.item}>少儿</div>
                                <div className={Style.item}>中年</div>
                                <div className={Style.item}>老年</div>
                            </div>
                        </div>
                        <div className={Style.selector}>
                            <div className={Style.label}>状态</div>
                            <div className={Style.itemWrapper}>
                                <div className={`${Style.item} ${Style.active}`}>全部</div>
                                <div className={Style.item}>已共享</div>
                                <div className={Style.item}>待共享</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default InsuranceListSelector;