import DashboardService from "../services/DashboardService.js"

class DashboardController {
  // Dashboard columns
  async createDashboardColumn(req, res) {
    try {
      const card = await DashboardService.createDashboardColumn(req.body)
      return res.json(card)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAllDashboardColumns(req, res) {
    try {
      const cards = await DashboardService.getAllDashboardColumns()
      return res.json(cards)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async deleteDashboardColumn(req, res) {
    try {
      const card = await DashboardService.deleteDashboardColumn(req.params.id)
      return res.json(card)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async changeDashboardColumnsIndex(req, res) {
    try {
      const columns = await DashboardService.changeDashboardColumnsIndex(req.body)
      return res.json(columns)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  // Dashboard cards
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

  async changeDashboardCardsIndex(req, res) {
    try {
      const cards = await DashboardService
      return res.json(cards)
    } catch (error) {
      res.status(500).json(error)
    }
  }

}

export default new DashboardController()