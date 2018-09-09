import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSection.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      channels: []
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.lenght, name});
    this.setState({channels});
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
  }
  render() {
    return (
      <ChannelSection
        channels={this.state.channels}
        addChanel={this.addChannel.bind(this)}
        setChannel={this.setChannel.bind(this)}
        />
    )
  }
}

export default App;
