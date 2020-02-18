import React, {useState} from 'react';
import './App.css';
import ReactPlayer from "react-player";
import Player from '../components/player/index'
import ChatApp from '../components/chat/index'
// import ChatApp from ''
import Layout from '../components/layout'
import { Route, Link } from 'react-router-dom'


class Watch extends React.Component{

  constructor(props){
    super(props);
    // var [watchComplete, setWatchComplete] = useState(false)
    this.state = {
      url:props.location.vid
    }
    console.log("This is the state from watch.js", props.location.vid)
  }
  
  // handleChange = (event)=>{
  //   this.setState({inputValue : event.target.value})
  // }

  // handleSubmit = (event) =>{
  //   event.preventDefault();
  //   this.setState({url: this.state.inputValue})
  // }
  // handleWatchComplete = ({ played }) => {
  //   if (played >= 0.7 && !watchComplete) {
  //     setWatchComplete(true)
  //   }
  // }

  render(){
    return (
      <div style={{backgroundColor: "#282c34"}}>
          <Layout>
            {/* <Route to="/home" component={App}></Route> */}
            <Player vidUrl = {this.state.url}/>
            <ChatApp/>
        </Layout>
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

export default Watch;
