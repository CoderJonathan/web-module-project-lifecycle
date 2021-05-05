import axios from 'axios';
import React, { Component } from 'react'
import UserData from './Data.js'

export default class App extends Component {

  state = {
    gitHubData: [],
    currentUser: "CoderJonathan",
    followers: [],
    followerData:[]
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/CoderJonathan')
    .then(res => {
      this.setState({
        gitHubData: res.data,
      })
      console.log(res.data)
    })
    .catch(err => {
      console.log('This is the error', err)
    })
 
    axios.get('https://api.github.com/users/CoderJonathan/followers')
    .then(res => {
      this.setState({
        followers: res.data,
      })
      console.log("This is followers data", res.data)
    })
    .catch(err => {
      console.log('This is the followers error', err)
    });

    for(let follower of this.state.followers) {
      axios.get(follower.url)
      .then(res => {
        this.setState({
          ...this.state,
         followerData: this.state.followerData.push(res.data)
      })
    })
    
  }
}
  render() {
    const {gitHubData, followers} = this.state;
    console.log(this.state.followerData);
    return (
      <div>
        <UserData gitHubData={gitHubData} followers={followers}/>
      </div>
    )
  }
}