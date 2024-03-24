import { Router } from "express";
import DashboardController from "../controllers/DashboardController.js";

const dashboardRouter = new Router()

// Dashboard columns
dashboardRouter.post('/dashboard/columns', DashboardController.createDashboardColumn)
dashboardRouter.get('/dashboard/columns', DashboardController.getAllDashboardColumns)
dashboardRouter.delete('/dashboard/columns/:id', DashboardController.deleteDashboardColumn)
dashboardRouter.post('/dashboard/columns/change/index', DashboardController.changeDashboardColumnsIndex)
dashboardRouter.post('/dashboard/column/edit', DashboardController.editDashboardColumn)
// Dashboard cards
dashboardRouter.post('/dashboard/cards', DashboardController.createDashboardCard)
dashboardRouter.get('/dashboard/cards', DashboardController.getAllDashboardCards)
dashboardRouter.delete('/dashboard/cards/:id', DashboardController.deleteDashboardCard)
dashboardRouter.post('/dashboard/cards/change/index/:columnId', DashboardController.changeDashboardCardsIndex)
dashboardRouter.post('/dashboard/card/edit', DashboardController.editDashboardCard)

export default dashboardRouter