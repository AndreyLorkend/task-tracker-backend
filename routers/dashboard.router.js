import { Router } from "express";
import DashboardController from "../controllers/DashboardController.js";

const dashboardRouter = new Router()

dashboardRouter.post('/dashboard/cards', DashboardController.createDashboardCard)
dashboardRouter.get('/dashboard/cards', DashboardController.getAllDashboardCards)
dashboardRouter.delete('/dashboard/cards/:id', DashboardController.deleteDashboardCard)

export default dashboardRouter