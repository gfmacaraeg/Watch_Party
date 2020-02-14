import React, {useState} from 'react';
import './App.css';
import ReactPlayer from "react-player";
import {  Link } from 'react-router-dom'
import Layout from '../components/layout'
class Dash extends React.Component{

  constructor(props){
    super(props);
    // var [watchComplete, setWatchComplete] = useState(false)
    this.state = {
      inputValue : "",
      url:""
    }
    this.state={
      current_videos: [
        "https://www.youtube.com/watch?v=Rq5SEhs9lws",
        "https://www.youtube.com/watch?v=Y4pzMHe_gp0"
      ]
    }
  }
  
  handleChange = (event)=>{
    this.setState({inputValue : event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({url: this.state.inputValue})
  }


  render(){
    return (
      <div>
        <Layout>
      <div className="App">
        
        <header className="App-header">
        
          <div>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} style={{margin:"20px"}} className="form-control" type="text" placeholder="Input the video url" />
                <button style={{margin:"20px"}} className="btn btn-primary">PLAY VIDEO</button>
              </form>
              <Link to="/watch">Watch</Link>
          </div>
          <ReactPlayer url={this.state.url} controls={true} />
        </header>
        
        
      </div>
      </Layout>
      </div>
    );
  }
  
}

export default Dash;
