import mongoose from "mongoose";

const DashboardColumn = new mongoose.Schema({
  title: { type: String, required: true },
  color: { type: String, required: true }
})

export default mongoose.model('DashboardColumn', DashboardColumn)