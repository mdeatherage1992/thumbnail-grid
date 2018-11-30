import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Page.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridOpen: false,
      data: []
    }
  }
  handleClick = () => {
  fetch('https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init')
  .then(response => response.json())
  .then(response => this.setState({data: response.list,gridOpen:true}))
  .then(state => console.log(this.state))
}

  render() {

    return (
      <div className="grid">
      <h1>Welcome to the Grid</h1>
    {!this.state.gridOpen && (<div>
      <button id="blue" onClick={this.handleClick.bind(this)}>Click for Display of Ads</button>
      </div>)}
    {this.state.gridOpen && (
      <div className="normal-table">
      <h2>HTML Table</h2>
      <button id="red" onClick={() => this.setState({gridOpen:false})}><span>Back Home</span></button>
      <table>
      {this.state.data.map(i =>
        <div className="table">
        <div className="thumbnail">
        <div className="picture"><img src={i.thumbnail[0].url} /></div>
        <div className="name"><a href={i.url}><span>{i.name}</span></a><p>{i.branding}</p></div>
        </div>
        </div>
        )}
      </table>
      </div>
    )}
    </div>
    )
}
}

export default Page;
