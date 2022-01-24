import React from 'react';
import './Square.css';
// import barracks from '../images/barracks.png';

export class Square extends React.Component {

    render() {
        return (
            <div className='building'>
                <img className='image'
                    // src={barracks} 
                    src="../images/barracks.png"
                    alt="Barracks" 
                />
                <div className='label'>Barracks</div>
            </div>
        )
    }
}