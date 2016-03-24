import {Injectable, Injector, provide} from 'angular2/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {ModalDialogInstance, ICustomModal, Modal, ModalConfig} from 'angular2-modal/dist/angular2-modal';
import {ZCModalContent, ZCModalDefaults, ZCModalOptions, ZCModalData} from '../models/ZCModalModel';
import {ZCModal} from '../components/zc-modal';
import {setItemFocus} from './ZCUtilService';

@Injectable()
export class ZCModalService {

    constructor(private translateService: TranslateService
                , private modal: Modal) {
    }

    showModal(customModalDefaults: ZCModalDefaults, customModalOptions: ZCModalOptions) {
        let self = this;
        let modalDefaults: ZCModalDefaults = customModalDefaults ? customModalDefaults :  new ZCModalDefaults();
        let modalOptions: ZCModalOptions = new ZCModalOptions();

        let modalType = customModalOptions ? customModalOptions.modalType || modalOptions.modalType : modalOptions.modalType;
        return new Promise(function(resolve, reject){
            self.translateService.get(['TXT_ZC_MODAL_INFO'//0
                , 'TXT_ZC_MODAL_OK'  //1
                , 'TXT_ZC_MODAL_QUESTION'//2
                , 'TXT_ZC_MODAL_WARN'//3
                , 'TXT_ZC_MODAL_CLOSE'//4
                , 'TXT_ZC_MODAL_CONFIRM'//5
                , 'TXT_ZC_MODAL_CONFIRM_YES'//6
                , 'TXT_ZC_MODAL_CONFIRM_NO'//7
                , 'TXT_ZC_MODAL_HEADER'//8
                , 'TXT_ZC_MODAL_PROMPT'//9
                , 'TXT_ZC_MODAL_PROMPT_INFO'//10
                , 'TXT_ZC_MODAL_TEXT'//11
                , 'TXT_ZC_MODAL_DEFAULT_OK'//12
                , 'TXT_ZC_MODAL_DEFAULT_WARN'//13
                , 'TXT_ZC_MODAL_DEFAULT_DELETE'//14
            ]).subscribe(function(datas){
                modalOptions.closeButtonText = customModalOptions ? customModalOptions.closeButtonText || datas.TXT_ZC_MODAL_CLOSE : datas.TXT_ZC_MODAL_CLOSE;
                modalOptions.actionButtonText = customModalOptions ? customModalOptions.actionButtonText || datas.TXT_ZC_MODAL_CONFIRM : datas.TXT_ZC_MODAL_CONFIRM;
                modalOptions.bodyText = customModalOptions ? customModalOptions.bodyText || datas.TXT_ZC_MODAL_TEXT : datas.TXT_ZC_MODAL_TEXT;
                if (modalType === 'INFO') {
                    modalOptions.iconClass = 'glyphicon glyphicon-info-sign zc-modal-info';
                    modalOptions.showPrompt = false;
                    modalOptions.showConfirm = false;
                    modalOptions.headerText = customModalOptions ? customModalOptions.headerText || datas.TXT_ZC_MODAL_INFO : datas.TXT_ZC_MODAL_INFO;
                } else if (modalType === 'OK') {
                    modalOptions.iconClass = 'glyphicon glyphicon-ok-sign zc-modal-info';
                    modalOptions.showPrompt = false;
                    modalOptions.showConfirm = false;
                    modalOptions.headerText = customModalOptions ? customModalOptions.headerText || datas.TXT_ZC_MODAL_OK : datas.TXT_ZC_MODAL_OK;
                    modalOptions.bodyText = customModalOptions ? customModalOptions.bodyText || datas.TXT_ZC_MODAL_DEFAULT_OK : datas.TXT_ZC_MODAL_DEFAULT_OK;
                } else if (modalType === 'QUSETION') {
                    modalOptions.iconClass = 'glyphicon glyphicon-question-sign zc-modal-info';
                    modalOptions.showPrompt = false;
                    modalOptions.showConfirm = true;
                    modalOptions.headerText = customModalOptions ? customModalOptions.headerText || datas.TXT_ZC_MODAL_QUESTION : datas.TXT_ZC_MODAL_QUESTION;
                    modalOptions.actionButtonText = customModalOptions ? customModalOptions.actionButtonText || datas.TXT_ZC_MODAL_CONFIRM_YES : datas.TXT_ZC_MODAL_CONFIRM_YES;
                    modalOptions.closeButtonText = customModalOptions ? customModalOptions.closeButtonText || datas.TXT_ZC_MODAL_CONFIRM_NO : datas.TXT_ZC_MODAL_CONFIRM_NO;
                    modalOptions.bodyText = customModalOptions ? customModalOptions.bodyText || datas.TXT_ZC_MODAL_DEFAULT_DELETE : datas.TXT_ZC_MODAL_DEFAULT_DELETE;
                } else if (modalType === 'WARN') {
                    modalOptions.iconClass = 'glyphicon glyphicon-exclamation-sign zc-modal-warn';
                    modalOptions.showPrompt = false;
                    modalOptions.showConfirm = false;
                    modalOptions.headerText = customModalOptions ? customModalOptions.headerText || datas.TXT_ZC_MODAL_WARN : datas.TXT_ZC_MODAL_WARN;
                    modalOptions.bodyText = customModalOptions ? customModalOptions.bodyText || datas.TXT_ZC_MODAL_DEFAULT_WARN : datas.TXT_ZC_MODAL_DEFAULT_WARN;
                } else if (modalType === 'PROMPT') {
                    modalOptions.iconClass = '';
                    modalOptions.showPrompt = true;
                    modalOptions.showConfirm = true;
                    modalOptions.headerText = customModalOptions ? customModalOptions.headerText || datas.TXT_ZC_MODAL_PROMPT : datas.TXT_ZC_MODAL_PROMPT;
                    modalOptions.promptText = customModalOptions ? customModalOptions.promptText || datas.TXT_ZC_MODAL_PROMPT_INFO : datas.TXT_ZC_MODAL_PROMPT_INFO;
                }

                let dialog: Promise<ModalDialogInstance>;
                let component = ZCModal;
                let bindings = Injector.resolve([
                    provide(ICustomModal, {useValue: new ZCModalContent(new ZCModalData(), modalOptions)})
                ]);
                dialog = self.modal.open(
                    <any>component,
                    bindings,
                    new ModalConfig(modalDefaults.size, modalDefaults.isBlocking, modalDefaults.keyboard));


                dialog.then(function(resultPromise){
                    resultPromise.result.then(function (data) {
                        resolve(data);
                    });
                });

            });
        });
    }

    showSuccess(){
        let self = this;
        let modalOptions = new ZCModalOptions();
        modalOptions.modalType = 'OK';
        return new Promise(function(resolve, reject) {
            self.showModal(null, modalOptions).then(function (result) {
                resolve(result);
            });
        });
    }

    showDelete() {
        let self = this;
        let modalOptions = new ZCModalOptions();
        modalOptions.modalType = 'QUSETION';
        return new Promise(function(resolve, reject) {
            self.showModal(null, modalOptions).then(function (result) {
                resolve(result);
            });
        });
    }

    showError(err) {
        let self = this;
        let modalOptions = new ZCModalOptions();
        modalOptions.modalType = 'WARN';
        if (err instanceof Array) {
            modalOptions.bodyText = err[0].errorMessage;
        }
        return new Promise(function(resolve, reject) {
            self.showModal(null, modalOptions).then(function (result) {
                if(err instanceof Array && err[0].errorDomId){
                    setItemFocus(err[0].errorDomId);
                }
                resolve(result);
            });
        });
    }

}


