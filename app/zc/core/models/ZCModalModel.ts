export class ZCModalContent {
    constructor(
        public zcModalData: ZCModalData = new ZCModalData(),
        public zcModalOptions: ZCModalOptions = new ZCModalOptions()
    ) {}
}

export class ZCModalData {
    status: string = '1';
    data: string = '';
    constructor(){
    }
}

export class ZCModalDefaults{
    size: string = '';
    isBlocking: boolean = true;
    keyboard: Array<number> | number = null;
    windowClass: string = 'zc-modal-window';

    constructor(){
    }
}

export class ZCModalOptions {
    modalType: string = 'INFO';
    iconClass: string = '';
    closeButtonText: string = '';
    actionButtonText: string = '';
    headerText: string = '';
    bodyText: string = '';
    promptText: string = '';
    promptData: string = '';
    showPrompt: boolean = false;
    showConfirm: boolean = false;

    constructor(){
    }
}


