import { connect } from 'react-redux'
import { setFilterType } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => (
  {
    currentFilterType: state.filterType,
    elementFilterType: ownProps.type
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClickFilter: () => dispatch(setFilterType(ownProps.type))
  }
)

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
