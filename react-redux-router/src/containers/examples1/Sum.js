import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getSum } from '../../redux/actions/index'

class Sum extends Component {
  constructor(props) {
    super(props)
    this.state = {a:1, b:2, sum:3}
  }
  render() {
    const { a, b} = this.state;
    const { sum, onSum} = this.props;
    return (
      <div>
        <input value={a} onChange={(e) =>this.setState({a: e.target.value})} />
        +
        <input value={b} onChange={(e) =>this.setState({b: e.target.value})} />
        = <span>{sum}</span>
        <button type="button" onClick={() =>onSum(this.state.a, this.state.b)}>Sum</button>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
      sum: state.examples.sum
  }),
{
      onSum:  getSum
}
)(Sum)
