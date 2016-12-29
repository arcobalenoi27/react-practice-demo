const counter = (state={result: 0, loading: false}, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return {...state, result: state.result-1 }
    default:
      return state
  }
}

export default counter;
