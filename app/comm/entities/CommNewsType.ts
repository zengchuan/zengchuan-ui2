'use strict';
import CommNewsTypeId from './CommNewsTypeId';

export class CommNewsType {
        id: CommNewsTypeId= new CommNewsTypeId();
    name: string = '';
    inputCode: string = '';
    memo: string = '';
    sortNo: number = 0;
    constructor(){
    }
}
