'use strict';
import SecurityUserRoleId from './SecurityUserRoleId';

export class SecurityUserRole {
        id: SecurityUserRoleId= new SecurityUserRoleId();
    centerId: string = '';
    isDefault: number = 0;
    createDate: Date = null;
    createUserId: string = '';
    createCompId: string = '';
    updateDate: Date = null;
    updateUserId: string = '';
    updateCompId: string = '';
    constructor(){
    }
}
