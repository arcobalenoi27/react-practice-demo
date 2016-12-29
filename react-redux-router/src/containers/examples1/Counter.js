import React, {Component} from 'react'
import { connect } from 'react-redux'
import { decrease } from '../../redux/actions/index'

class Counter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {count: {result}, onDecrement} = this.props;
    return (
      <div>
        Clicked: <span>{result}</span>
        <button onClick={onDecrement}>Decrease</button>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) =>({
    count: state.examples.count
  }),
  {onDecrement: decrease}
)(Counter)
