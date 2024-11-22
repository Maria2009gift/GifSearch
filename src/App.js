
import './App.css';
import React, {Component} from 'react';
import GifSearch from './components/GifSearch/GifSearch'
import GifList from './components/GifList/GifList';

class App extends Component{

  state = {
    inputValue: ""
  }

  getSearching = (valueInput) => {
    this.setState({inputValue: valueInput})
    console.log(this.state.inputValue);
  }

  render() {
    return (
      <>
        <GifSearch getValue={this.getSearching}/>
        <GifList searchingValue={this.state.inputValue}/>
      </>
    );
  }
}

export default App;
