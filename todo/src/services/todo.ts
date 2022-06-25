import axios from 'axios'
import { apiUri } from '../util/config'
import { Todo } from '../types/todo'

const baseUrl = `${apiUri()}/api/todos`

export const getAll = async () => {
  try {
    const { data } = await axios.get<Array<Todo>>(baseUrl)
    return data as Array<Todo>
  } catch (error) {
    console.error(error)
    return []
  }
}

export const create = async (todo: String) => {
  try {
    const { data } = await axios.post<Todo>(baseUrl, { text: todo })
    return data as Todo
  } catch (error) {
    console.error(error)
  }
}