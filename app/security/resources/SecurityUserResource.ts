import {Injectable} from 'angular2/core';
import {ZCHttpService} from '../../zc/core/services/ZCHttpService';

@Injectable()
export class SecurityUserResource {

    constructor(private zcHttpService: ZCHttpService) {
    }

    createSimpleAccount(createSimpleAccountVO) {
        return this.zcHttpService.post('security-user/simple-account', createSimpleAccountVO);
    }

    login(loginVO) {
        return this.zcHttpService.post('security-user/login', loginVO);
    }

    getLoginInfo(userId, languageId){
        return this.zcHttpService.get('security-user/login-info' + '/' + userId + '/' + languageId);
    }

    getRolesInfo(roleId, languageId){
        return this.zcHttpService.get('security-user/login-info-role' + '/' + roleId  + '/' + languageId);
    }
}
