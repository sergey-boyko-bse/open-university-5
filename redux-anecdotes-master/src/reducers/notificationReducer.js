const initialState = {
  message: null,
  count: 0
}

const clearNotifications = () => {
    return {
      type: 'CLEAR_NOTIFICATION'
    }
}

export const clearNotification = (timeout) => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(clearNotifications())
    }, timeout * 1000)
  }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE':
            return {
              message: `you voted '${action.data.content}'`,
              count: state.count + 1
            }
        case 'CREATE_NEW_ANECDOTE':
            return {
              message: `you created '${action.data.content}'`,
              count: state.count + 1
            }
        case 'CLEAR_NOTIFICATION':
            return state.count > 1
            ? {
              ...state,
              count: state.count - 1
            } 
            : initialState
        default:
            return state
    }
  }
  
  export default reducer