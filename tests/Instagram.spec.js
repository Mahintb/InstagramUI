const { test, expect } = require("@playwright/test");

const loginCredentials = require('../test-data/login_credentials.json');
const datasource = require('../test-data/data.json');

const LoginPage = require("../Pages/Login");
const DashboardPage = require("../Pages/Dasboard");

const {
    credentials: {
         username, password
    }
} = loginCredentials;
const {
    messages, profiles
} = datasource

test.use({ viewport: { width: 1536, height: 864 } })


test("Instagram page", async function ({ page }) {

    await page.goto("https://www.instagram.com/")
    const Loging = new LoginPage(page)
    await Loging.login(username, password)
    const Dashboard = new DashboardPage(page, profiles.profile1)
    await Dashboard.dashboard(messages.msg1)

})
