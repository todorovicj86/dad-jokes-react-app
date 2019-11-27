import React, { Component } from 'react'
import './LeftHeader.css'


class LeftHeader extends Component{
    constructor(props){
        super(props);

        this.addNewJokes = this.addNewJokes.bind(this)
    }

    addNewJokes(){
        this.props.addNewJokes();
    }
    render(){
        return(
            <div className = "LeftHeader">
            <h1 className="LeftHeader-title"><span>Dad</span> Jokes</h1>
            {/* Emoji */}
                <div className="LeftHeader-emoji">
                <img  src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="Smiling Emoji"/>
                   {/* <span role="img" aria-label= "Smiling Emoji">😂</span>  */}
                </div>
            <button className="LeftHeader-btn"
                onClick = {this.addNewJokes}
            >
                New Jokes
            </button>

            </div>
        )
    }
}

export default LeftHeader;