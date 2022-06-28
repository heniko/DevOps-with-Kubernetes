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
  if (!req.body.text) {
    console.log("Missing text")
    res.status(400).json('Text is required')
  } else if (req.body.text.length > 140) {
    console.log(`Text is too long (${req.body.text.length} chars): "${req.body.text}"`)
    res.status(400).json('Text is too long')
  } else {
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
  }
})

module.exports = todoRouter