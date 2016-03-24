import {Component, Injectable} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {ZCLanguageService} from '../../../zc/core/services/ZCLanguageService';
import {CommLanguage} from '../../../comm/entities/CommLanguage';
import {ZCCommDictResource} from '../../../comm/resources/ZCCommDictResource';
import {CreateSimpleAccountVO, CreateSimpleAccountInfo} from '../models/CreateSimpleAccountModel';
import html from './create-simple-account.html!text';

@Component({
    selector: 'zc-create-simple-account',
    providers: [],
    template: html,
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class CreateSimpleAccount {
    dt:Date = new Date();
    languageId: string = '';
    commGenderList: Array<any>;
    createSimpleAccountVO: CreateSimpleAccountVO = new CreateSimpleAccountVO();
    createSimpleAccountInfo: CreateSimpleAccountInfo = new CreateSimpleAccountInfo();

    constructor(private translateService: TranslateService
                , private zcCommDictResource: ZCCommDictResource) {
        this.languageId = this.translateService.currentLang;
        this.zcCommDictResource.getCommDictByLanguageId('CommGender', this.languageId).subscribe(datas => this.commGenderList = datas);

    }

    saveSimpleAccount(){
        console.log(this.createSimpleAccountVO);
    }

}
