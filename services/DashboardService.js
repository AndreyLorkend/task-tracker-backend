import DashboardCard from "../models/DashboardCard.js"
import DaskboardColumn from "../models/DaskboardColumn.js"

class DashboardService {
  // Dashboard columns
  async createDashboardColumn(dashboardColumn) {
    const createdColumn = await DaskboardColumn.create(dashboardColumn)
    return createdColumn
  }

  async getAllDashboardColumns() {
    const columns = await DaskboardColumn.find()
    return columns
  }

  async deleteDashboardColumn(id) {
    if(!id) {
      throw new Error('не указан ID')
    }
    await DashboardCard.deleteMany({ columnId: id })
    const column = await DaskboardColumn.findByIdAndDelete(id)
    return column
  }
  // Dashboard cards
  async createDashboardCard(dashboardCard) {
    const createdCard = await DashboardCard.create(dashboardCard)
    return createdCard
  }

  async getAllDashboardCards() {
    const cards = await DashboardCard.find()
    return cards
  }

  async deleteDashboardCard(id) {
    if(!id) {
      throw new Error('не указан ID')
    }
    const card = await DashboardCard.findByIdAndDelete(id)
    return card
  }
}

export default new DashboardService()