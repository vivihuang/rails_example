import { handleActions } from 'redux-actions'
import _ from 'lodash'

const initialState = {
  data: {
    completedItems: [],
    uncompletedItems: []
  }
}
export default handleActions({
  'fetch todo data': (state, action) => ({
    data: {
      completedItems: _(action.payload)
        .filter(d => (d.completed))
        .sortBy('id')
        .value(),
      uncompletedItems: _(action.payload)
        .filter(d => (!d.completed))
        .sortBy('id')
        .value()
    }
  })
}, initialState)
