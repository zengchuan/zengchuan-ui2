import {Injectable} from 'angular2/core';
import {ZCModalService} from './ZCModalService';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {setItemFocus} from './ZCUtilService';
import {ZCModalContent, ZCModalDefaults, ZCModalOptions, ZCModalData} from '../models/ZCModalModel';

@Injectable()
export class ZCCheckService {
    constructor(private translateService: TranslateService
                , private zcModalService: ZCModalService) {
    }

    isNotNull(data, message, focus) {
        let self = this;
        let modalOptions = new ZCModalOptions();
        modalOptions.modalType = 'WARN';

        if(data.length < 1){
            self.translateService.get('TXT_ZC_MESSAGE_NULL').subscribe(function(translation){
                modalOptions.bodyText = translation.replace('$1', message);
                self.zcModalService.showModal(null, modalOptions).then(function (data) {
                    if(focus){
                        setItemFocus(focus);
                    }
                }, function (e) {
                    console.log(e);
                });
            });
            return true;
        }
        return false;
    }

}

