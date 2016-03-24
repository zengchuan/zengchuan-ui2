'use strict';
import SecurityPermissionConfigId from './SecurityPermissionConfigId';

export class SecurityPermissionConfig {
        id: SecurityPermissionConfigId= new SecurityPermissionConfigId();
    configValue: string = '';
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
