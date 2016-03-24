import {Component, Injectable} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {LoginVO} from '../models/LoginModel';
import {ZCLanguageService} from '../../../zc/core/services/ZCLanguageService';
import {ZCModalService} from '../../../zc/core/services/ZCModalService';
import {ZCCheckService} from '../../../zc/core/services/ZCCheckService';
import {zcTrim} from '../../../zc/core/services/ZCUtilService';
import {CommLanguage} from '../../../comm/entities/CommLanguage';
import {ZCCommLanguageResource} from '../../../comm/resources/ZCCommLanguageResource';
import {SecurityUserResource} from '../../resources/SecurityUserResource';
import html from './login.html!text';

@Component({
  selector: 'zc-login',
  providers: [],
  template: html,
  directives: [ROUTER_DIRECTIVES],
  pipes: [TranslatePipe]
})
export class ZCLogin {
  loginVO: LoginVO = new LoginVO();
  commLanguageList: Array<CommLanguage>;

  constructor( private location: Location
      , private translateService: TranslateService
      , private zcLanguageService: ZCLanguageService
      , private zcModalService: ZCModalService
      , private zcCommLanguageResource: ZCCommLanguageResource
      , private securityUserResource: SecurityUserResource
      , private zcCheckService: ZCCheckService
      ) {

    this.loginVO.languageId = this.zcLanguageService.get();
    this.zcCommLanguageResource.getCommLanguageById(this.loginVO.languageId).subscribe(datas => this.commLanguageList = datas);
  }

  changeI18n($event){
    let self = this;
    let languageId = $event.target.value;
    self.zcCommLanguageResource.getCommLanguageById(languageId).subscribe(function (datas) {
      self.commLanguageList = datas;
      self.translateService.use(languageId);
      self.loginVO.languageId = languageId;
    });

  }

  login(){
    let self = this;
    self.loginVO = zcTrim(self.loginVO);
    self.checkForm().then(function (data) {
      if (data) {
        self.securityUserResource.login(self.loginVO).subscribe(function (datas) {
              window.sessionStorage.setItem('securityUser', JSON.stringify(datas.securityUser));
              window.sessionStorage.setItem('zc-token', JSON.stringify(datas.randomFlg));
            }, function(error) {
              if(error && error.length > 0){
                self.zcModalService.showError(error);
              }
            }
        );
      }
    });
  }

  checkForm(){
    let self = this;
    return new Promise(function(resolve, reject) {
      self.translateService.get(['TXT_LOGIN_USER', 'TXT_LOGIN_PASSWORD']).subscribe(function(translations){
        if (self.zcCheckService.isNotNull(self.loginVO.userCode, translations['TXT_LOGIN_USER'], 'userCode')) {
          resolve(false);
        } else {
          if (self.zcCheckService.isNotNull(self.loginVO.password, translations['TXT_LOGIN_PASSWORD'], 'password')) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      });
    });
  }

}