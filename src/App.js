import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import logos from "./components/img.json";
import Card from "./components/card/Card";
import Wrapper from "./components/Wrapper/index";
import "./App.css";



class App extends Component {
  state = {
    logos,
    score: 0,
    highScore: 0,
    clicked: [],
  };

  shuffleArr = (cards) => {

    //create a variable to temporarily hold some element
    let temp;

    //loop through the array we would like to shuffle (which was passed in as an argument)
    //We are starting at the end of the array for simplicity
    for (let i = cards.length-1; i > 0; i--){

        //grab any element between the beginning of the array and the current position we are 'shuffling'
       let randomElement = Math.floor(Math.random() * i)

        // This is the 'tricky' part
        // store the current element being shuffled into our temp variable
        temp = cards[i];

        // reassign the randomElement to our current index being shuffled
        cards[i] = cards[randomElement];

        // assign our temp value to the random element's index
        cards[randomElement] = temp; 

        //this may have sounded complicated; however, all we have did... was 'swap' two array indexes.
    }
    return cards;
}

 handleHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState(
        {highScore: this.state.score}
      )
    }
  };

  reset = () => {
    this.state.logos.forEach(card => {
      card.count = 0;
    });
    alert(`You Clicked the same Logo. \nscore: ${this.state.score}`);
    this.setState({
      score: 0
    });
    this.handleHighScore()
  }

  shuffle = () => {
    this.state.logos.sort(() => Math.random() - 0.5)
  }

  winScreen = () => {
    if (this.state.highScore === 16) {
      alert("Way to go Jeremiah you did it!!")
    }
  }

  handleClick = checked => {
    this.state.logos.find((f, z) => {
      if (f.id === checked) {
        if(logos[z].count === 0){
          logos[z].count = logos[z].count + 1;
          this.setState(
            {score : this.state.score + 1}
            );
         this.shuffle(); 
         
         return true;
        } else {
          this.reset();

        }
      }
    });
    this.winScreen();
  };

  render() {
    return (
      <div className="App">
        <Navbar 
        score= {this.state.score}
        highScore= {this.state.highScore}
        />
        <Wrapper>
        {logos.map(card => ( 
          <Card
            handleClick={this.handleClick}
            id={card.id}
            key={card.id}
            url={card.url}
            handleShuffle={this.handleShuffle}
          />
        ))}
        </Wrapper>
      </div>
    );
  };
}


export default App;
