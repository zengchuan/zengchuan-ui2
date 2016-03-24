'use strict';
import SecurityRolePermissionId from './SecurityRolePermissionId';

export class SecurityRolePermission {
        id: SecurityRolePermissionId= new SecurityRolePermissionId();
    centerId: string = '';
    createDate: Date = null;
    createUserId: string = '';
    createCompId: string = '';
    updateDate: Date = null;
    updateUserId: string = '';
    updateCompId: string = '';
    constructor(){
    }
}
