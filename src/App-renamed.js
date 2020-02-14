import React, {useState} from 'react';
import './App.css';
import ReactPlayer from "react-player";

class App extends React.Component{

  constructor(props){
    super(props);
    // var [watchComplete, setWatchComplete] = useState(false)
    this.state = {
      inputValue : "",
      url:""
    }
  }
  
  handleChange = (event)=>{
    this.setState({inputValue : event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({url: this.state.inputValue})
  }
  // handleWatchComplete = ({ played }) => {
  //   if (played >= 0.7 && !watchComplete) {
  //     setWatchComplete(true)
  //   }
  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} style={{margin:"20px"}} className="form-control" type="text" placeholder="Input the video url" />
                <button style={{margin:"20px"}} className="btn btn-primary">PLAY VIDEO</button>
              </form>
            
          </div>
          <ReactPlayer url={this.state.url} controls={true} />
        </header>
        {/* <div
        className={
            watchComplete
              ? "marker marker--is-complete"
              : "marker marker--not-complete"
          }
        >
          Completed
        </div> */}
      </div>
    );
  }
  
}

export default App;
