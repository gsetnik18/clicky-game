import React from 'react';
import './App.css';
import images from './avengers.json';
import ImagesComponent from './ImagesComponent'

class App extends React.Component {
  state = {
    images: images,
    score: 0,
    message: 'Click to start',
    imageIdClick: []
  }
  //create onHandleFunction
  onHandleFunction = (id) => {
    const images = this.shuffle(this.state.images)


    this.setState({images})
    let imageIdClick = this.state.imageIdClick;
    if (!imageIdClick.includes(id)) {
      imageIdClick.push(id);
      this.setState({ score: imageIdClick.length });
    } else {
      this.setState({ imageIdClick: [], message: "You lose!", score: 0 })
    }
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render() {
    return (
      <div>
        <header>
          <div className="header-logo">
            <img className="header-logo-img" src="images/marvel-logo.jpg" alt="Marvel Logo"></img>
          </div>
        </header>
        <h1>{this.state.score}</h1>
        <ImagesComponent images={this.state.images} onHandleFunction={this.onHandleFunction} />
      </div>

    )
  }
}



export default App;
