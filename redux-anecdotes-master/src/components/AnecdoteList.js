import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteFor(anecdote))
        dispatch(clearNotification(5))
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      anecdotes: state.filter ? state.anecdotes.filter(x => x.content.toLowerCase().indexOf(state.filter) > -1).sort((a, b) => b.votes - a.votes) : state.anecdotes,
      filter: state.filter
    }
}
  
export default connect(
    mapStateToProps
)(AnecdoteList)