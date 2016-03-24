import {SecurityUser} from '../../entities/SecurityUser';

export class CreateSimpleAccountVO {
    securityUser: SecurityUser = new SecurityUser();
    password: string = '';
    languageId: string = '';

    constructor(){
    }
}

export class CreateSimpleAccountInfo {
    passwordConfirm: string = '';
    checked: number = 0;
    constructor(){
    }
}


