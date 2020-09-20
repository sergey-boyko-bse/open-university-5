const initialState = {
  message: null,
  prevTimeoutId: null
}

const clearNotifications = () => {
    return {
      type: 'CLEAR_NOTIFICATION'
    }
}

const setPrevClearNotifications = (prevTimeoutId) => {
    return {
      type: 'SET_PREV_CLEAR_NOTIFICATION',
      data: prevTimeoutId
    }
}

export const clearNotification = (timeout) => {
  return async dispatch => {
    const prevTimeoutId = setTimeout(() => {
      dispatch(clearNotifications())
    }, timeout * 1000)
    dispatch(setPrevClearNotifications(prevTimeoutId))
  }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE':
            return {
              ...state,
              message: `you voted '${action.data.content}'`
            }
        case 'CREATE_NEW_ANECDOTE':
            return {
              ...state,
              message: `you created '${action.data.content}'`
            }
        case 'CLEAR_NOTIFICATION':
            return initialState        
        case 'SET_PREV_CLEAR_NOTIFICATION':
            if(state.prevTimeoutId) {
              window.clearTimeout(state.prevTimeoutId)
            }            
            return {
              ...state,
              prevTimeoutId: action.data
            }
        default:
            return state
    }
  }
  
  export default reducer