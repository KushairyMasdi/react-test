import React from 'react';
import ReactDOM from 'react-dom';

class ContentDisplayer extends React.Component {
 
 constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.thumbsUpClick = this.thumbsUpClick.bind(this);
    this.thumbsDownClick = this.thumbsDownClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  thumbsUpClick() {
    this.setState({thumbsUp: true});
    setTimeout( () => {this.setState( {thumbsUp: false} ) ;}, 1500);
  }
  
  thumbsDownClick() {
    this.setState({thumbsDown: true});
    setTimeout( () => {this.setState( {thumbsDown: false} ) ;}, 1500);
  }
  
  
   handleSubmit() {
    const youtubePrefix = "https://www.youtube.com/watch?v=";     
    this.setState({finalUrl: youtubePrefix + this.state.value});   
  }


  render() {
  	const stringProps = JSON.stringify(this.props);
   
    const classNameUp = this.state.thumbsUp ? 'floating-up' : '';
    const classNameDown = this.state.thumbsDown ? 'floating-down' : '';
    return (
      <div id="box">
        <div id="vidDis">
          <video width="320" height="240" controls>
            <source src={this.state.finalUrl} type="video/mp4" />
          </video>
        </div>
        <div id="others">
          <img className={classNameUp} src="https://cdn-icons-png.flaticon.com/512/25/25297.png" height="50" width="auto" onClick={this.thumbsUpClick} />
          <img id="thumbsdown" className={classNameDown} src="https://cdn-icons-png.flaticon.com/512/25/25297.png" height="50" width="auto" onClick={this.thumbsDownClick} />
          <br/>
          <p>Video ID:</p>
          <input id="urlInput" type="text" value={this.state.value} onChange={this.handleChange} />
          <br/>
          <button onClick={this.handleSubmit}>Change</button>
        </div>      
      </div>
    );
  }
} 

ReactDOM.render(<ContentDisplayer/>, document.getElementById('root'));