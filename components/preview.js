import React from 'react';

class Preview extends React.Component {
  render() {
    const { body, red, title } = this.props;
    const color = `rgb(${red}, 0, 0)`;
    const myStyle = {
      backgroundColor: color
    };
    return (
      <div style={ myStyle }>
        <p>{ title }</p>
        <p>{ body }</p>
      </div>
    );
  }
}

export default Preview;
