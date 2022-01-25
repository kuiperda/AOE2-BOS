import React from 'react';
import './CivChooser.css'

interface CivChooserProps {
    onClickCancelChoice: any,
    onClickSelectCiv: any
}

export class CivChooser extends React.Component<CivChooserProps,{}> {
    render() {
        return (
            <div>
                <div className='civs-view'>
                    {/* for eachciv in the civ json, 
                    render an button of its logo that you can 
                    highlight by clicking, then allow to choose 
                    it via the select button. this brings back
                    to the other page, as does cancel. */}
            </div>
                <div className='buttons-view'>
                    <button onClick={this.props.onClickSelectCiv}>Select</button>
                    <button onClick={this.props.onClickCancelChoice}>Cancel</button>
                </div>
            </div>
        )
    }
}