const sum = (state=3, action) => {
  switch (action.type) {
    case 'SUM':
      return parseInt(action.a) + parseInt(action.b)
    default:
      return state
  }
}

export default sum;
