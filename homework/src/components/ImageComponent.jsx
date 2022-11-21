import React from 'react'

class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.image} alt={this.props.altText}></img>
  }
}

export default ImageComponent
