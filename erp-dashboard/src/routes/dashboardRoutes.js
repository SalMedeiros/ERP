const express = require('express');
const DashboardController = require('../controllers/dashboardController');

const router = express.Router();
const dashboardController = new DashboardController();

const setDashboardRoutes = (app) => {
    router.get('/stats', dashboardController.getDashboardStats.bind(dashboardController));
    router.post('/instance', dashboardController.createInstance.bind(dashboardController));

    app.use('/api/dashboard', router);
};

module.exports = setDashboardRoutes;