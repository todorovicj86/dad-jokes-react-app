import React, { Component } from 'react'
import './Joke.css'


class Joke extends Component {

    constructor(props){
        super(props);
        this.state = {
            score: 0,
        }
    }

    changeEmoji(){
        const {score} = this.props;
        if (score >= 15) {
            return "em em-rolling_on_the_floor_laughing";
        } else if (score >= 12) {
            return "em em-laughing";
        } else if (score >= 9) {
            return "em em-smiley";
        } else if (score >= 6) {
            return "em em-slightly_smiling_face";
        } else if (score >= 3) {
            return "em em-neutral_face";
        } else if (score >= 0) {
            return "em em-confused";
        } else {
            return "em em-angry";
        }

    }

    changeBorderColor() {
        const {score} = this.props;
        if (score >= 15) {
          return "#4CAF50";
        } else if (score >= 12) {
          return "#8BC34A";
        } else if (score >= 9) {
          return "#CDDC39";
        } else if (score >= 6) {
          return "#FFEB3B";
        } else if (score >= 3) {
          return "#FFC107";
        } else if (score >= 0) {
          return "#FF9800";
        } else {
          return "#f44336";
        }
      }


    render(){
        return(

            <li className="Joke">
                {/* div with up - and down - vote and score */}
                <div className="Joke-vote-score">
                    <i className="fas fa-arrow-up" onClick = {this.props.voteUp} id={this.props.id}></i>
                    <div className="Joke-score" style={{borderColor: this.changeBorderColor()}}>{this.props.score}</div>
                    <i className="fas fa-arrow-down" onClick = {this.props.voteDown} id={this.props.id}></i>
                </div>
                

                {/* Joke */}
                <div className="Joke-joke">{this.props.joke}</div>

                {/* emoji */}
                <span className="Joke-emoji">   
                    <i className= {this.changeEmoji()}></i>
                </span>
                    
            </li>
            
        )
    }
}

export default Joke;