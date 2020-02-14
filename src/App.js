import React, {useState} from 'react';
import './App.css';
import ReactPlayer from "react-player";
import Player from './components/player/index'
import ChatApp from './components/chat/index'
import Layout from './components/layout'


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


  render(){
    return (
      <div>
          <Layout>
         
            <Player/>
            <ChatApp/>
        </Layout>
        
      </div>
      
    );
  }
  
}

export default App;
