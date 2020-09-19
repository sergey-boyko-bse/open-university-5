const initialState = null

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE':
            return `you voted '${action.data.content}'`
        case 'CREATE_NEW_ANECDOTE':
            return `you created '${action.data.content}'`
        case 'CLEAR_NOTIFICATION':
            return null
        default:
            return state
    }
  }
  
  export default reducer