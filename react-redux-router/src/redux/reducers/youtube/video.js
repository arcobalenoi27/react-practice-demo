const video = (state=null, action) => {
  switch (action.type) {
    case 'YOUTUBE_VIDEO':
      return action.video
    default:
      return state
  }
}

export default video;
