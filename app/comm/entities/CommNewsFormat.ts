'use strict';
import CommNewsFormatId from './CommNewsFormatId';

export class CommNewsFormat {
        id: CommNewsFormatId= new CommNewsFormatId();
    name: string = '';
    inputCode: string = '';
    memo: string = '';
    sortNo: number = 0;
    constructor(){
    }
}
