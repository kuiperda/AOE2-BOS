import React from 'react';
import './BuilderPage.css';
import { AchievedSquaresView } from './AchievedSquaresView';
import { Timeline } from './Timeline';
import { AvailableSquaresView } from './AvailableSquaresView';
import { CivChooser } from './CivChooser';
import CivData from '../CivData.json';

interface BuilderPageState {
    civ: string
}

export class BuilderPage extends React.Component<{}, BuilderPageState> {

    constructor(props: any) {
        super(props);
        this.state = { civ: "" }
        this.handleClickCivChooser = this.handleClickCivChooser.bind(this);
    }

    handleClickCivChooser() {
        // for each civ in civdata, make a selection option
        const newCiv = CivData.civs[0].name;
        this.setState({civ: newCiv});
        // will want a popup or at least dropdown to choose
        // then will reset timeline (and views) with that civ\
        // the views will be based off of a timeline click...?
    }

    // before the civchooser, add stuff like 'dark age' ?
    // put that in achievedView. put civ logo in header though

    render() {
        return (
            <div className="background">
                <div className='header'>
                    <CivChooser 
                        onClickCivChooser={this.handleClickCivChooser}
                        selectedCiv={this.state.civ} 
                    />
                </div>
                <div className='page'>
                    <span className='left'>
                        <AchievedSquaresView />
                    </span>
                    <div className='center'>
                        <Timeline />
                    </div>
                    <div className='right'>
                        <AvailableSquaresView />
                    </div>
                </div>
            </div>
        )
    }
}