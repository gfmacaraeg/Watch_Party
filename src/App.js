import React, {useState} from 'react';
// import './App.css';
import ReactPlayer from "react-player";
import Player from './components/player/index'
import ChatApp from './components/chat/index'
import Layout from './components/layout'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Dash from './pages/dash'
import Watch from './pages/Watch'

// function App() {
function Home() {
  return (
    <BrowserRouter>
    <div>
      <Route path= "/"  exact component={Dash}></Route>
      <Route path="/watch" component={Watch}></Route>
      
      {/* <Route path="/view/:postId" component={Single} /> */}
    </div>
    </BrowserRouter>
  );
}





export default Home;
