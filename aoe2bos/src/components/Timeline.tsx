import React from "react";
import { Square } from './Square';

interface TimelineProps {
    civ: CivObject
}

interface TimelineState {

}

export class Timeline extends React.Component<TimelineProps, TimelineState> {


    // take in a civ from BuilderPage
    // Create a timeline starting at 0 (grow as needed)
    // place a Town Center on it. 

    // probably going to make a component for this
    // and just render a ton of divs
    // so make a 'TimelineSecond' component class?



    // no ok so have 1 div you place it all in.
    // store an array of producers- this renders everything
    //  on the timeline. 
    // then object with vals for everything that doesn't
    // produce. 
    // array layout lets you keep rendered things separate. 

    //hm need to take idle time into account on timeline

    // what if instead of each second tracking,
    // each object tracks itself through the timeline?

    // yeah makes way more sense for each producer
    // to keep track of its own timeline. 

    // also add vil numbers on each res to topbar

    constructor(props: any) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <div>

                <Square content={this.props.civ.buildings.townCenter}/>

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