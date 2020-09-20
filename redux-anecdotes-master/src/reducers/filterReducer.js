const initialState = ''

export const filter = (keyword) => {
    return {
      type: 'FILTER',
      data: keyword.toLowerCase()
    }
  }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER':
            return action.data
        default:
            return state
    }
}
  
export default reducer