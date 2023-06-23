class ListHeaderComponent {

    get rootElement() {
        return $('.specialization-types');
    }

    get addNewDoctorBtn() {
        return this.rootElement.$('button.e-control');
    }
}
module.exports = ListHeaderComponent;