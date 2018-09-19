import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World from HSBC</h2>

const Image = (props) => {
  let {src1,  title } = props;
  src1 = src1 || 'https://www.w3schools.com/html/pic_trulli.jpg';
  title = title || 'HSBC training Demo';
  return (
    <img src={src1} alt={title}  width="500" height="333" />
  
  )
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
            
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">Welcome to React - from HSBC !!</h1>
        </header>
        <div><Timer /></div>
         
         <div>
         <Image src1='https://www.w3schools.com/html/pic_trulli.jpg'/>
         <Image src1='https://www.w3schools.com/html/img_girl.jpg'/>
         <Image src1='https://www.w3schools.com/html/img_chania.jpg'/>
         </div>
         <Hello/>
         </div>
    );   
  
      }
}

export default App;
