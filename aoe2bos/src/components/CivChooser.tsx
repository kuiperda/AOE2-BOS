import React from 'react';
import './CivChooser.css'

interface CivChooserProps {
    onClickCancelChoice: any,
    onClickSelectCiv: any
    civList: Array<any>
}

interface CivChooserState {
    currentSelectedCiv: CivObject | ""
}

export class CivChooser extends React.Component<CivChooserProps,CivChooserState> {
    
    constructor(props: any) {
        super(props);
        this.state = { currentSelectedCiv: "" };
        this.handleCivIconClick = this.handleCivIconClick.bind(this);
    }

    handleCivIconClick(civ: CivObject) {
        this.setState({ currentSelectedCiv : civ })
    }
    
    render() {

        const civIcons = ( 
            <div> 
                {this.props.civList.map( civ => {
                    return (
                        <div className='civ-icon'
                            onClick={ () => this.handleCivIconClick(civ)}
                        >
                            <img className="civ-logo"
                                src={"/images/" + civ.logo} 
                            />
                            <div>{civ.name}</div>
                        </div>
                    )
                })}
            </div>
        );

        return (
            <div>
                <div className='civs-view'>
                    {civIcons}
                </div>
                <div className='buttons-view'>
                    {this.state.currentSelectedCiv && <button onClick={ () => this.props.onClickSelectCiv(this.state.currentSelectedCiv)}>Select</button>}
                    <button onClick={this.props.onClickCancelChoice}>Cancel</button>
                </div>
            </div>
        )
    }
}