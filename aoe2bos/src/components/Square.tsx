import React from 'react';
import './Square.css';

interface SquareProps {
    content: BuildingObject
}

export class Square extends React.Component<SquareProps, {}> {

    handleClickOnSquare() {
        alert("got it");

        const squareView = (
            <div>
                {/* pass */}
            </div>
        )
    }

    render() {
        return (
            <div className='square'
                onClick={this.handleClickOnSquare}
            >
                <img className='image'
                    src={"../images/" + this.props.content.logo}
                    alt={this.props.content.name} 
                />
                <div className='label'>{this.props.content.name}</div>
            </div>
        )
    }
}