import React, {Component} from 'react'
import '../App.scss'

class Tweet extends Component{
  constructor(props){
    super(props)
    this.state ={
      name: props.name,
      text: props.text,
      likesCount: props.likes
    }
    this.uptdateLikes = this.uptdateLikes.bind(this)
    // this.render = this.render.bind(this)
  }

  uptdateLikes(){
    this.setState((prev) => {
      return {likesCount: prev.likesCount+1}
    })
  }

  render(){
    return (
      <div id='tweet'>
        <h1 id='tweet-name'>{this.state.name}</h1>
        <p id='tweet-text'>{this.state.text}</p>
        {/* <div> */}
          <button id='tweet-like-button' onClick={this.uptdateLikes}>Like</button>
          <p  id='tweet-like-count'>{this.state.likesCount}</p> 
        {/* </div> */}
      </div>
    )
  }
}

export default Tweet