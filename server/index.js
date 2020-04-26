import Express from 'express'
import Mongoose from 'mongoose'

Mongoose.connect('mongodb://localhost:27017/moonshine', { useNewUrlParser: true, useUnifiedTopology: true })

const app = Express()

app.listen(3000, () => {
	console.log('server listening intently.')
})
