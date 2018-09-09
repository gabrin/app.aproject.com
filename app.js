
class Channel extends React.Component{
  onClick (){
    console.log('Clicked', this.props.name);
  }
  render() {
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}
class ChannelList extends React.Component {
  render(){
    return(
      <ul>
        {this.props.channels.map( channel => {
          return (
            <Channel name={channel.name} />
          )
        }
      )}
      </ul>
    )
  }
}
class ChannelForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  onSubmit(e){
    let {channelName} = this.state;
    console.log(channelName);
    this.setState({
      channelName: ''
    });
    this.props.addChannel(channelName);
    e.preventDefault();
  }
  onChange(e){
    this.setState({
      channelName: e.target.value
    });
  }
  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          onChange={this.onChange.bind(this)}
          value={this.state.channelName}
          type='text'
          className="form-control  form-control-alternative"
          placeholder="...text"
          />
      </form>
    )
  }
}
class ChannelSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [
        {name: 'Harware support'},
        {name: 'Software support'}
      ]
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({name: name});
    this.setState({
      channels: channels
    });
  }
  render(){
    return(
      <div className="row">
         <div className="col-md-2">
        <ChannelList channels={this.state.channels} />
        <ChannelForm addChannel={this.addChannel.bind(this)} />
        </div>
     </div>
    )
  }
}
ReactDOM.render(<ChannelSection />, document.getElementById('app'));
