const initialState = null

export const clearNotifications = () => {
    return {
      type: 'CLEAR_NOTIFICATION'
    }
  }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE':
            return `you voted '${action.data.content}'`
        case 'CREATE_NEW_ANECDOTE':
            return `you created '${action.data}'`
        case 'CLEAR_NOTIFICATION':
            return null
        default:
            return state
    }
  }
  
  export default reducer