import {Injectable} from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';
import {Response} from 'angular2/http';

import commGenderEn from './fixtures/comm-gender-en.json!json';
import commGenderZhCN from './fixtures/comm-gender-zh-CN.json!json';

@Injectable()
export class ZCCommDictResourceMock {
    constructor(private backend: MockBackend) {
        this.backend.connections.subscribe( c => {
            if (c.request.url.lastIndexOf('comm-dict/CommGender/en') >= 0 && c.request.method === 0) {
                let res = new Response({
                    body: commGenderEn
                });
                c.mockRespond(res);
            }

            if (c.request.url.lastIndexOf('comm-dict/CommGender/zh-CN') >= 0 && c.request.method === 0) {
                let res = new Response({
                    body: commGenderZhCN
                });
                c.mockRespond(res);
            }

        });
    }


}