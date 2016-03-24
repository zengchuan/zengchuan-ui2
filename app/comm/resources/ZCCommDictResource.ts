import {Injectable} from 'angular2/core';
import {ZCHttpService} from '../../zc/core/services/ZCHttpService';

@Injectable()
export class ZCCommDictResource {

    constructor(private zcHttpService: ZCHttpService) {
    }

    getCommDictByLanguageId(dictName, languageId) {
        return this.zcHttpService.get('comm-dict' + '/' + dictName + '/' + languageId);
    }
}
