import React from 'react';
import Preview from './preview';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        title: '',
        body: ''
      },
      style: {
        red: 0
      }
    }
  }
  render() {
    console.log('in da render');
    console.log(this.state);
    return (
      <div className="container">
        <input type="text" value={ this.state.post.title } onChange={ this.handleChange.bind(this) }/>
        <textarea value={ this.state.post.body } onChange={ this.handleBodyChange.bind(this) }/>
        <input type="range" min={0} max={255} value={ this.state.style.red } onChange={ this.handleRangeChange.bind(this) }/>
        <Preview title={ this.state.post.title } body={ this.state.post.body } red={ this.state.style.red }/>
      </div>
    );
  }
  handleChange(e) {
    const newTitle = e.target.value;
    this.setState({
      post: {
        title: newTitle,
        body: this.state.post.body
      }
    });
  }
  handleBodyChange(e) {
    const newBody = e.target.value;
    this.setState({
      post: {
        title: this.state.post.title,
        body: newBody
      }
    })
  }
  handleRangeChange(e) {
    const newRedValue = e.target.value;
    this.setState({
      style: {
        red: newRedValue
      }
    })
  }
}

export default App;
