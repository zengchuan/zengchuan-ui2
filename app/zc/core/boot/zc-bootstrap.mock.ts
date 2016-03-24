"use strict";

import './zc-vendor';

import {provide} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, Http, BaseRequestOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate/ng2-translate';
import {Modal} from 'angular2-modal/dist/angular2-modal';
import {ZCCONFIG_PROVIDERS} from './zc-config';
import {ZCCONFIG_PROVIDERS_MOCK} from './zc-config.mock';
import {ZC_CORE_PROVIDERS} from '../services/ZCCoreService';
import {ZC_COMM_PROVIDERS} from '../../../comm/resources/ZCCommResource';
import {ZC_COMM_PROVIDERS_MOCK} from '../../../comm/resources/ZCCommResource.mock';
import {ZC_SECURITY_PROVIDERS} from '../../../security/resources/SecurityResource';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {ZCAppMock} from './zc-app.mock';
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
//document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(ZCAppMock,
      [HTTP_PROVIDERS
          , BaseRequestOptions
          , MockBackend
          , provide(Http, {
              useFactory: function(backend, defaultOptions) {
                  return new Http(backend, defaultOptions);
              },
              deps: [MockBackend, BaseRequestOptions]
          })
          , ROUTER_PROVIDERS
          , Modal
          //, TranslateService
          , provide(TranslateLoader, {
              useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
              deps: [Http]
          })
          // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
          , TranslateService
          , provide(LocationStrategy, { useClass: HashLocationStrategy })
          , ZCCONFIG_PROVIDERS
          , ZC_CORE_PROVIDERS
          , ZC_COMM_PROVIDERS
          , ZC_SECURITY_PROVIDERS

          , ZCCONFIG_PROVIDERS_MOCK
          , ZC_COMM_PROVIDERS_MOCK
  ])
  .catch(err => console.error(err));
//});