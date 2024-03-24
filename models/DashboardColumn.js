import mongoose from "mongoose";

const DashboardColumn = new mongoose.Schema({
  title: { type: String, required: true },
  color: { type: String, required: true },
  index: { type: Number, required: false, default: 0 },
  createdAt: { type: Number, required: false, default: new Date().getTime() },
  updatedAt: { type: Number, required: false, default: new Date().getTime() }
})

export default mongoose.model('DashboardColumn', DashboardColumn)