import DashboardCard from "../models/DashboardCard.js"

class DashboardService {
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