import React from 'react';
import './BuildingSquare.css';

interface BuildingSquareProps {
    civ: CivObject,
    content: BuildingObject
}

interface BuildingSquareState {
    isShowingOptions: boolean
}

export class BuildingSquare extends React.Component<BuildingSquareProps, BuildingSquareState> {

    constructor(props: any) {
        super(props);
        this.state = {isShowingOptions: false}
        this.handleClickOnSquare = this.handleClickOnSquare.bind(this);
    }

    handleClickOnSquare() {
        this.setState({isShowingOptions: !this.state.isShowingOptions})
    }

    render() {

        const squareView = (
            <div className="square-popup">
                {this.props.content.produces?.map((path) => {

                    let pathParts = path.split("/");

                    /* 
                    any is used here.
                    the array 'produces' in buildings that produce (in the civ json) is formatted as follows:
                    "<type>/<instance>" where type is tech or unit, and instance is the specific name used elsewhere in the JSON.
                    while using 'any' isn't a good solution and can leave vulenerabilities open, the only problem I could run into here
                    would be if I misspelled one of those options, so it wouldn't show up, which would be easy to spot.
                    Also I rarely misspell things.
                    Point being, this is not really something that will introduce complex bugs and thus while bad practice is fine here.
                        TS has been more trouble than it's worth in this scenario already, and this won't break anything.
                    */

                    let item: any = this.props.civ[pathParts[0] as keyof CivObject]; // poor use of any but i'm getting tired of trying to figure this out
                    let newItem = item[pathParts[1]];                                  // why pointers aren't standard in JSON is beyond me
                                                                                        // and typescript throws a fit at everything I try
                    return (                                                              // i'm not nesting objects that should be referenceable.
                        <img className="square-popup-item"      
                            src={"/images/" + newItem.logo}
                        />
                    )
                })}
            </div>
        )


        return (
            <div>
                <div className='square'
                    onClick={this.handleClickOnSquare}
                >
                    <img className='image'
                        src={"/images/" + this.props.content.logo}
                        alt={this.props.content.name} 
                    />
                    <div className='label'>{this.props.content.name}</div>
                </div>
                {this.state.isShowingOptions && squareView}
            </div>  
        )
    }
}