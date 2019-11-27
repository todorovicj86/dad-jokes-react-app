import React, { Component } from 'react'
import LeftHeader from './LeftHeader';
import Joke from './Joke'
import axios from 'axios'
import './DadJokes.css'


class DadJokes extends Component {
    static defaultProps = {
        numJokes: 10,
    }
    constructor(props){
        super(props);
        this.state = {
            jokesData: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            isLoading: false,
        }
        this.seenJoke = new Set(this.state.jokesData.map(el => el.joke))
        console.log(this.seenJoke);
        this.addNewJokes = this.addNewJokes.bind(this);
    }
    
    // when load, render 10 jokes
    componentDidMount() {
        if(this.state.jokesData.length === 0) {
            this.getJokes()
        }

    }

    async getJokes(){
        try {
            // make an array of new jokes on load
            let newJokes = [];
            while (newJokes.length < this.props.numJokes){
                let jokes = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
                let newJoke = jokes.data
                if(!this.seenJoke.has(newJoke.joke)){
                    // add score to each joke, set to zero at the beginning
                    newJoke.score = 0;
                    newJokes.push(newJoke)
                    this.seenJoke.add(newJoke.joke)
                } else {
                    console.log("Duplicate has an id " + newJoke.joke);
                }
            
            }
            this.setState(st => (
                {
                jokesData: [...st.jokesData, ...newJokes],
                isLoading: false,
            })); 
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokesData))
        }catch(err){
            alert(err);
            this.setState({
                isLoading: false,
            })
        }
    }
    
    // scores
    handleVote(id, numb){
        this.setState(st => ({
            jokesData: st.jokesData.map(joke => {
                return joke.id === id ? {...joke, score: joke.score + numb} : {...joke}
            })
        }), 
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokesData)))
    }


    // add new jokes when button is clicked
    addNewJokes(){
        this.setState({
            // jokesData: [...this.state.jokesData],
            isLoading: true,
        }, this.getJokes)
    }

   
    render(){
        // sort state/jokes by score and then render sorted jokes
        let sortJokes = this.state.jokesData.sort(       
            function(a,b){
                return b.score - a.score
            }
        )
                
        return(
            <div className = "DadJokes">
            {/* render left Header with button, pass click function as props */}
                <LeftHeader 
                    addNewJokes = {this.addNewJokes}
                />
                <div className="DadJokes-container">
                {this.state.isLoading ? 
                    /* loader */
                    <div className="DadJokes-load">
                        <p>Loading...</p>
                        <i className='far fa-8x fa-laugh fa-spin' />
                        {/* <div className="lds-roller"><div> </div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> */}
                    </div>
                    :
                    <ul>
                    {/* render Joke 10 times at the load */}
                        {
                            sortJokes.map(joke=>
                            
                                <Joke  
                                    key={joke.id} 
                                    joke={joke.joke}
                                    id={joke.id}
                                    voteUp = {() => this.handleVote(joke.id, 1)}
                                    voteDown = {() => this.handleVote(joke.id, -1)}
                                    score = {joke.score}
                                />
                            
                            )
                        }
                    </ul>
                }
                </div>              

            </div>
        )
    }
}

export default DadJokes;