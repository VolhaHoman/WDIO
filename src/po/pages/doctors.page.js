const AddDoctorComponent = require("../components/doctors/add-doctor.component");
const ListHeaderComponent = require("../components/doctors/list-header.component");
const BasePage = require("./base.page");

class DoctorsPage extends BasePage {
     constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
     }
}

module.exports = DoctorsPage;