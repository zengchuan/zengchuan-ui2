import {Injectable} from 'angular2/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {ZCLanguageService} from '../services/ZCLanguageService';
import {ZCCommResourceMock}  from '../../../comm/resources/ZCCommResource.mock';

@Injectable()
export class ZCConfigMock {
  BASE_API_URL: string = 'http://localhost:9080/zc/zc-api';

  constructor(private translateService: TranslateService
      , private zcLanguageService: ZCLanguageService
      , private zcCommResourceMock: ZCCommResourceMock
  ) {
    this.setTranslate();
    this.initMock();
  }

  setTranslate(){
    let language =  this.zcLanguageService.get();
    //let prefix = 'i18n';
    //let suffix = '.json';
    //this.translateService.useStaticFilesLoader(prefix, suffix);
    this.translateService.setDefaultLang(language);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use(language);

  }

  initMock(){

  }

}

export const ZCCONFIG_PROVIDERS_MOCK = [ZCConfigMock];