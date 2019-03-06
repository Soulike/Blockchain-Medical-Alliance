import React, {Component} from 'react';
import Style from './Style.module.scss';
import {View as Card} from '../../../Components/Card';

class InsurancePublication extends Component
{
    render()
    {
        return (
            <div className={Style.InsurancePublication}>
                <Card>
                    <div className={Style.cardContentWrapper}>
                        <header className={Style.title}>新建保险</header>
                        <div className={Style.formWrapper}>
                            <label className={Style.inputWrapper}>
                                <div className={Style.label}>保险名称：</div>
                                <input type="text" autoFocus />
                            </label>
                            <label className={Style.inputWrapper}>
                                <div className={Style.label}>保额：</div>
                                <input type="text" />
                            </label>
                            <label className={Style.inputWrapper}>
                                <div className={Style.label}>承保年龄：</div>
                                <input type="text" />
                            </label>
                            <label className={Style.inputWrapper}>
                                <div className={Style.label}>保障期限：</div>
                                <input type="text" />
                            </label>
                            <label className={Style.inputWrapper}>
                                <div className={Style.label}>保费价格：</div>
                                <input type="text" />
                            </label>
                            <label className={Style.inputWrapper}>
                                <div className={Style.label}>保险详情：</div>
                                <textarea className={Style.insuranceInformationTextArea} />
                            </label>
                            <div className={Style.submitButtonWrapper}>
                                <button className={Style.submitButton}>提交</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>);
    }
}

export default InsurancePublication;