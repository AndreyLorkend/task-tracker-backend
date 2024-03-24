import mongoose from "mongoose";

const DashboardCard = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  columnId: { type: String, required: true },
  index: { type: Number, required: false, default: 0 },
  createdAt: { type: Number, required: false },
  updatedAt: { type: Number, required: false }
})

export default mongoose.model('DashboardCard', DashboardCard)