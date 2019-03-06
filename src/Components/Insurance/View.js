import React, {Component} from 'react';
import Style from './Style.module.scss';
import {View as Card} from '../Card';

class Insurance extends Component
{
    render()
    {
        return (
            <Card className={Style.Insurance}>
                <div className={Style.image} />
            </Card>
        );
    }
}

export default Insurance;