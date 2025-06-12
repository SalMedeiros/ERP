class PermissionController {
    constructor(permissionService) {
        this.permissionService = permissionService;
    }

    async createPermission(req, res) {
        try {
            const permissionData = req.body;
            const newPermission = await this.permissionService.createPermission(permissionData);
            res.status(201).json(newPermission);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPermissions(req, res) {
        try {
            const permissions = await this.permissionService.getPermissions();
            res.status(200).json(permissions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async assignPermission(req, res) {
        try {
            const { userId, permissionId } = req.body;
            const result = await this.permissionService.assignPermission(userId, permissionId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default PermissionController;