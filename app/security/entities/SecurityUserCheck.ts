'use strict';

export class SecurityUserCheck {
    userId: string = '';
    password: string = '';
    verifyCode: string = '';
    verifyFlag: number = 0;
    startDate: Date = null;
    endDate: Date = null;
    permitFlag: number = 0;
    createDate: Date = null;
    createUserId: string = '';
    createCompId: string = '';
    updateDate: Date = null;
    updateUserId: string = '';
    updateCompId: string = '';
    constructor(){
    }
}
