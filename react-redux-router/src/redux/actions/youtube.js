import $ from 'jquery'
export const setList = (list) => ({type: 'YOUTUBE_SEARCH_LOADED', list});
export const setTerm = () =>({type: 'YOUTUBE_TERM'});
export const setVideo = (video) => ({type: 'YOUTUBE_VIDEO', video});

export const search = (term, dispatch, state) => {
  dispatch({type: 'YOUTUBE_SEARCH_LOADING'});
  const MAX = 20;
  const API_KEY = 'AIzaSyA49gbX6L9gACTSM-xUP1wOcKWOt1iVhs8';
  var api = 'https://www.googleapis.com/youtube/v3/search';
  api = `${api}?part=snippet&maxResults=${MAX}&order=viewCount&q=${term}&key=${API_KEY}`;
  $.getJSON(api).done( (data) => {
    const list = data.items.filter( (videoItem) => videoItem.id && videoItem.id.videoId );
    dispatch(setList(list));
    dispatch(setVideo(null));
  });
}
