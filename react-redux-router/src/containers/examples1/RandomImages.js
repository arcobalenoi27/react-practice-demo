import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getRandomImages } from '../../redux/actions/index'

class RandomImages extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {images:{ data, loading} ,onRandomImages} = this.props;
    return (
      <div>
      <button onClick={onRandomImages}>Random Images</button>
      <br />CountStatus:
      <span style={{ color: 'blue' }}>
      {loading}
      </span>
      <ImageList images={data} />
      </div>
    )
  }
}

const ImageList = ( { images } ) =>
{
  return (
    <div>
    {
      images.map( (image) => (
      <img src={image.link}
      style={{ height: '200px',padding: '5px' }}
      key={image.id} />) )
    }
    </div>
  )
}

export default connect(
  (state, ownProps) => ({
      images: state.examples.images
  }),
  {
    onRandomImages: () =>  getRandomImages
  }
)(RandomImages)
