import React from 'react';
import './Square.css';
import barracks from '../images/barracks.png';

export class Square extends React.Component {

    Square() {
        
    }

    render() {
        return (
            <div className='building'>
                <img className='image'
                    src={barracks} 
                    alt="Barracks" 
                />
                <p>Barracks</p>
            </div>
        )
    }
}