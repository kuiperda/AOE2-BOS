import React from 'react';
import { Square } from './Square.js';

export class BuilderPage extends React.Component {
    render() {
        return (
            //Timeline Component
            //GettablesView Component (Squares) - receives a civ and knows the build order state, and shows available squares
            //GottenView Component
            //CivPicker
            <div>
                <Square />
            </div>
        )
    }
}