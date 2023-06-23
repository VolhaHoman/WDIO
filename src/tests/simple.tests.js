const DoctorsPage = require('../po/pages/doctors.page');
const DashboardPage = require('./../po/pages/dashboard.page');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage;

describe('Doctors page', () => {
    beforeEach(async () => {
        await dashboardPage.open();
    });

    it('Check page title', async () => {
        const title = await browser.getTitle()
        console.log(title)
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.addDoctorModal.rootElement).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootElement.waitForDisplayed();

        await $('[name="Name"]').setValue('Good Doctor');
        await $('#DoctorMobile').setValue('12345678901');
        await $('[name="Email"]').setValue('good_doctor@test.com');
        await $('[name="Education"]').setValue('Master');
        await $('[name="Designation"]').setValue('Test');

        await $('.e-footer-content button.e-primary').click();

        await expect(doctorsPage.addDoctorModal.rootElement).not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. Good Doctor');
        await expect($('#Specialist_8').$('.education')).toHaveText('Master', {ignoreCase: true});
    });

    it('Close a modal window for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorsPage.addDoctorModal.rootElement.waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect(doctorsPage.addDoctorModal.rootElement).not.toBeDisplayed();
    })
});
