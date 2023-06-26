const {pages} = require('./../po')

describe('Doctors page', () => {
    beforeEach(async () => {
        await pages('dashboard').open();
    });

    it('Check page title', async () => {
        const title = await browser.getTitle()
        console.log(title)
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').addDoctorModal.rootElement).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorModal.rootElement.waitForDisplayed();

        await pages('doctors').addDoctorModal.input('name').setValue('Good Doctor');
        await pages('doctors').addDoctorModal.input('phone').setValue('12345678901');
        await pages('doctors').addDoctorModal.input('email').setValue('good_doctor@test.com');
        await pages('doctors').addDoctorModal.input('education').setValue('Master');
        await pages('doctors').addDoctorModal.input('designation').setValue('Test');

        await pages('doctors').addDoctorModal.saveBtn.click();

        await expect(pages('doctors').addDoctorModal.rootElement).not.toBeDisplayed();

        await expect(pages('doctors').specialistCard(8).name).toHaveText('Dr. Good Doctor');
        await expect(pages('doctors').specialistCard(8).education).toHaveText('Master', {ignoreCase: true});
    });

    it('Close a modal window for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorModal.rootElement.waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect(pages('doctors').addDoctorModal.rootElement).not.toBeDisplayed();
    })
});
