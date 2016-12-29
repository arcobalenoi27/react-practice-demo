const getImages = (state={data:[],
  loading: 'Please click the "Random Images" Button'}, action) => {
  switch (action.type) {
    case 'IMAGE_LOADING':
      return {...state, loading: 'loading...'}
    case 'IMAGES':
      return {...state, data: action.data, loading: 'loaded'}
    default:
      return state
  }
}

export default getImages;
