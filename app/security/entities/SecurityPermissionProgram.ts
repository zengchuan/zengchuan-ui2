'use strict';
import SecurityPermissionProgramId from './SecurityPermissionProgramId';

export class SecurityPermissionProgram {
        id: SecurityPermissionProgramId= new SecurityPermissionProgramId();
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
