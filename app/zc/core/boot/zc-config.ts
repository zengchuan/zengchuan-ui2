import {Injectable} from 'angular2/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {ZCLanguageService} from '../services/ZCLanguageService';

@Injectable()
export class ZCConfig {
  BASE_API_URL: string = 'http://localhost:9080/zc/zc-api';

  constructor(private translateService: TranslateService, private zcLanguageService: ZCLanguageService) {
    this.setTranslate();
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

}

export const ZCCONFIG_PROVIDERS = [ZCConfig];