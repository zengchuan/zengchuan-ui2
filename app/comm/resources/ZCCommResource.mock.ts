import {Injectable} from 'angular2/core';
import {ZCCommLanguageResourceMock} from './ZCCommLanguageResource.mock';
import {ZCCommDictResourceMock} from './ZCCommDictResource.mock';

@Injectable()
export class ZCCommResourceMock {
    constructor(private zcCommLanguageResourceMock: ZCCommLanguageResourceMock
                , private zcCommDictResourceMock: ZCCommDictResourceMock
    ) {

    }
}

export const ZC_COMM_PROVIDERS_MOCK = [ZCCommResourceMock, ZCCommLanguageResourceMock, ZCCommDictResourceMock];
