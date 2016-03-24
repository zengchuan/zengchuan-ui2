import {Component, provide, ElementRef, Injector} from 'angular2/core';
import {NgIf} from 'angular2/common';

import {ICustomModal, ICustomModalComponent} from 'angular2-modal/dist/angular2-modal';
import {ModalDialogInstance} from 'angular2-modal/dist/angular2-modal';
import {ZCModalContent} from '../models/ZCModalModel';

/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
@Component({
    selector: 'zc-modal',
    directives: [ NgIf ],
    template: `
<div class="modal-header" >
    <a class="close" (click)="close($event)">×</a>
    <h4>{{context.zcModalOptions.headerText}}</h4>
</div>
<div class="modal-body" >
    <div *ngIf="!context.zcModalOptions.showPrompt">
        <span class="zc-modal-type" [class]="context.zcModalOptions.iconClass"></span>
        <span class="zc-modal-text">{{context.zcModalOptions.bodyText}}</span>
    </div>
    <div *ngIf="context.zcModalOptions.showPrompt">
        <span class="col-md-3 col-lg-3" >{{context.zcModalOptions.promptText}}</span>
        <span><input type="text" class="col-md-9 col-lg-9" id="zcModalPromptText" [(ngModel)]="context.zcModalOptions.promptData"></span>
    </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-primary"   id="zcModalOkButton"
            *ngIf="context.zcModalOptions.showConfirm"
            (click)="ok($event);"
            >
        {{context.zcModalOptions.actionButtonText}}
    </button>
    <button type="button" class="btn" id="zcModalCloseButton"
            (click)="close($event)"
            >
        {{context.zcModalOptions.closeButtonText}}
    </button>
</div>
`,
})
export class ZCModal implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    context: ZCModalContent;

    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal) {
        this.dialog = dialog;
        this.context = <ZCModalContent>modelContentData;
    }

    ok($event) {
        $event.stopPropagation();

        this.context.zcModalData.status = '1';
        if(this.context.zcModalOptions.modalType === 'PROMPT'){
            this.context.zcModalData.data = this.context.zcModalOptions.promptData;
            this.dialog.close(this.context.zcModalData);
        } else {
            this.dialog.close(this.context.zcModalData);
        }
    }

    close($event) {
        $event.stopPropagation();
        this.context.zcModalData.status = '0';
        this.dialog.close(this.context.zcModalData);
    }
}
