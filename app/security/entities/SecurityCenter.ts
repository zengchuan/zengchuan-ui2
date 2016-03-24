'use strict';

export class SecurityCenter {
    centerId: string = '';
    parentCenterId: string = '';
    centerCode: string = '';
    centerName: string = '';
    centerNameAlias: string = '';
    inputCode: string = '';
    address: string = '';
    zipcode: string = '';
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
