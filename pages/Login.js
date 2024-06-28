class LoginPage {
    constructor(page) {
        this.page = page
        this.textbox_username = page.locator("//input[@name='username']")
        this.textbox_password = page.locator("//input[@name='password']")
        this.button_login = page.locator('div').filter({ hasText: /^Log in$/ })
    }
    async login(username, password) {
        await this.textbox_username.fill(username)
        await this.textbox_password.fill(password)
        await this.button_login.first().click()

    }
}
module.exports = LoginPage;