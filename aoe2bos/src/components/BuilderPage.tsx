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
    }

    handleClickCancelChoice() {
        this.state.pickingCiv && this.setState({pickingCiv: false});
    }

    handleClickSelectCiv(civ: CivObject) {
        this.setState({ civ: civ.name, pickingCiv: false});
    }

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
                        civList = {CivData.civs}
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