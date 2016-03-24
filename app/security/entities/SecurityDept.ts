'use strict';

export class SecurityDept {
    deptId: string = '';
    parentDeptId: string = '';
    centerId: string = '';
    deptCode: string = '';
    deptName: string = '';
    inputCode: string = '';
    location: string = '';
    tel1: string = '';
    tel2: string = '';
    fax: string = '';
    homepage: string = '';
    remark: string = '';
    deleteFlag: number = 0;
    createDate: Date = null;
    createUserId: string = '';
    createCompId: string = '';
    updateDate: Date = null;
    updateUserId: string = '';
    updateCompId: string = '';
    constructor(){
    }
}
