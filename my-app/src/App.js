import React, { Component } from "react";
// import React from "react";
import Nav from "./components/navbar/navbar";
import Icons from './components/image';
// import Icon1 from "./assets/img/0image.png";
// import Icon2 from "./assets/img/0image1.png";
// import Icon3 from "./assets/img/0image2.png";
// import Icon4 from "./assets/img/0image3.png";
// import Icon5 from "./assets/img/0image5.png";
// import Icon6 from "./assets/img/0image6.png";
// import Icon7 from "./assets/img/0image7.png";
// import Icon8 from "./assets/img/0image8.png";
// import Icon9 from "./assets/img/0image9.png";
// import Icon10 from "./assets/img/0image10.png";
// import Icon11 from "./assets/img/0image11.png";
// import Icon12 from "./assets/img/0image12.png";
// import Icon13 from "./assets/img/0image13.png";
// import Icon14 from "./assets/img/0image14.png";
// import Icon15 from "./assets/img/0image15.png";
// import Icon16 from "./assets/img/0image16.png";
import cards from "./components/img.json";
// import Card from "./components/card/Card";
import "./App.css";

// const Icons = [
//   Icon1,
//   Icon2,
//   Icon3,
//   Icon4,
//   Icon5,
//   Icon6,
//   Icon7,
//   Icon8,
//   Icon9,
//   Icon10,
//   Icon11,
//   Icon12,
//   Icon13,
//   Icon14,
//   Icon15,
//   Icon16
// ];

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  // clickCount = id => {
  //   this.state.cards.find((o, i) => {
  //     if (o.id === id) {
  //       if (cards[i].count === 0) {
  //         cards[i].count = cards[i].count + 1;
  //         this.setState({ score: this.state.score + 1 }, function() {
  //           console.log(this.state.score);
  //         });
  //         this.state.cards.sort(() => Math.random() - 0.5);
  //         return true;
  //       }
  //       else {
  //         this.gameOver();
  //       }
        
  //     }

  //   });
  // };


  render() {
    return (
      <div className="App">
        <Nav />
        <div className="images">{this.state.cards.map(card => ( <div id={card.id} key={card.id} src={card.url} />))}</div>
        {this.state.cards.map(card => ( <div className="container"> <img alt={card.name} src={card.url}></img> </div>
          // <Card
          //   // clickCount={this.clickCount}
          //   id={card.id}
          //   key={card.id}
  
          //   image={card.url}
            
           
          
          // />
         
        ))}
         

        {/* /* <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img alt="img" src={Icon1} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon2} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon3} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon4} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <img alt="img" src={Icon5} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon6} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon7} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon8} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <img alt="img" src={Icon9} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon10} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon11} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon12} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <img alt="img" src={Icon13} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon14} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon15} />
          </div>
          <div className="col-md-3">
            <img alt="img" src={Icon16} />
          </div>
        </div>
      </div> */} */}
      </div>
    );
  }
}

export default App;
