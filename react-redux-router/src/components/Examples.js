import React, {Component} from 'react'

import Counter from '../containers/examples1/Counter'
import Sum from '../containers/examples1/Sum'
import RandomImages from '../containers/examples1/RandomImages'

export  default class Examples extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div>
          <h1>React example</h1>
          <Counter />
          <Sum />
          <RandomImages />
        </div>
    )
  }
}
