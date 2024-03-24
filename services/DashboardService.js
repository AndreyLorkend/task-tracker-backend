import DashboardCard from "../models/DashboardCard.js"
import DashboardColumn from "../models/DashboardColumn.js"

class DashboardService {
  // Dashboard columns
  async createDashboardColumn(dashboardColumn) {
    const allCollumns = await DashboardColumn.find({})
    const createdColumn = await DashboardColumn.create({ ...dashboardColumn, index: allCollumns?.length ?? 0 })
    return createdColumn
  }

  async getAllDashboardColumns() {
    const columns = await DashboardColumn.find()
    return columns
  }

  async deleteDashboardColumn(id) {
    if (!id) {
      throw new Error('не указан ID')
    }
    await DashboardCard.deleteMany({ columnId: id })
    const column = await DashboardColumn.findByIdAndDelete(id)
    const allColumns = await DashboardColumn.find({})
    allColumns.forEach((col, index) => col.index = index)
    allColumns.forEach(async col => await DashboardColumn.findOneAndUpdate({ _id: col._id }, col))
    return column
  }
  // body: [{index, _id}]
  async changeDashboardColumnsIndex(body) {
    if (!body) {
      throw new Error('ERRORR!!!!')
    }
    body.forEach(async pair => {
      await DashboardColumn.findOneAndUpdate({ _id: pair._id }, { index: pair.index })
    })
    return this.getAllDashboardColumns()
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
    if (!id) {
      throw new Error('не указан ID')
    }
    const card = await DashboardCard.findByIdAndDelete(id)
    return card
  }
}

export default new DashboardService()