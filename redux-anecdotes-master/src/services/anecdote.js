import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createOne = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateOne = async (item) => {
  const response = await axios.put(`${baseUrl}/${item.id}`, item)
  return response.data
}

export default {
  getAll,
  createOne,
  updateOne
}