import mongoose from "mongoose";

const DashboardCard = new mongoose.Schema({
  title: { type: String, required: true },
  taskId: { type: String, required: true }
})

export default mongoose.model('DashboardCard', DashboardCard)