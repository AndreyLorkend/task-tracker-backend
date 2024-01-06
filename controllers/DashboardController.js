import DashboardService from "../services/DashboardService.js"

class DashboardController {

  async createDashboardCard(req, res) {
    try {
      const card = await DashboardService.createDashboardCard(req.body)
      return res.json(card)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAllDashboardCards(req, res) {
    try {
      const cards = await DashboardService.getAllDashboardCards()
      return res.json(cards)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async deleteDashboardCard(req, res) {
    try {
      const card = await DashboardService.deleteDashboardCard(req.params.id)
      return res.json(card)
    } catch (error) {
      res.status(500).json(error)
    }
  }

}

export default new DashboardController()