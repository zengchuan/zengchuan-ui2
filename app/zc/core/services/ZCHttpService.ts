import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {ZCConfig} from '../boot/zc-config'
import {ZCModalService} from './ZCModalService';

@Injectable()
export class ZCHttpService {
    constructor(private zcConfig: ZCConfig
                , private http: Http
                , private zcModalService: ZCModalService
        ) {
    }

    getUrl(url){
        if(url.substr(0, 1) === '/'){
            return this.zcConfig.BASE_API_URL + url;
        }
        return this.zcConfig.BASE_API_URL + '/' + url;
    }

    get(url) {
        url = this.getUrl(url);
        return this.http.get(url)
            .do((responseData) => {
                }, (error) => {
                    self.zcModalService.showError(error.json());
                })
            .map( (responseData) => {
                return responseData.json();
            }
        );
    }

    post(url, data){
        let self = this;
        url = this.getUrl(url);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');

        return this.http.post(url, JSON.stringify(data), {headers:headers})
            .do((responseData) => {
                }, (error) => {
                    self.zcModalService.showError(error.json());
                })
            .map((responseData) => {
                    return responseData.json();
                })
            ;
    }

}


