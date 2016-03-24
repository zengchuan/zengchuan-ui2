import {Injectable} from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';
import {Response} from 'angular2/http';

import commLanguagesEn from './fixtures/comm-language-en.json!json';
import commLanguagesZhCN from './fixtures/comm-language-zh-CN.json!json';
import en from '../../i18n/en.json!json';
import zhCN from '../../i18n/zh-CN.json!json';

@Injectable()
export class ZCCommLanguageResourceMock {
    constructor(private backend: MockBackend) {
        this.backend.connections.subscribe( c => {
            if (c.request.url.lastIndexOf('comm-language/en') >= 0 && c.request.method === 0) {
                let res = new Response({
                    body: commLanguagesEn
                });
                c.mockRespond(res);
            }

            if (c.request.url.lastIndexOf('comm-language/zh-CN') >= 0 && c.request.method === 0) {
                let res = new Response({
                    body: commLanguagesEn
                });
                c.mockRespond(res);
            }

            if (c.request.url.lastIndexOf('i18n/zh-CN.json') >= 0 && c.request.method === 0) {
                let res = new Response({
                    body: zhCN
                });
                c.mockRespond(res);
            }

            if (c.request.url.lastIndexOf('i18n/en.json') >= 0 && c.request.method === 0) {
                let res = new Response({
                    body: en
                });
                c.mockRespond(res);
            }
        });
    }


}