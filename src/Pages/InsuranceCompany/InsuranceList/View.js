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
                        {
                            (() =>
                            {
                                // 测试用
                                const nodeArray = [];
                                for (let i = 0; i < 20; i++)
                                {
                                    nodeArray.push(
                                        <div className={Style.insuranceWrapper} key={i}>
                                            <Insurance />
                                        </div>,
                                    );
                                }
                                return nodeArray;
                            })()
                        }
                        {
                            (() =>
                            {
                                // 这里的 20 个空 Wrapper 是为了让 flex 布局最后一行左对齐而且间距与上面几行统一。应该不会有最后一行超过 20 个空位的情况吧……
                                const nodeArray = [];
                                for (let i = 0; i < 20; i++)
                                {
                                    nodeArray.push(
                                        <div className={`${Style.insuranceWrapper} ${Style.empty}`} key={i} />,
                                    );
                                }
                                return nodeArray;
                            })()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default InsuranceList;

