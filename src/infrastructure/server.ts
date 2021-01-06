import express from 'express'
import router from './router'

const app = express()


app.use('/api',router)

app.listen(3000,() => {
    console.log('listen on port 3000')
})

export default app