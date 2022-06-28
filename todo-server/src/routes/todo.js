const todoRouter = require('express').Router()

todoRouter.get('/', async (req, res) => {
  try {
    const todos = await req.prisma.todo.findMany()
    res.json(todos)
  } catch (err) {
    res.status(400).json(err.message)
  }
})

todoRouter.post('/', async (req, res) => {
  try {
    const todo = await req.prisma.todo.create({
      data: {
        text: req.body.text,
      }
    })
    res.json(todo)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = todoRouter