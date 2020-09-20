import anecdoteService from '../services/anecdote'

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateOne({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createOne(content)
    dispatch({
      type: 'CREATE_NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      return state.map(a =>
        a.id !== action.data.id ? a : action.data 
      )
    case 'CREATE_NEW_ANECDOTE':
      return [ ...state, action.data ]
    case 'INIT_ANECDOTES':
        return action.data
    default:
      return state
  }
}

export default reducer