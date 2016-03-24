import {Injectable} from 'angular2/core';
import {ZCHttpService} from '../../zc/core/services/ZCHttpService';

@Injectable()
export class ZCCommLanguageResource {
    constructor(private zcHttpService: ZCHttpService) {
    }

    getCommLanguageById(id) {
        return this.zcHttpService.get('comm-language/' + id);
    }
}