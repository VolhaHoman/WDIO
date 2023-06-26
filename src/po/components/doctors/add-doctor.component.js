const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {

    constructor() {
        super('.new-doctor-dialog');
    }

    get saveBtn() {
        return this.rootElement.$('.e-footer-content button.e-primary')
    }

    get closeBtn() {
        return this.rootElement.$('.e-dlg-closeicon-btn')
    }

    /**
     * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
     * @returns {*}
     */
    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]',
        }
        return this.rootElement.$(selectors[name.toLowerCase()]);
    }
}

module.exports = AddDoctorComponent;