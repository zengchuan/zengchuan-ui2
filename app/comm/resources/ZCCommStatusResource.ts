import {CommStatus} from '../entities/CommStatus';
import {CommStatusSearchVO} from '../status/models/CommStatusSearchVO';
import {Injectable} from 'angular2/core';
import {ZCHttpService} from '../../zc/core/services/ZCHttpService';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ZCCommStatusResource {

    constructor(private zcHttpService: ZCHttpService) {
    }

    getAllStatusByIds(tableName, statusTableName, languageId, ids) {
        let commStatusSearchVO = new CommStatusSearchVO();
        commStatusSearchVO.tableName = tableName;
        commStatusSearchVO.statusTableName = statusTableName;
        commStatusSearchVO.languageId = languageId;
        commStatusSearchVO.ids = ids;
        return this.zcHttpService.post('comm-status/all-by-ids', commStatusSearchVO, {});
    }

    getIdStatus(id, results) {
        if(results){
            for(var i = 0; i < results.length; i++){
                var result = results[i];
                if(result.tableId === id){
                    return result;
                }
            }
        }
        return null;
    }

    setAllStatusByIds(tableName, statusTableName, languageId, datas, idName) {
        let self = this;
        let ids = [];
        if(datas){
            datas.forEach(function (data) {
                ids.push(data[idName]);
            });
        }
        if(ids.length > 0){
            self.getAllStatusByIds(tableName, statusTableName, languageId, ids)
                .subscribe(function (results) {
                    for(var i = 0; i < datas.length; i++){
                        let data = datas[i];
                        var status = this.getIdStatus(data[idName], results);
                        if(status){
                            data['zc-status-id'] = status.statusId;
                            data['zc-status-name'] = status.statusName;
                        } else {
                            data['zc-status-id'] = '-1';
                            data['zc-status-name'] = '';
                        }
                    }
                return datas;
            });
        } else {
            for(var i = 0; i < datas.length; i++){
                datas['zc-status-id'] = '-1';
                datas['zc-status-name'] = '';
            }
            return Observable.create(function (observer) {
                observer.onNext(datas);
                observer.onCompleted();
                return function () {
                };
            });
        }
    }

    updateStatus(url, id, tableId, status, memo, createUserId) {
        var commStatus = new CommStatus();
        commStatus.id = id;
        commStatus.tableId = tableId;
        commStatus.status = status;
        commStatus.memo = memo;
        commStatus.createUserId = createUserId;
        return this.zcHttpService.post(url, commStatus, {});
    }
}
