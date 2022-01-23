import React from 'react';
import './BuilderPage.css';
import { AchievedSquaresView } from './AchievedSquaresView';
import { Timeline } from './Timeline';
import { AvailableSquaresView } from './AvailableSquaresView';

export class BuilderPage extends React.Component {
    render() {
        return (
            <div className="background">
                <div className='header'>
                    
                </div>
                <div className='page'>
                    <span className='left'>
                        {/* <AchievedSquaresView /> */}
                    </span>
                    <span className='center'>
                        {/* <Timeline /> */}
                    </span>
                    <span className='right'>
                        {/* <AvailableSquaresView /> */}
                    </span>
                </div>
            </div>
        )
    }
}