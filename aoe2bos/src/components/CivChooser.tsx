import React from 'react';

interface CivChooserProps {
    onClickCivChooser: any, 
    selectedCiv: string
}

export class CivChooser extends React.Component<CivChooserProps,{}> {
    render() {
        return (
            <button onClick={this.props.onClickCivChooser}>
                {this.props.selectedCiv || "Choose a Civ"}
            </button>
        )
    }
}