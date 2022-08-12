import React, {Component} from 'react';
import Navigation  from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo  from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '212662fbf67f42dab11937d7085644c3'
});

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmitButton = () =>{
    console.log('Button Pressed');
    app.models.predict("212662fbf67f42dab11937d7085644c3","https://samples.clarifai.com/face-det.jpg").then(
      function(response){
        console.log(response);
      },
      function(err){

      }
    );
  }
   
  render(){
    return (
        <div className="App">
          <Navigation />
          <Logo />
          <Rank/>
          <ImageLinkForm inputChange={this.onInputChange} submitButtonPressed={this.onSubmitButton}/>
        </div>
      );
  }
}

export default App; 
