const express = require('express');
const PermissionController = require('../controllers/permissionController');

const router = express.Router();
const permissionController = new PermissionController();

function setPermissionRoutes(app) {
    router.post('/permissions', permissionController.createPermission.bind(permissionController));
    router.get('/permissions', permissionController.getPermissions.bind(permissionController));
    router.post('/permissions/assign', permissionController.assignPermission.bind(permissionController));

    app.use('/api', router);
}

module.exports = setPermissionRoutes;