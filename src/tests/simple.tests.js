describe('Doctors page', () => {
    beforeEach(async () => {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    });

    it('Check page title', async () => {
        const title = await browser.getTitle()
        console.log(title)
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await expect($('.new-doctor-dialog')).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();

        await $('[name="Name"]').setValue('Good Doctor');
        await $('#DoctorMobile').setValue('12345678901');
        await $('[name="Email"]').setValue('good_doctor@test.com');
        await $('[name="Education"]').setValue('Master');
        await $('[name="Designation"]').setValue('Test');

        await $('.e-footer-content button.e-primary').click();

        await expect($('.new-doctor-dialog')).not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. Good Doctor');
        await expect($('#Specialist_8').$('.education')).toHaveText('Master', {ignoreCase: true});
    });

    it('Close a modal window for adding a new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    })
});
