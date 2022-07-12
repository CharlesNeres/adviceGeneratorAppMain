import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faDiceFive } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.loadData = this.loadData.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.state = {}
  }

  fetchAPI(){
    fetch('https://api.adviceslip.com/advice')
    .then(response=>response.json())
    .then(data=>this.loadData(data.slip))
    .catch(error=>console.error(error));
    
  } 

  handleClick(e){
    this.fetchAPI();
  }

  componentDidMount(){
    console.log("testando mount")
    this.fetchAPI();
  }

  loadData(data){
    console.log("eteasfd")
    this.setState({
      id: data.id,
      advice: data.advice
    })
  }

  render(){    
    return(
      <div className="App">      
         <header>
           <span>advice </span>
           <span id="numberAdvice">#{this.state.id}</span>
         </header>

         <main>
           {this.state.advice}
         </main>

         <footer>
           <hr/>
           <FontAwesomeIcon className="iconPause" icon={faPause} />
           <hr/>
         </footer>

         <button onClick={this.handleClick}>
           <FontAwesomeIcon className="iconDice" icon={faDiceFive} />
         </button>
       </div>
    )
  }
}

export default App;
