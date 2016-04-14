const filterType = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'filter':
      return action.filter
    default:
      return state
  }
}

export default filterType
