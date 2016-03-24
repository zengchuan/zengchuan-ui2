'use strict';
import CommNewsStatusId from './CommNewsStatusId';

export class CommNewsStatus {
        id: CommNewsStatusId= new CommNewsStatusId();
    name: string = '';
    inputCode: string = '';
    memo: string = '';
    sortNo: number = 0;
    constructor(){
    }
}
