export default class TrailerModalController {
    constructor($mdDialog, trailerUrl, modalTitle) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.trailerUrl = trailerUrl;
        this.modalTitle = modalTitle;
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}