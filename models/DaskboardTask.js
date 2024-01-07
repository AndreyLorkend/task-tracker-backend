import mongoose from "mongoose";

const DashboardTask = new mongoose.Schema({
  title: { type: String, required: true }
})

export default mongoose.model('DashboardTask', DashboardTask)