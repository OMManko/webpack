import createModal from '../createModal';

class ErrorModal {

    constructor(data) {
        if (!ErrorModal.instance){
            this._data = [];
            ErrorModal.instance = this;
        }

        return ErrorModal.instance;
    }

    show(error) {
        createModal(error);
    }
}

const errorModal = new ErrorModal();
export default errorModal;