'use strict';

export class CommClientException {
    id: string = '';
    errorUrl: string = '';
    errorMessage: string = '';
    stackTrace: string = '';
    cause: string = '';
    errorDate: Date = null;
    constructor(){
    }
}
