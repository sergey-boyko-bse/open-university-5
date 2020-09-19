import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const filter = useSelector(({ filter }) => filter)
    const anecdotes = useSelector(({ anecdotes }) => anecdotes.filter(x => x.content.indexOf(filter) > -1).sort((a, b) => b.votes - a.votes))    
    const dispatch = useDispatch()
  
    const vote = (anecdote) => {
        dispatch(voteFor(anecdote, 5))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
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

export default AnecdoteList