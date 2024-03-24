import DashboardCard from "../models/DashboardCard.js"
import DashboardColumn from "../models/DashboardColumn.js"

class DashboardService {
  // Dashboard columns
  async createDashboardColumn(dashboardColumn) {
    const allCollumns = await DashboardColumn.find({})
    const createdColumn = await DashboardColumn.create({
      ...dashboardColumn,
      index: allCollumns?.length ?? 0,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    })
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

  async editDashboardColumn(column) {
    if (!column._id) {
      throw new Error('Не указан ID')
    }
    const newColumn = await DashboardColumn.findOneAndUpdate({ _id: column._id },
      {
        title: column.title,
        color: column.color,
        updatedAt: new Date().getTime()
      }
    )
    return DashboardColumn.findById(newColumn._id)
  }

  // Dashboard cards
  async createDashboardCard(dashboardCard) {
    const allCards = DashboardCard.find({})
    const createdCard = await DashboardCard.create({
      ...dashboardCard,
      index: allCards?.length ?? 0,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()

    })
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

    const allCards = await DashboardCard.find({})
    allCards.forEach((cCard, index) => cCard.index = index)
    allCards.forEach(async cCard => await DashboardCard.findOneAndUpdate({ _id: cCard._id }, cCard))
    return card
  }

  // body: [{index, _id}]
  async changeDashboardCardsIndex(columnId, body) {
    if (!columnId) {
      throw new Error('не указан ID колонки')
    }
    console.log(body)
    body.forEach(async pair => {
      await DashboardCard.findOneAndUpdate({ _id: pair._id }, { index: pair.index, columnId: columnId })
    })
    return this.getAllDashboardCards()
  }

  async editDashboardCard(card) {
    if (!card._id) {
      throw new Error('Не указан ID')
    }
    const newCard = await DashboardCard.findOneAndUpdate({ _id: card._id },
      {
        title: card.title,
        description: card.description,
        updatedAt: new Date().getTime()
      }
    )
    return await DashboardCard.findById(newCard._id)
  }
}

export default new DashboardService()