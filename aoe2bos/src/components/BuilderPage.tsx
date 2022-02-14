import React from 'react';
import './BuilderPage.css';
import { Timeline } from './Timeline';
import { CivChooser } from './CivChooser';
import CivData from '../CivData.json';

interface BuilderPageState {
    civ: CivObject
    pickingCiv: boolean
}

export class BuilderPage extends React.Component<{}, BuilderPageState> {

    constructor(props: any) {
        super(props);
        this.state = { 
            civ: CivData.civs.defaultAllTechs,
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
        this.setState({ civ: civ, pickingCiv: false});
    }

    render() {
        return (
            <div className="background">
                <div className='header'>
                    {!this.state.pickingCiv && <button onClick={this.handleClickChooseCiv}>
                        {"Create New"}
                    </button> }
                    {!this.state.pickingCiv &&<div>
                        {this.state.civ.name || "No Civ Selected"}
                    </div> }
                </div>
                {this.state.pickingCiv && <div className='page'>
                    <CivChooser 
                        onClickCancelChoice={this.handleClickCancelChoice}
                        onClickSelectCiv={this.handleClickSelectCiv}
                        civList = {Object.values(CivData.civs)}
                    />
                    </div>}
                {!this.state.pickingCiv && <div className='page'>
                    <div className='center'>
                        <Timeline civ={this.state.civ} />
                    </div>
                </div>}
            </div>
        )
    }
}