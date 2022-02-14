import React from "react";
import { BuildingSquare } from './BuildingSquare';

interface TimelineProps {
    civ: CivObject
}

interface TimelineState {
    buildingsOnMe: Array<TimelineBuilding>
}

export class Timeline extends React.Component<TimelineProps, TimelineState> {

    constructor(props: any) {
        super(props);
        this.state = {
            buildingsOnMe: [
                {
                    ref: this.props.civ.buildings.townCenter,
                    history: [
                        {
                            time: 0,
                            action: "",
                            queue: []
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>

                {this.state.buildingsOnMe.map((building) => {
                    return <BuildingSquare civ={this.props.civ} content={building.ref} />
                    })}

                {/* <BuildingSquare content={this.props.civ.buildings.townCenter}/>
                <BuildingSquare content={this.props.civ.buildings.barracks}/>
                <BuildingSquare content={this.props.civ.buildings.archeryRange}/> */}

            </div>

                    /* what about a time zone,
                    a collecting zone,
                    an idle vils zone,
                    a buildings zone?
                    */

            /*VIEW: going to have
                current resources
                current population
                current military
                current age
                (indicate time with highlighted line) */
        )
    }
}