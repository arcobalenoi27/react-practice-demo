import $ from 'jquery'

export const decrease = () => ({type: 'DECREMENT'});
export const getSum = (a, b) => ({type: 'SUM', a, b});
export const getRandomImages = (dispatch, state) => {
  var random = Math.floor((Math.random()*2) + 1);
  var api = 'https://api.imgur.com/3/gallery/random/random/'
  api = `${api}${random}`
  console.log(api);
  dispatch({type: 'IMAGE_LOADING'});
  $.getJSON(api).done( (data) => dispatch({type: 'IMAGES', data: data.data}))
}
