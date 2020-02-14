import React, {useState} from 'react';
import './App.css';
import ReactPlayer from "react-player";
import {  Link } from 'react-router-dom'
import Layout from '../components/layout'
import Cards from '../components/cards/App'
import Header from '../components/header'

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
          <Header siteTitle="Youtube Watch Party" />
      <div  style={{height:"60px"}}>
        
        <header className="video-link">
         {/* <input  className="search " type="text" placeholder="Search.."/><button style={{margin:"20px"}} className="btn btn-primary">Watch</button> */}
          <div style={{ minWidth: "60%",}}>
              <form className = "form-inline" onSubmit={this.handleSubmit} >
             
                <input onChange={this.handleChange} style={{margin:"20px", minWidth: "40%",}} className="form-cotrol" type="text" placeholder="Input the video url" />
                <button style={{margin:"20px"}} className="btn btn-primary">Watch</button>
                <Link to="/watch">Watch</Link>
              </form>
              
          </div>
          
          {/* <ReactPlayer url={this.state.url} controls={true} /> */}
        </header>
        
        
      </div>
      
      <Cards/>
      </div>
    );
  }
  
}

export default Dash;
