import express from 'express'
import { serverConfig } from './server.config.js'
import mongoose from 'mongoose'
import { dbConfig } from './db.config.js'
import dashboardRouter from './routers/dashboard.router.js'
import cors from 'cors'

const app = express()

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts))
app.use(express.json())
app.use('/api', dashboardRouter)

async function startApp() {
  try {
    await mongoose.connect(dbConfig.URI)
    app.listen(serverConfig.PORT, () => console.log("SERVER STARTED"))
  } catch (error) {
    console.log(error)
  }
}

startApp()

process.on("SIGINT", async() => {
  await mongoose.disconnect();
  console.log("Приложение завершило работу");
  process.exit();
});