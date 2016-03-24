'use strict';
import CommSequenceId from './CommSequenceId';

export class CommSequence {
        id: CommSequenceId= new CommSequenceId();
    lastDate: Date = null;
    seq: number = 0;
    constructor(){
    }
}
