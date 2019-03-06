import React, {Component} from 'react';
import Style from './Style.module.scss';
import {View as Card} from '../Card';
import '../../StaticFile/insurance.jpg';

class Insurance extends Component
{
    render()
    {
        return (
            <Card className={Style.Insurance}>
                <div className={Style.image} />
                <div className={Style.infoWrapper}>
                    <div className={Style.info}>来源：<span className={Style.infoValue}>中国人寿</span></div>
                    <div className={Style.info}>保期：<span className={Style.infoValue}>2 年</span></div>
                    <div className={Style.info}>保金：<span className={Style.infoValue}>20000 元</span></div>
                </div>
            </Card>
        );
    }
}

export default Insurance;