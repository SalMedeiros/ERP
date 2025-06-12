class PermissionService {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }

    async createPermission(permissionData) {
        const permission = new this.permissionModel(permissionData);
        return await permission.save();
    }

    async getPermissions() {
        return await this.permissionModel.find();
    }

    async assignPermission(userId, permissionId) {
        const user = await this.permissionModel.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        user.permissions.push(permissionId);
        return await user.save();
    }
}

module.exports = PermissionService;