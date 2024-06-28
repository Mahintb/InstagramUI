class DashboardPage
{
    constructor(page,userprofile)
    {

        this.page = page
        this.button_notnow =  page.getByRole('button', { name: 'Not Now' })
        this.button_message = page.getByLabel('Direct messaging - 0 new')
       // this.button_user = page.locator(`//span[contains(text(),${userprofile})]`)
        this.button_user= page.getByRole('button', { name: `User avatar ${userprofile}`})
        this.textbox_message = page.locator("//p[@class='xat24cr xdj266r']")
        this.button_send = page.locator("//div[normalize-space()='Send']")
    }
   async dashboard(message,){ 
       await this.button_notnow.click()
       await this.button_message.click()
       await this.button_user.click()
       await this.textbox_message.fill(message)
       await this.button_send.click()
    }

}
module.exports=DashboardPage;