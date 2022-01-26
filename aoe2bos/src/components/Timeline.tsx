import React from "react";

export class Timeline extends React.Component {

/* Maybe easier to make clickable boxes and not clickable timeline?
or you have to click the displayed time instead of just anywhere...?*/

    constructor(props: any) {
        super(props);
        this.state = {
            // should have array for each second of what you have.
            // store entire state at each second, or just new stuff?
            // guessing just new stuff but it wont be that big
            // so maybe sacrifice (small) storage for speed?)
            // actually yeah probably. 
            // hm maybe not
            // maybe just calculate it anew on any click and cache it.
            // OK
            // so at each (referenced) second, compute what it has
            // based on what came before and what was referencing it. 
            // so as-needed instead of massive storage or massive computation. 
            // should propagate downwards, not upwards.
            // so new actions pass current state to referenced time.
            // hm not quite though, then a different earlier action
            // won't be noticed. kinda like every change you need the
            // later action to see...?
        }
    }

    render() {
        return (
            0
            /*TIMELINE: Generally going to have a square
                do a command for x amount of time and then
                be available on timeline at that time (and 
                    initial time!) */
            /*VIEW: going to have
                current resources
                current population
                current military
                current age
                (indicate time with highlighted line) */
        )
    }
}