import {Injectable} from 'angular2/core';

@Injectable()
export class ZCLanguageService {
    constructor() {
    }

    get() {
        var zclanguage = window.localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        if(!zclanguage){
            zclanguage = this.getLocale();
            if(!zclanguage){
                zclanguage = 'en';
            }
        }
        return zclanguage;
    }

    getLocale() {
        var nav = window.navigator;
        return nav.language || nav.browserLanguage || nav.systemLanguage || nav.userLanguage || 'undefined';
    }

    getLanguageForTinymce(languageId) {
        if(languageId === 'en'){
            return 'en_GB';
        }
        if(languageId === 'zh-CN'){
            return 'zh_CN';
        }
        return languageId;
    }

    getLanguageForDate(languageId) {
        if(languageId === 'en'){
            return 'en-GB';
        }
        return languageId;
    }

}


