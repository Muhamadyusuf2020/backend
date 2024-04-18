const mongoose = require('mongoose')

const server = 'mongo:27017' // REPLACE WITH YOUR OWN SERVER
const database = 'mean-crud'         // REPLACE WITH YOUR OWN DB NAME

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`)

    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  }
}

connectDB()
