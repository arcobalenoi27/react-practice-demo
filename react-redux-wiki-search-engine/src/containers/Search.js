import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search } from '../redux/actions/index'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state= { term: ''};
  }

  render() {
    const {state:{term}} = this;
    const {onSearch} = this.props;
    const onSetTerm = (e) => {
      e.preventDefault();
      onSearch(term);
    }
    return (
      <div>
        <form onSubmit={ onSetTerm } >
          <input  value={term}
                 onChange={(e) => this.setState({term: e.target.value}) }
                 />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }
}

//search.bind(null, term) 只傳第1個參數
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onSearch: (term) => dispatch(search.bind(null, term)) };
}

export default connect( null,
  mapDispatchToProps
)(Search)
