import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!!!')
})

app.listen(1111, () => {
  console.log('Server is running on port 3000')
})
