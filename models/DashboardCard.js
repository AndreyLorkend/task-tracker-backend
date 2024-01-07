import mongoose from "mongoose";

const DashboardCard = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  columnId: { type: String, required: true }
})

export default mongoose.model('DashboardCard', DashboardCard)