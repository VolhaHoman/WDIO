const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {

    constructor() {
        super('.specialization-types');
    }

    get addNewDoctorBtn() {
        return this.rootElement.$('button.e-control');
    }
}
module.exports = ListHeaderComponent;