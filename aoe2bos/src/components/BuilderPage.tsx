import React from 'react';
import './BuilderPage.css';
import { AchievedSquaresView } from './AchievedSquaresView';
import { Timeline } from './Timeline';
import { AvailableSquaresView } from './AvailableSquaresView';
import { CivChooser } from './CivChooser';
import CivData from '../CivData.json';

interface BuilderPageState {
    civ: string
    pickingCiv: boolean
}

export class BuilderPage extends React.Component<{}, BuilderPageState> {

    constructor(props: any) {
        super(props);
        this.state = { 
            civ: "",
            pickingCiv: false
    }
        this.handleClickChooseCiv = this.handleClickChooseCiv.bind(this);
        this.handleClickSelectCiv = this.handleClickSelectCiv.bind(this);
        this.handleClickCancelChoice = this.handleClickCancelChoice.bind(this);
    }

    handleClickChooseCiv() {
        !this.state.pickingCiv && this.setState({pickingCiv: true});

        // a div should pop up with all the civ choices
        // user can click one and it will select that civ
        // and start a new timeline for their build order,
        // populating achieved and available squares.

        // const newCiv = CivData.civs[1].name;
        // this.setState({civ: newCiv});
    }

    handleClickSelectCiv() {
        this.setState({civ: "Mongols", pickingCiv: false});
        // make user have to highlight a civ for select to do anything.
        // bring back to screen with civ changed.
        // need to the repopulate state
    }

    handleClickCancelChoice() {
        this.state.pickingCiv && this.setState({pickingCiv: false});
    }

    // before the civchooser, add stuff like 'dark age' ?
    // put that in achievedView. put civ logo in header though

    render() {
        return (
            <div className="background">
                <div className='header'>
                    {!this.state.pickingCiv && <button onClick={this.handleClickChooseCiv}>
                        {this.state.civ || "Choose a Civ"}
                    </button> }
                </div>
                {this.state.pickingCiv && <div className='page'>
                    <CivChooser 
                        onClickCancelChoice={this.handleClickCancelChoice}
                        onClickSelectCiv={this.handleClickSelectCiv}
                    />
                    </div>}
                {!this.state.pickingCiv && <div className='page'>
                    <span className='left'>
                        <AchievedSquaresView />
                    </span>
                    <div className='center'>
                        <Timeline />
                    </div>
                    <div className='right'>
                        <AvailableSquaresView />
                    </div>
                </div>}
            </div>
        )
    }
}