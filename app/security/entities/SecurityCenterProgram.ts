'use strict';
import SecurityCenterProgramId from './SecurityCenterProgramId';

export class SecurityCenterProgram {
        id: SecurityCenterProgramId= new SecurityCenterProgramId();
    createDate: Date = null;
    createUserId: string = '';
    createCompId: string = '';
    updateDate: Date = null;
    updateUserId: string = '';
    updateCompId: string = '';
    constructor(){
    }
}
