import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

import {ZCLogin} from '../../../security/login/components/login';
import {ZCConfigMock} from './zc-config.mock';
import {CreateSimpleAccount} from '../../../security/create-simple-account/components/CreateSimpleAccount';


@Component({
  selector: 'zc-app-mock',
  providers: [],
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  { path: '/', component: ZCLogin, name: 'ZCLogin', useAsDefault: true},
  { path: '/**', redirectTo: ['ZCLogin'] },
  { path: '/create-simple-account', component: CreateSimpleAccount, name:'CreateSimpleAccount' }
])
export class ZCAppMock {
  constructor(zcConfigMock: ZCConfigMock) {
  }

}